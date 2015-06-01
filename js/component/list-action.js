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
angular.module('list-action.directives', [])	

/**
 * @action object
 * @description  
 * 
 * defines the action functionality and its view
 *
 */
	.directive('action', [ function() {
	  return {
		transclude: false,
		replace:false,
		templateUrl: 'partials/list-action.html',
		compile: function compile(element, attrs, transclude) {
			  
			  return {
				pre: function (scope, element, attrs) { 
					
				},
				post: function (scope, element, attrs) { 
						
						/*
						angular.element(".link_plan_pop").click(function(){
							angular.element(this).siblings(".link_viewpop_block").fadeIn();
							angular.element(this).parent().parent().parent().siblings().children().children().find(".link_viewpop_block").hide();
						});
						angular.element(".close_poplink").click(function(){
							angular.element(".link_viewpop_block").hide();
						});
						*/

				}
		  }
		}
	  } 
}])