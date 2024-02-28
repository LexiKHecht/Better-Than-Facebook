const { Thought, User, Thoughts } = require("../models/index");

module.exports = {
  // get ALL thoughts
  async getThoughts(req, res) {
    try {
      const thought = await Thought.find();
      res.json(thought);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  // get one thought by id
  async getSingleThought(req, res) {
    try {
      const thought = await Thought.findOne({ _id: req.params.thoughtId });

      if (!thought) {
        return res.status(404).json({ message: "No thought found" });
      }

      res.json(thought);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  // create a new thought
  async createThought(req, res) {
    try {
      const thoughtCreate = await Thought.create(req.body);
      const user = await User.findOneAndUpdate(
        { _id: req.body.userId },
        { $addToSet: { thoughts: thoughtCreate._id } },
        { runValidators: true, new: true }
      );

      if (!user) {
        return res.status(404).json({
          message: "Thought created, but no user found",
        });
      }

      res.json("Thought created!");
    } catch (err) {
      res.status(500).json(err);
    }
  },
  // update thought by its id
  async updateThought(req, res) {
    try {
      const thoughtUpdate = await Thought.findOneAndUpdate(
        { _id: req.params.thoughtId },
        { $set: req.body },
        { runValidators: true, new: true }
      );

      if (!updatethought) {
        return res.status(404).json({ message: "No thought found" });
      }

      res.json(updateThought);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  // delete thought by its id
  async deleteThought(req, res) {
    try {
      const thoughtDelete = await Thought.findOneAndRemove({
        _id: req.params.thoughtId,
      });

      if (!thoughtDelete) {
        return res.status(404).json({ message: "No thought found" });
      }

      res.json({ message: "Thought deleted!" });
    } catch (err) {
      res.status(500).json(err);
    }
  },
  // Add thought reaction by id
  async addReaction(req, res) {
    try {
      const thought = await Thought.findOneAndUpdate(
        { _id: req.params.thoughtId },
        { $addToSet: { reactions: req.body } },
        { runValidators: true, new: true }
      )
        .populate({ path: "reactions", select: "-__v" })
        .select("-__v");

      if (!thought) {
        return res.status(404).json({ message: "No thought found" });
      }

      res.json(thought);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  // Remove thought reaction by id
  async deleteReaction(req, res) {
    try {
      const thoughtDelete = await Thought.findOneAndUpdate(
        { _id: req.params.thoughtId },
        { $pull: { reactions: { _id: req.params.reactionId } } },
        { runValidators: true, new: true }
      );

      if (!thoughtDelete) {
        return res.status(404).json({ message: "No thought found" });
      }

      res.json(thoughtDelete);
    } catch (err) {
      res.status(500).json(err);
    }
  },
};
