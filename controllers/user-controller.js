const { User } = require('../models');

const UserController = {
  // 1. Get all users
  getAllUsers(req, res) {
    User.find({})
      .then(userData => res.json(userData))
      .catch(err => res.status(500).json(err));
  },

  // 2. Get one user by ID
  getUserById(req, res) {
    User.findOne(req.params.id)
      .then(userData => res.json(userData))
      .catch(err => res.status(500).json(err));
  },

  // 3. Create a user
  createUser(req, res) {
    User.create(req.body)
      .then(userData => res.json(userData))
      .catch(err => res.status(500).json(err));
  },

  // 4. Update user by ID
  updateUserById(req, res) {
    User.findOneAndUpdate(req.params.id, req.body, { new: true })
      .then(userData => {
        if (!userData) {
          return res.status(404).json({ message: 'User not found' });
        }
        res.json(userData);
      })
      .catch(err => res.status(500).json(err));
  },

  // 5. Delete user
  deleteUserById(req, res) {
    User.findOneAndDelete(req.params.id)
      .then(userData => {
        if (!userData) {
          return res.status(404).json({ message: 'User not found' });
        }
        res.json({ message: 'User deleted successfully' });
      })
      .catch(err => res.status(500).json(err));
  },

  // 6. Add friend to user's friend list
  addFriend(req, res) {
    User.findOneAndUpdate(
      req.params.id,
      { $addToSet: { friends: req.body.friendId } },
      { new: true }
    )
      .then(userData => {
        if (!userData) {
          return res.status(404).json({ message: 'User not found' });
        }
        res.json(userData);
      })
      .catch(err => res.status(500).json(err));
  },

  // 7. Remove friend from user's friend list
  removeFriend(req, res) {
    User.findOneAndUpdate(
      req.params.id,
      { $pull: { friends: req.params.friendId } },
      { new: true }
    )
      .then(userData => {
        if (!userData) {
          return res.status(404).json({ message: 'User not found' });
        }
        res.json(userData);
      })
      .catch(err => res.status(500).json(err));
  },

  // 8. Check if friend was removed
  checkFriendRemoved(req, res) {
    User.findOne(req.params.id)
      .then(userData => {
        if (!userData.friends.includes(req.params.friendId)) {
          res.json({ message: 'Friend removed successfully' });
        } else {
          res.json({ message: 'Friend was not removed' });
        }
      })
      .catch(err => res.status(500).json(err));
  }
};

module.exports = UserController;
