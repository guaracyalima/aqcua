/**
 * AngularJS Application
 * @author Arthur Costa <root.arthur@gmail.com>
 */

//'use strict';

angular.module('mangueApp')
// NG TOAST
.config(function(ngToastProvider) {
  	ngToastProvider.configure({
    	animation: 'fade', //'fade' , 'slide'
    	horizontalPosition: 'right', // right, center, left
    	verticalPosition: 'top' // top, bottom,
  	});
})
// CHART CONFIG
.config(function (ChartJsProvider) {
	ChartJsProvider.setOptions({ colors : [ '#803690', '#00ADF9', '#DCDCDC', '#46BFBD', '#FDB45C', '#949FB1', '#4D5360'] });
});