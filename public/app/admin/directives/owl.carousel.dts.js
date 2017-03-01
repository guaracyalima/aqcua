/**
 * AngularJS Application
 * @author Arthur Costa <root.arthur@gmail.com>
 */
angular.module('mangueApp')
app.directive('dtsOwlcarousel', function ($timeout) { 
    
    return { 
        restrict: 'AEC',
        transclude: true,
        templateUrl: 'assets/tpl/components/owl-carousel.html',
        scope:{
            ocData: '=',
            ocOptions: '='
        },
        link: function (scope, element, attrs) { 
            scope.carousel = {};
            scope.$watch('ocData', function(nv, ov) {
                if( nv !== undefined ){
                    if (nv !== ov) {
                        scope.carousel = nv;
                    }else{
                        scope.carousel = ov;
                    }
                }
            });
            scope.$watch('ocOptions', function(nv, ov) {
                var options={};
                if( nv !== undefined ){
                    if (nv !== ov) {
                        options = nv;
                    }else{
                        options = ov;
                    }
                    $timeout(function(){
                        $(element).find('.owl-carousel').owlCarousel(options); 
                    }, true);
                }
            });
        } 
    }; 

}); 