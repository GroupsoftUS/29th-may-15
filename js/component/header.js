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
angular.module('header.directives', [])	

/**
 * @header object
 * @description  
 * 
 * defines the header functionality and its view
 *
 * @param  {object} user 
 */
	.directive('header', [ 'user', function(user) {
	  return {
		transclude: false,
		replace:false,
		templateUrl: 'partials/header.html',
		compile: function compile(element, attrs, transclude) {
			  
			  return {
				pre: function (scope, element, attrs) { 
					
				},
				post: function (scope, element, attrs) { 
					
					// defines current active menu 
					scope.currentMenu = attrs.headerActive;

					//menu options which can be configured and managed when module increases 
					scope.menuOptions = [
											{
												'name' :languagePack.Select,
												'value' :'',
												'selector':''
											},
											{
												'name' :languagePack.Retail_Calendar,
												'value' :'retail-calendar/index.html',
												'selector':'retail'
											}
										]

					//redirects user to selected module <see menuOptions value for redirect location> 
					angular.element('#menuOption').change(function(){
						if(angular.element(this).val() != ''){
							window.location = angular.element(this).val();
						}				
										
					});
					
					//toggles menu 
					angular.element('.menu-button').click(function(){
						angular.element('div.wrapper').toggleClass('nav-min');
					});
					
					scope.logout = function(){
						user.logout();
						window.location = appPath+'/';
					}

				}
		  }
		}
	  } 
}])