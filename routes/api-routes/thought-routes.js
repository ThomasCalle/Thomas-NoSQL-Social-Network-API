const router = require('express').Router();
const {
    getAllThoughts,
    getThoughtsById,
    createThought,
    deleteThought,
    updateThoughtById,
    createReaction,
    deleteReaction,
} = require('../../controllers/thought-controller');

//GET, POST all Thoughts
router.route('/').get(getAllThoughts).post(createThought);

// GET, PUT AND DELETE Thought
router.route('/:thoughtId').get(getThoughtsById).put(updateThoughtById).delete(deleteThought);

//POST reaction
router.route('/:thoughtId/reactions').post(createReaction);

//Delete Reaction
router.route('/:thoughtId/reactions/:reactionId').delete(deleteReaction);

module.exports = router;