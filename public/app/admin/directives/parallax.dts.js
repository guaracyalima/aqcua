/**
 * AngularJS Application
 * @author Arthur Costa <root.arthur@gmail.com>
 */
angular.module('mangueApp')
app.directive('dtsParallax', function () { 
    
    return { 
        restrict: 'AEC', 
        link: function (scope, element, attrs) { 
            var options = scope.$eval($(element).attr('data-options')); 
            $(element).parallaxHeader(options); 
        } 
    }; 

}); 