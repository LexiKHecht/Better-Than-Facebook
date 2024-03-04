const { User, Thoughts } = require("../models/index");

module.exports = {
  // get ALL users
  async getUsers(req, res) {
    try {
      const users = await User.find();
      res.json(users);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  // get one user by their id
  async getSingleUser(req, res) {
    try {
      const user = await User.findOne({ _id: req.params.userId })
        .populate({ path: "thoughts", select: "-__v" })
        .populate({ path: "friends", select: "-__v" });

      if (!user) {
        return res.status(404).json({ message: "No user found" });
      }

      res.json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  // create a new user
  async createUser(req, res) {
    try {
      const userCreate = await User.create(req.body);
      res.json(userCreate);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  // update user by their id
  async updateUser(req, res) {
    try {
      const userUpdate = await User.findOneAndUpdate(
        { _id: req.params.userId },
        { $set: req.body },
        { runValidators: true, new: true }
      );

      if (!userUpdate) {
        return res.status(404).json({ message: "No user found" });
      }

      res.json(userUpdate);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  // delete user by their id
  async deleteUser(req, res) {
    try {
       const thought = await Thoughts.findOne({ _id: req.params.thoughtId });
      const userDelete = await User.findOneAndDelete({
        _id: req.params.userId,
      });

      if (!userDelete) {
        return res.status(404).json({ message: "No user found" });
      }
      else if (thought) {
              await Thoughts.deleteMany({ _id: { $in: userDelete.thoughts } });
      res.json({ message: "User deleted!" });
      }
      
      res.json({ message: "User deleted!" });

      // deleteing corrisponding user thoughts

    } catch (err) {
      res.status(500).json(err);
    }
  },
  // add friend by their id and user id
  async addFriend(req, res) {
    try {
      const friend = await User.findOneAndUpdate(
        { _id: req.params.userId },
        { $push: { friends: req.params.friendId } },
        { runValidators: true, new: true }
      );

      if (!friend) {
        return res.status(404).json({ message: "No user found" });
      }

      res.json(friend);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  // remove friend by their id and user id
  async deleteFriend(req, res) {
    try {
      const friendDelete = await User.findOneAndUpdate(
        { _id: req.params.userId },
        { $pull: { friends: req.params.friendId } },
        { runValidators: true, new: true }
      );

      if (!friendDelete) {
        return res.status(404).json({ message: "No user found" });
      }

      res.json(friendDelete);
    } catch (err) {
      res.status(500).json(err);
    }
  },
};
