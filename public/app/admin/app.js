/**
 * AngularJS Application
 * @author Arthur Costa <root.arthur@gmail.com>
 */
angular.module('mangueApp', [
    'ui.bootstrap',
    'ui.router',
    'ngCookies',
    'ngStorage',
    'ngResource',
    'ngAnimate',
    'ngSanitize',
    'ngToast',
    'oc.lazyLoad',
    'chart.js',
    'datatables',
    'datatables.bootstrap',
    'datatables.buttons',
    'textAngular',
    'ngJcrop',
    'ui.select',
    'ui.utils.masks',
    'ngMask'
])
.filter('range', function() {
    return function(input, total) {
        total = parseInt(total);
        for (var i=0; i<total; i++) {
            input.push(i);
        }
        return input;
    }; 
});


// 'ngRoute',
// 'ui.bootstrap',
// 'ui.router',
// 'satellizer',
// 'ngSanitize',
// 'ngStorage',
// 'ngResource',
// 'oc.lazyLoad',
// 'ngToast'