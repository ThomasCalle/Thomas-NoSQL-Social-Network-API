// Import the necessary dependencies and controllers
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

// Define the routes for GET and POST all Thoughts
router.route('/').get(getAllThoughts).post(createThought);

// Define the routes for GET, PUT and DELETE Thoughts
router.route('/:thoughtId').get(getThoughtsById).put(updateThoughtById).delete(deleteThought);

// Define the route for POST reaction to a Thought
router.route('/:thoughtId/reactions').post(createReaction);

// Define the route for DELETE reaction to a Thought
router.route('/:thoughtId/reactions/:reactionId').delete(deleteReaction);
// Export the router
module.exports = router;