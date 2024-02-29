const connection = require("../config/connection");
// const mongoose = require("mongoose");
const { Thoughts, User } = require("../models/index");
const { faker } = require("@faker-js/faker");

connection.once("open", async () => {
  // deleting collections if populated
  let thoughtCheck = await connection.db
    .listCollections({ name: "thoughts" })
    .toArray();
  if (thoughtCheck.length > 0) {
    await connection.dropCollection("thoughts");
    console.log("thought collection dropped");
  }

  let userCheck = await connection.db
    .listCollections({ name: "users" })
    .toArray();
  if (userCheck.length > 0) {
    await connection.dropCollection("users");
    console.log("user collection dropped");
  }
  // repopulating
  try {
    // seeding users with faker
    const data = [];

    for (let i = 0; i < 10; i++) {
      const username = faker.internet.userName();
      const email = faker.internet.email();

      const user = new User({
        username,
        email,
      });

      data.push(user);
    }
    // saving faker users
    const savedUsers = await User.create(data);
    console.log(`${savedUsers.length} users created`);

    // seeding thoughts with faker
    for (const user of savedUsers) {
      const thoughtCount = 3; //not final Lex!
      const data = [];

      for (let i = 0; i < thoughtCount; i++) {
        const thoughtText = faker.lorem.sentence();
        const username = user.username;

        const thought = new Thoughts({
          thoughtText,
          username,
        });

        data.push(thought);
      }
      // saving faker thoughts
      const savedThoughts = await Thoughts.create(data);
      console.log(
        `${savedThoughts.length} thoughts created for user ${user.username}`
      );

      // adding craeted thoughts to users
      user.thoughts = data.map((thought) => thought._id);
      await user.save();
    }
  } catch (err) {
    console.error("Error seeding", err);
  }

  process.exit(0);
});
