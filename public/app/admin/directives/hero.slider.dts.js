/**
 * AngularJS Application
 * @author Arthur Costa <root.arthur@gmail.com>
 */
angular.module('mangueApp')
app.directive('dtsHeroslider', function ($timeout) { 
    
    return { 
        restrict: 'AEC',
        transclude: true,
        templateUrl: 'assets/tpl/components/hero-slider.html',
        scope:{
            slideData: '='
        },
        link: function (scope, element, attrs) { 
            scope.slide = {};
            scope.teste = 123;
            scope.$watch('slideData', function(nv, ov) {
                if( nv !== undefined ){
                    if (nv !== ov) {
                        scope.slider = nv;
                    }else{
                        scope.slider = ov;
                    }
                }
            });
            $timeout(function(){
                $(element).startSlider();
            }, true);
        } 
    }; 

}); 