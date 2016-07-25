/**
 * Bootstrap
 * (sails.config.bootstrap)
 *
 * An asynchronous bootstrap function that runs before your Sails app gets lifted.
 * This gives you an opportunity to set up your data model, run jobs, or perform some special logic.
 *
 * For more information on bootstrapping your app, check out:
 * http://sailsjs.org/#!/documentation/reference/sails.config/sails.config.bootstrap.html
 */
var faker = require('faker');
module.exports.bootstrap = function(cb) {

  // It's very important to trigger this callback method when you are finished
  // with the bootstrap!  (otherwise your server will never lift, since it's waiting on the bootstrap)
  User.count().exec(function(err, count) {
        if (count > 0) {
            sails.log.error('Already have data.');
        } else {
            _.each(_.range(25), (val) => {
                if(val > 0){
                    let randomEmail = faker.internet.email();
                    let userName = faker.internet.userName();
                    let randomAvatar = faker.internet.avatar();
                    User.create({
                        username: userName,
                        email: randomEmail,
                        password: '123123',
                        avatar : randomAvatar
                    })
                    .then(function(user) {
                        sails.log(user);
                    })
                    .catch(function(error) {
                        sails.log.error(error);
                    });
                }else if(val==0){
                    let randomAvatar = faker.internet.avatar();
                    User.create({
                        username: 'admin',
                        email: 'admin@myiswi.com',
                        password: '123123',
                        avatar : randomAvatar,
                        roles : 'admin'
                    })
                    .then(function(user) {
                        console.log(user)
                    })
                    .catch(function(error) {
                        sails.log.error(error);
                    });
                }
            })
        }
    });
  cb();
};
