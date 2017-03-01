/**
 * AngularJS Application
 * @author Arthur Costa <root.arthur@gmail.com>
 */
angular.module('mangueApp')
// ROUTER
.constant('URI', {
	API:  	URL_API,
	ADM:  	URL_ADM,
	AUTH: 	URL_API + '/auth/user',
	LOGOUT: URL_API + '/logout'
})
.constant('SEGMENTS', {
	GRUPO:  	1,
	FIT:  		2,
	MED: 		3,
	SHOP: 		4,
	ACQ:		5
})