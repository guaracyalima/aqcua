/**
 * AngularJS Application
 * @author Arthur Costa <root.arthur@gmail.com>
 */
angular.module('acquaApp')
app.directive('dtsHeroslider', function () { 
    
    return { 
        restrict: 'AEC', 
        link: function (scope, element, attrs) { 
            //var options = scope.$eval($(element).attr('data-options')); 
            $(element).startSlider();
        } 
    }; 

}); 