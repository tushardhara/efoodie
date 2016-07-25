/**
 * User.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */
var bcrypt = require('bcrypt');
var salt = '$2a$10$0x/vXvP8xiGOuFIywC/ZWu';
module.exports = {

  attributes: {
  	username: {
      type: 'string',
      unique: true,
      index: true,
      notNull: true
    },
  	email: {
        type: 'email',
        required: true,
        unique: true,
        index: true,
    },
    password: {
        type: 'string',
        minLength: 6,
        required: true
    },
    avatar: {
    	type: 'string',
    },
    roles: {
    	type: 'string',
    	enum: ['user', 'admin'],
    	defaultsTo: 'user'
    },
    toJSON: function() {
        var obj = this.toObject();
        delete obj.password;
        return obj;
    }
  },
  beforeCreate: function (user, cb) {
    if (_.isEmpty(user.username)) {
      user.username = user.email;
    }
    bcrypt.hash(user.password, salt, function(err, hash) {
        if (err) {
            console.log(err);
            cb(err);
        } else {
            user.password = hash;
            cb();
        }
    });
  },
};

