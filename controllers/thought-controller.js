// Tutor: Note should the reactions and thoguhts be paired together?
const { Thought, User, Reaction } = require('../models');
const {Types} = require('mongoose');

const ThoughtController = {
  async getAllThoughts(req, res) {
    try {
      const thoughts = await Thought.find({});
      res.json(thoughts);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  async getThoughtsById(req, res) {
    try {
      const thought = await Thought.findOne({_id:req.params.thoughtId});
      if (!thought) {
        res.status(404).json({ message: 'Thought not found' });
      } else {
        res.json(thought);
      }
    } catch (err) {
      res.status(500).json(err);
    }
  },

  async createThought(req, res) {
    try {
      const thought = await Thought.create(req.body);
      res.status(201).json(thought);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  async deleteThought(req,res) {
    try {
        const thought = await Thought.findByIdAndDelete({_id:req.params.thoughtId});
        res.status(200).json(thought);
    } catch (err) {
        res.status(500).json(err);
    }
  },

  async updateThoughtById(req, res) {
    try {
      const thought = await Thought.findByIdAndUpdate(req.params.thoughtId, req.body, {
        new: true,
      });
      if (!thought) {
        res.status(404).json({ message: 'Thought not found' });
      } else {
        res.json(thought);
      }
    } catch (err) {
      res.status(500).json(err);
    }
  },

  async createReaction(req, res) {
  //   try {
  //     const thought = await Thought.(_id.req.body);
  //     await Thought.findByIdAndUpdate(req.params.thoughtId, {
  //       $push: { reactions: reaction._id },
  //     });
  //     res.status(201).json(reaction);
  //   } catch (err) {
  //     res.status(500).json(err);
  //   }
  // },
// TUTOR NOTE
      try {
        const thought = await Thought.findOneAndUpdate(
            {_id:req.params.thoughtId},
            {$addToSet: {reactions: req.body}},
            {runValidators: true, new: true}
        );
        thought ? res.json(thought) : res.status(404).json({message: notFound});
    } catch (e) {
        res.status(500).json(e);
    }
  },



  async deleteReaction(req, res) {
  //   try {
  //     const reaction = await Thought.findByIdAndUpdate({_id:req.params.thoughtId});
  //     if (!reaction) {
  //       res.status(404).json({ message: 'Reaction not found' });
  //     } else {
  //       await Thought.findByIdAndUpdate(req.params.thoughtId, {
  //         $pull: { reactions: reaction._id },
  //       });
  //       res.json(reaction);
  //     }
  //   } catch (err) {
  //     res.status(500).json(err);
  //   }
  // },
    // TUTOR NOTE
      try {
        const thought = await Thought.findOneAndUpdate(
            {_id: req.params.thoughtId},
            {$pull: {reactions: {_id: req.params.reactionId}}},
            {runValidators: true, new: true}
        );

        thought ? res.json(thought) : res.status(404).json({message: notFound});
    } catch (e) {
        res.status(500).json(e);
    }
  },


};

module.exports = ThoughtController;




// OLD STUFF

// const {Thought,User} = require('../models');
// const ThoughtController = {
//     getThoughts(req, res){
//         Thought.find({})
//         .then(thoughtData => res.json(thoughtData))
//         .catch(err => res.status(500).json(err));
//     },
//     getSingleThought(req,res){
//         Thought.findById(req.params.id)
//         .then(thoughtData => res.json(thoughtData))
//         .catch(err => res.status(500).json(err));
//     },
//     createThought(req,res){
//         Thought.create(req.body)
//         .then(thoughtData => res.json(thoughtData))
//         .catch(err => res.status(500).json(err));
//     }
// }

// module.exports = ThoughtController

