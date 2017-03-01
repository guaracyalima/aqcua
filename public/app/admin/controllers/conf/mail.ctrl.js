/**
 * AngularJS Application
 * @author Arthur Costa <root.arthur@gmail.com>
 */
angular.module('mangueApp')
.controller('ConfMailCtrl', function ($scope ,$state, $rootScope, $timeout, $compile, $q, ngToast, Modal, DTOptionsBuilder, DTColumnBuilder, DTABLE, SEGMENTS, MailsSrv) {
    // VAR
    var self = this
    $scope.confModal = {
        templates: 'tpls/admin/conf/modal/email.mod.html',
        titles: 'E-mail',
        size: 'md'
    };
    // Text Conf
    $scope.taConf = [
                        ['bold','italics', 'insertLink', 'html']
                    ]
    // DATATABLES
    $scope.dtOptions = DTOptionsBuilder.fromFnPromise(function() {
        var defer = $q.defer();
        MailsSrv.get(function(response){
            defer.resolve(response.data);
            return response.data;
        });
        return defer.promise;
    })
    // Add Bootstrap compatibility
    .withBootstrap()
    // .withPaginationType('simple_numbers')
    .withPaginationType('full_numbers')
    .withOption('responsive', true)
    .withOption('createdRow', createdRow)
    .withButtons([
        {   
            text: DTABLE.BTN.refresh.text, key: DTABLE.BTN.refresh.key, 
            className: DTABLE.BTN.refresh.className, 
            action: reloadData
        },
        {
            extend: DTABLE.BTN.print.extend, text: DTABLE.BTN.print.text,
            key: DTABLE.BTN.print.key, className: DTABLE.BTN.print.className
        }
    ])
    .withLanguageSource(DTABLE.LANGUAGE);
    $scope.dtColumns = [
        DTColumnBuilder.newColumn('segment').withTitle('Segmento'),
        DTColumnBuilder.newColumn('type').withTitle('TIPO'),
        DTColumnBuilder.newColumn('email').withTitle('Email'),
        DTColumnBuilder.newColumn('title').withTitle('Titulo'),
        DTColumnBuilder.newColumn(null).withTitle('Ações').notSortable()
            .withClass('text-right')
            .renderWith(actionsHtml)
    ];

    $scope.data = {};
    $scope.dtInstance = {};
    $scope.reloadData = reloadData;

    // 
    //  ACTION CTRL
    //
    $scope.actionUpdate = function( data ) {
        return Modal.openModal({
                templateUrl: $scope.confModal.templates,
                title: 'Editar '+ $scope.confModal.titles,
                size: $scope.confModal.size,
                callback: function($scope) {
                    $scope.mail = {};
                    $scope.mail = MailsSrv.show({id: data.id });
                }
            }
        );
    };
    // Salva o registro ou cria um novo se não houver id
    $scope.save = function() {
        if ($scope.mailForm.$valid) {
            var promise =  $scope.mail.$save();
                promise.then(function(){
                    self.reload();
                    $timeout(function(){
                        ngToast.info('Operação realizada com sucesso!'); 
                        $scope.cancel();
                    },1000);
                }, function(erro){
                    ngToast.danger('Ops. O servidor não responde, tente novamente mais tarde!');
                });
        }else{
            ngToast.danger('Preencha corretamente o formulário.');
        }        
    };
    // RELOAD FORCE
    self.reload = function(){
       angular.element('.btn-tab-reload').click();
    }
    function reloadData () {
        var resetPaging = true;
        $scope.dtInstance.reloadData( callback, resetPaging);
    };
    function callback(json) {
        console.log(json);
    }
    function createdRow(row, data, dataIndex) {
        // Recompiling so we can bind Angular directive to the DT
        $compile(angular.element(row).contents())($scope);
    }
    function actionsHtml(data, type, full, meta) {
        $scope.data[data.id] = data;
        return '<button class="btn btn-sm btn-fill btn-warning" ng-click="actionUpdate(data[' + data.id + '])">' +
            '<span class="btn-label">'+
            '   <i class="fa fa-edit"></i>' +
            '</span>'+
            '</button>&nbsp;';
    }    
});