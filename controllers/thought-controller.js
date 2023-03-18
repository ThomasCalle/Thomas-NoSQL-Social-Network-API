const {Thought,User} = require('../models');
const ThoughtController = {
    getThoughts(req, res){
        Thought.find({})
        .then(thoughtData => res.json(thoughtData))
        .catch(err => res.status(500).json(err));
    },
    getSingleThought(req,res){
        Thought.findById(req.params.id)
        .then(thoughtData => res.json(thoughtData))
        .catch(err => res.status(500).json(err));
    },
    createThought(req,res){
        Thought.create(req.body)
        .then(thoughtData => res.json(thoughtData))
        .catch(err => res.status(500).json(err));
    }
}



module.exports = ThoughtController