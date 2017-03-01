/**
 * AngularJS Application
 * @author Arthur Costa <root.arthur@gmail.com>
 */
angular.module('mangueApp')
.constant('DTABLE', {
	BTN: {
            refresh: {
                text: '<span class="btn-label"><i class="fa fa-refresh btn-label"></i></span>',
                className: 'btn-tab-reload btn btn-sm btn-group btn-info btn-fill datatables-action-buttons',
                key: '1'
            },
            print: {
                extend: 'print',
                text: '<span class="btn-label"><i class="fa fa-print btn-label"></i></span>',
                className: 'btn btn-sm btn-group btn-success btn-fill ml-2 datatables-action-buttons',
                key: {
                        key: 'p',
                        altkey: true
                    }
            },
            plus:{
                text: '<span class="btn-label"><i class="fa fa-plus btn-label"></i></span> Novo',
                key: '1',
                className: 'btn btn-sm btn-group btn-primary btn-fill ml-2 datatables-action-buttons',
            }
    },
    LANGUAGE: 'languages/i18n/Portuguese-Brasil.json'
});