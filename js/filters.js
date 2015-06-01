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
 * @defination filter object
 */
angular.module('groupsoft.filters', []).

 /**
 * @method validate 
 * @description 
 * 
 * validates elements based on the class attribute
 *
 * @returns  bool
 */
  filter('validate', function () {
	return function (element) {
	    $(element).css({'border':''});	
		$('.has-error').removeClass('has-error');

		/* validates empty */
		if($(element).hasClass('empty') && $(element).val() == ''){
			if($(element).hasClass('parentError')){
				$(element).parent().addClass('has-error');
				$(element).focus();
			}
			else{
				$(element).css({'border':'1px dotted red'}).focus();
			}
			return false;					
		}
		return true
	};
  })