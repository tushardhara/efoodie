/**
 * FrontendController
 *
 * @description :: Server-side logic for managing frontends
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	index: function (req, res) {
    	res.view('frontend/index', { layout: 'frontend' });
  	}
};

