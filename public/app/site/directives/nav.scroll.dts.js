 /*
 * AngularJS Application
 * @author Arthur Costa <root.arthur@gmail.com>
 */
angular.module('acquaApp')
app.directive('dtsNavScroll', function () { 
    return {
    restrict: 'A',
    scope: { dtHref: '='},
    link: function(scope, $elm, attrs) {

      $elm.on('click', function(event) {
        // SELECT NAV
        angular.element( "#navbar ul li" ).each(function( index ) {
            angular.element( this ).removeClass('active');
        });
        angular.element( $(this).parent() ).addClass('active');
        
        // SCROLL MOVE
        var $target;
        if (scope.dtHref) {
          $target = $(scope.dtHref);
        } else {
          $target = $elm;
        }
        $("body").animate({scrollTop: $target.offset().top - 60}, "slow");
      });
    }
  }
});
