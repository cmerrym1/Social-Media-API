const { User } = require('../models');

const userController = {
    // get all users
    getAllUser(req, res) {
      User.find({})
        .then(dbUserData => res.json(dbUserData))
        .catch(err => {
          console.log(err);
          res.status(400).json(err);
        });
    },
  
    // get one user by id
    getUserById({ params }, res) {
      User.findOne({ _id: params.id })
        .then(dbUserData => {
          // If no user is found, send 404
          if (!dbUserData) {
            res.status(404).json({ message: 'No user found with this id!' });
            return;
          }
          res.json(dbUserData);
        })
        .catch(err => {
          console.log(err);
          res.status(400).json(err);
        });
    },

    //createUser
    createUser({ body }, res) {
        User.create(body)
        .then(dbUserData => this.res.json(dbUserData))
        .catch(err => this.res.status(400).json(err));
    }

    // update user by id
    
  }

module.exports = userController;