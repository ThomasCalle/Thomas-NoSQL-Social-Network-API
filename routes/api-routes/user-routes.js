const router = require('express').Router();
const {
  getAllUsers,
  getUserById,
  createUser,
  updateUserById,
  deleteUserById,
  addFriend,
  removeFriend,
//   checkFriendRemoved,
} = require('../../controllers/user-controller');

// GET and POST all users
router.route('/').get(getAllUsers).post(createUser);

// // GET a single user by its _id and populated thought and friend data
// router.get('/:id', getUserById);
router.route('/:userId').get(getUserById).put(updateUserById).delete(deleteUserById);

// Add and Delete Friends
router.route('/:userId/friends/:friendId').post(addFriend).delete(removeFriend);
// // PUT to update a user by its _id
// router.put('/:id', updateUserById);

// // DELETE to remove user by its _id
// router.delete('/:id', deleteUserById);

module.exports = router;