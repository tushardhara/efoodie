/**
 * BackendController
 *
 * @description :: Server-side logic for managing backends
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
var moment = require('moment');
module.exports = {
	index: function(req, res) {
        res.view('admin/index', { layout: 'backend' });
    },
    dashboard: function(req, res) {
    	res.view('admin/dashboard', { layout: 'backenddash' });
    },
    users: function(req, res) {
        User.count({ roles: { '!': 'admin' } }).exec(function(err, userCount) {
            User.find({ roles: { '!': 'admin' } }).paginate({ page: !_.isUndefined(req.param('number')) ? req.param('number') : '1', limit: 10 }).exec(function(err, userData) {
                data = {
                    page: Math.ceil(userCount / 10),
                    users: userData,
                }
                res.view('admin/users', { layout: 'backenddash', data: data, moment: moment });
            });
        });
    },
};

