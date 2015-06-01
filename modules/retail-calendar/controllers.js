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
 * Dependent object for the module 
 * @param  {object} groupsoft.service
 * @param  {object} groupsoft.filters
 */
angular.module('groupsoft', ['groupsoft.service', 'groupsoft.filters', 'header.directives', 'leftnav.directives', 'list.directives']).

/**
 * @method indexController 
 * @description  
 * 
 * Controller function to handel data/event binding ["ng-controller="indexController""]
 *
 * @param  {object} $scope 
 * @param  {object} $filter
 * @param  {object} user
 */
 controller('indexController', ['$scope', '$filter', 'user',  function($scope, $filter, user) {
		//set language pack object
		$scope.languagePack = languagePack;

		//monitors post/per login activity 
		$scope.postLogin = 0;	
		
		//check user status
		$scope.userData = user.checkLogin();
		if($scope.userData === undefined){
			window.location= "/";
		}
	}
]);




/**
 * @description
 * 
 * bootstraps application module , starting point of application, invokes controller
 *
 */
angular.element(document).ready(function() {
   angular.bootstrap(document, ["groupsoft"]);	
});