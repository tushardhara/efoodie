/**
 * AuthController
 *
 * @description :: Server-side logic for managing auths
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
var bcrypt = require('bcrypt');
var salt = '$2a$10$0x/vXvP8xiGOuFIywC/ZWu';
module.exports = {
	adminlogin: function(req,res) {
		User.findOne({or:[{email:req.body.identity},{username:req.body.identity}]}).exec(function(err,user){
			console.log(req.body);
			if(err){
				req.session.authenticated = false;
				return res.redirect('/admin');
			}
			if(!user){
				req.session.authenticated = false;
				return res.redirect('/admin');
			}else{
		        bcrypt.hash(req.body.password, salt, function(err, hash) {
		            if (err) {
		            	req.session.authenticated = false;
		                return res.redirect('/admin');
		            } else {
						if(user.password == hash && user.roles == 'admin'){
		            		req.session.authenticated = true;
		            		temp_user = user;
		            		delete temp_user.password;
							req.session.user = temp_user; 
		            		return res.redirect('/admin/dashboard');
		            	}else{
		            		req.session.authenticated = false;
		            		return res.redirect('/admin');
		            	}
		            }
		        });
			}
		})
	},
	login: function(req,res) {
		User.findOne({or:[{email:req.body.identity},{username:req.body.identity}]}).exec(function(err,user){
			if(err){
				req.session.authenticated = false;
				return res.redirect('/');
			}
			if(!user){
				req.session.authenticated = false;
				return res.redirect('/');
			}else{
		        bcrypt.hash(req.body.password, salt, function(err, hash) {
		            if (err) {
		            	req.session.authenticated = false;
		                return res.redirect('/');
		            } else {
						if(user.password == hash && user.roles == 'user'){
		            		req.session.authenticated = true;
		            		temp_user = user;
		            		delete temp_user.password;
							req.session.user = temp_user; 
		            		return res.redirect('/');
		            	}else{
		            		req.session.authenticated = false;
		            		return res.redirect('/');
		            	}
		            }
		        });
			}
		})
	},
	restpassword: function(req,res){
		if(req.session.authenticated){
			User.findOne({email:req.body.identity}).exec(function(err,user){
				if(err){
					return res.redirect('/');
				}
			});
		}else{

		}
	},
	logout: function(req,res) {
		req.session.user = '';
		req.session.authenticated = false;
		return res.redirect('/');
	},
	adminlogout: function(req,res) {
		req.session.user = '';
		req.session.authenticated = false;
		return res.redirect('/admin');
	}
};

