const router = require('express').Router();
const {
    getThoughts,
    getSingleThought,
    createThought
} = require('../../controllers/thought-controller');

// // GET all users
router.get('/', getThoughts);

// // GET a single user by its _id and populated thought and friend data
router.get('/:id', getSingleThought);

// // POST a new user
router.post('/', createThought);

// // PUT to update a user by its _id
// router.put('/:id', updateUserById);

// // DELETE to remove user by its _id
// router.delete('/:id', deleteUserById);

module.exports = router;