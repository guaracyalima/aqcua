 /*
 * AngularJS Application
 * @author Arthur Costa <root.arthur@gmail.com>
 */
angular.module('acquaApp')
.directive('dtsParallaxImg',function( $http, $timeout){
    
    return {
       restrict: 'A',
       replace: true,
       scope: {
            dtSrc: '=',
            dtSpeed: '=',
            dtHeight: '='
        },
       link: function(scope, element, attrs) {

           scope.$watch('dtSrc', function(nv, ov) {
               if( nv !== undefined ){
                   var src = null;
                    if (nv !== ov) {
                        src = nv;
                    }else{
                        src = ov;
                    }
                    $timeout(function(){
                        var hei = parseInt( window.screen.availHeight );
                        var percentHeight = ( scope.dtHeight * hei ) / 100;
                        $(element).css('background-image', 'url(' + src + ')').height( percentHeight );
                        $(window).scroll(function() {
                            var yPos = -($(window).scrollTop() / scope.dtSpeed ); 
                            var bgpos = '0% '+ yPos + 'px';
                            $(element).css('background-position', bgpos );
                        });
                    },true);
                }
           });
       }
   }

});