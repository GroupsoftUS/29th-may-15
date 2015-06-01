/*
 *
 * @author      Roshan Chettri <roshan.chettri@jktls.com>
 * @copyright   2015 Group Soft
 * @link        http://www.groupsoft.com
 * @version     1.0.0
 * @package     Groupsoft
 *
 */


/**
 * @description 
 * 
 * Defines uniform resource locator for API communication 
 *
 */
var apiUrl = 'http://54.243.181.114:8895'

/**
 * @description 
 * 
 * Defines hosted path for absolute required path
 *
 */
var appPath = '' //http://jktls.com/gp

/**
 * @description  
 * 
 * Dependent/reqiored object for the module 
 *
 * @param  {object} cookies
 */
angular.module('groupsoft.service', ['ngCookies'])
 

 /**
 * @method api 
 * @description
 *
 * communicates with api , based on the intitated object  
 *
 * @param  {object} $http 
 * @param  {object} $cookieStore
 * @param  {object} $q [to mock API communication & will be removed after API finialization] 
 * @returns  {object} api
 */
.factory('api', ['$http', '$cookieStore', '$q', function($http, $cookieStore, $q) {  
 
  this.params = {};	
  var service = {
	  mockLogin: function() {
			var d = $q.defer();
			try {
				var data = {
								'username':this.params.username,
								'company':this.params.company,
								'image':'images/noimage.jpg',
								'token':'vnnmiw4wo5hixejx0huzcwb5'
							}
				$cookieStore.put('user', data);
				d.resolve(data);
			} catch (e) {
				d.reject(e);
			}
			return d.promise;
	  },
	  getData: function() {
			
			this.promise = $http({
				method: this.params.method,
				url: apiUrl+'/'+this.params.call,
				data: (this.params),
				headers: {'UserToken': $cookieStore.get('user').token},
			}).then(function(response) {
					return response 
			})
			return this.promise;
	  }
  };
  return service;
}])

/**
 * @method user 
 * @description  
 *
 * manages user information/object
 *
 * @param  {object} $cookieStore
 * @returns  {object} user
 */
.factory('user', ['$cookieStore', function($cookieStore) {  
	var data = {
		 checkLogin: function() {
			return $cookieStore.get('user');	
		 },
		 logout: function() {
			$cookieStore.remove('user');
		 }
			 
	}
	return data;
}])