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
 */
angular.module('leftnav.directives', [])	

/**
 * @left navigation object
 * @description  
 * 
 * defines the left navigation functionality and its view
 *
 */
	.directive('leftnav', [ function() {
	  return {
		transclude: false,
		replace:false,
		templateUrl: 'partials/left-nav.html',
		compile: function compile(element, attrs, transclude) {
			  
			  return {
				pre: function (scope, element, attrs) { 
					
				},
				post: function (scope, element, attrs) { 
					//set left menu active
					scope.activeMenu  = attrs.leftnavActive;

					//setting height of nav container
					angular.element('#nav-container').css("height", $('html').height());
				}
		  }
		}
	  } 
}])