/**
 * Deal.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
  	headline: {
  		type : 'string'
  	},
  	sub_headline: {
  		type : 'string'
  	},
  	description : {
  		type : 'string'
  	},
  	disclaimer_1 : {
  		type : 'string'
  	},
  	disclaimer_2 : {
  		type : 'string'
  	},
  	deals_per_subscriber : {
  		type : 'number'
  	},
  	total_download_limit : {
  		type : 'number'
  	},
  	start_date : {
  		type : 'date'
  	},
  	end_date : {
  		type : 'date'
  	},
  	image_1 : {
  		type : 'string'
  	},
  	image_2 : {
  		type : 'string'
  	},
  	image_3 : {
  		type : 'string'
  	},
  	brand_id:{
  		model: 'brand'
  	}
  }
};

