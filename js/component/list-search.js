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
angular.module('list-search.directives', [])	

/**
 * @search object
 * @description  
 * 
 * defines the search functionality and its view
 *
 */
	.directive('search', [ function() {
	  return {
		transclude: false,
		replace:false,
		templateUrl: 'partials/list-search.html',
		compile: function compile(element, attrs, transclude) {
			  
			  return {
				pre: function (scope, element, attrs) { 
					
				},
				post: function (scope, element, attrs) { 
						

				}
		  }
		}
	  } 
}])