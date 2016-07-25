/**
 * Brand.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
  attributes: {
  	name: {
  		type : 'string',
  	},
  	website : {
  		type : 'string',
  	},
  	lat : {
  		type : 'string',
  	},
  	lng : {
  		type : 'string'
  	},
  	twitter : {
  		type : 'string'
  	},
  	facebook : {
  		type : 'string'
  	},
  	yelp : {
  		type : 'string'
  	},
  	pintrest : {
  		type : 'string'
  	},
  	restaurants: {
      collection: 'restaurants',
      via: 'brand_id'
    }
  }
};

