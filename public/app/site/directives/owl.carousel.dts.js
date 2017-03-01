/**
 * AngularJS Application
 * @author Arthur Costa <root.arthur@gmail.com>
 */
angular.module('acquaApp')
app.directive('dtsOwlcarousel', function ($timeout, $rootScope) { 
    
    return { 
        restrict: 'AEC',
        transclude: true,
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
                    }, 2000);
                }
            });

            attrs.$observe("template",function(temp){
               scope.templateUri = 'tpls/site/components/owl-carousel/' + temp + '.html';
            });
            

            // BTN FILTER
            scope.activateLetter = function( letter )
            {
                $rootScope.acLetter = letter;
            }
             
        },
        template: '<div ng-include="templateUri"></div>'
    }; 

}); 