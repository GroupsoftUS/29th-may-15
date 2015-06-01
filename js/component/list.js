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
 * @param  {object} list-search.directives
 * @param  {object} list-action.directives
 */
angular.module('list.directives', ['list-search.directives', 'list-action.directives'])	

/**
 * list object
 * @description  
 * 
 * defines the list functionality and its view
 *
 * @param  {object} api 
 */
	.directive('list', [ 'api', function(api) {
	  return {
		transclude: false,
		replace:false,
		templateUrl: function(element, attrs){ return 'partials/'+attrs.listLoad+'.html' },
		scope: {}, //isolated scope
		compile: function compile(element, attrs, transclude) {
			  
			  return {
				pre: function (scope, element, attrs) { 
					
				},
				post: function (scope, element, attrs) { 
					
					scope.languagePack = languagePack;
					
					//configuration to handle different instance of list object
					var config = {
									'retail-list': {
										'payload':{'call':'api/retailcalendar/GetRetailCalendarList', 'method':'get'},
										'dataObject':'retailCalendarListTable', //returned from API,
										'searchTitle':scope.languagePack.Retail_Calendar,
										'createUrl':'retail_calendar_setup.html',
										'urlTitle':scope.languagePack.Create_Retail_Calendar
									}
								 };

					//sets search component 
					scope.searchTitle = config[attrs.listLoad].searchTitle;
					scope.createUrl = config[attrs.listLoad].createUrl;
					scope.urlTitle = config[attrs.listLoad].urlTitle;
					
					
					//sets initial list condition 
					scope.dataload = false;
				
					//server call payload 
					api.params = config[attrs.listLoad].payload;

					//data binding after promise returns data.
					api.getData().then(function(d) {
						scope.dataload = true;
						scope.listData = d.data[config[attrs.listLoad].dataObject]
					});
				}
			 }
		}
	  } 
}])