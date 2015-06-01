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
angular.module('groupsoft', ['groupsoft.service', 'groupsoft.filters']).

/**
 * @method indexController 
 * @description  
 * 
 * Controller function to handel data/event binding ["ng-controller="indexController""]
 *
 * @param  {object} $scope 
 * @param  {object} api
 * @param  {object} $filter
 * @param  {object} user
 */
 controller('indexController', ['$scope', 'api',  '$filter', 'user',  function($scope, api, $filter, user) {
		//set language pack object
		$scope.languagePack = languagePack;

		//monitors post/per login activity 
		$scope.postLogin = 0;	
		
		//check user status
		$scope.userData = user.checkLogin();
		if($scope.userData !== undefined){
			$scope.postLogin = 1;
		}
		
		/*login method*/
		$scope.login =  function(){
			var init = true;
			angular.element('.validate').each(function() {
				if($filter('validate')(this) == false ){
					init = false;
					return false;
				}
			});

			if(init === true){
				api.params = {'call':'/api/Login/UserTokenOnValidate/GROUPSOFT/Admin', 'method':'post','username':$scope.providedName, 'password':$scope.providedPassword, 'company': $scope.providedCompany}							
				api.mockLogin().then(function(d) {
					if(d !== false){
						angular.element('.empty').val('');
						angular.element('.log-block').toggle( "slide", { direction: 'right' } );
						angular.element('.sign_in_block').animate({width:'100%'});	
						angular.element('.sign_in_block').show("slide", { direction: 'right' }, 500);
						$scope.userData = d;
					}
					else{
						$scope.error = 1
					}
				});
			}
		}

		/*logout method*/
		$scope.logout = function(){
			user.logout();
			angular.element('.sign_in_block').toggle("slide", { direction: 'right' }, 500); 
			angular.element('.log-block').show( "slide", { direction: 'right' } );
			angular.element('.log-block').animate({width:'40%'});			
			$scope.postLogin = 0;	
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
    angular.element(".login_wrap, .sign_in_block").height($(document).height());
	angular.bootstrap(document, ["groupsoft"]);	
});