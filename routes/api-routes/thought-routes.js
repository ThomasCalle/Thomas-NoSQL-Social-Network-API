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

//GET all Thoughts
router.route('/').get(getAllThoughts).post(createThought);

//
router.route('/:thoughtId').get(getThoughtsById).put(updateThoughtById).delete(deleteThought);

//PULL reaction
router.route('/:thoughtId/reactions').post(createReaction);

//Delete Reaction
router.route('/:thoughtId/reactions/:reactionId').delete(deleteReaction);

module.exports = router;