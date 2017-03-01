/**
 * AngularJS Application
 * @author Arthur Costa <root.arthur@gmail.com>
 */
angular.module('mangueApp')
.controller('MedProfCtrl', function( $scope ,$state, $rootScope, $timeout, $compile, $q, ngToast, Modal, DTOptionsBuilder, DTColumnBuilder, DTABLE, SEGMENTS, EspSrv, CategoriasSrv, ProfSrv, InfoSrv ) {
    
    // VAR 
    var self = this;
    $scope.confModal = {
        templates: 'tpls/admin/modules/med/modal/profissionais.mod.html',
        templaDel: 'tpls/admin/modules/med/modal/delete.prod.mod.html',
        titles: 'Profissionais',
        size: 'lg'
    };
    // Text Conf
    $scope.taConf = [
                        ['bold','italics', 'insertLink', 'html']
                    ]

    // DATATABLES
    $scope.dtOptions = DTOptionsBuilder.fromFnPromise(function() {
        var defer = $q.defer();
        ProfSrv.get({segment: SEGMENTS.MED},function(response){
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
        },
        {
            text: DTABLE.BTN.plus.text, key: DTABLE.BTN.plus.key,
            className: DTABLE.BTN.plus.className,
            action: actionNew
        }
    ])
    .withLanguageSource(DTABLE.LANGUAGE);
    $scope.dtColumns = [
        DTColumnBuilder.newColumn('id').withTitle('ID'),
        DTColumnBuilder.newColumn('name').withTitle('Nome'),
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
    function actionNew(){
        return Modal.openModal({
                templateUrl: $scope.confModal.templates,
                title: 'Novo '+ $scope.confModal.titles,
                size: $scope.confModal.size,
                callback: function($scope) {
                    EspSrv.getArray({type: 'listar', cmd: 'todos'}, function( response ){
                        $scope.espec = response;
                    });
                    CategoriasSrv.getArray({type: 'listar', cmd: 'todos'}, function( response ){
                        $scope.categorias = response;
                    });
                    $scope.prof = new ProfSrv;
                }
            }
        );
    }
    $scope.actionUpdate = function( data ) {
        return Modal.openModal({
                templateUrl: $scope.confModal.templates,
                title: 'Editar '+ $scope.confModal.titles,
                size: $scope.confModal.size,
                callback: function($scope) {
                    EspSrv.getArray({type: 'listar', cmd: 'todos'}, function( response ){
                        $scope.espec = response;
                    });
                    CategoriasSrv.getArray({type: 'listar', cmd: 'todos'}, function( response ){
                        $scope.categorias = response;
                    });
                    $scope.prof = {};
                    $scope.prof = ProfSrv.show({id: data.id });
                }
            }
        );
    };
    $scope.actionDelete = function( data ){
        return Modal.openModal({
                templateUrl: $scope.confModal.templaDel,
                title: 'Remover '+ $scope.confModal.titles,
                size: $scope.confModal.size,
                callback: function($scope) {
                    $scope.delId =data.id;
                }
            }
        );
    }
    // Salva o registro ou cria um novo se não houver id
    $scope.save = function() {
        if ($scope.profForm.$valid) {
            if( $scope.obj.src ){
                $scope.prof.img = $scope.obj
            }
            var promise =  $scope.prof.$save();
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
    // Excluir
    $scope.destroy = function(id) {
        var promise =  ProfSrv.destroy(id);
        promise.then(function(){
           self.reload();
           $timeout(function(){
             $scope.cancel();
             $scope.reloadData;
           },1000);
        });
    };
    // FORCE RELOAD
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
            '</button>&nbsp;' +
            '<button class="btn btn-sm btn-fill btn-danger" ng-click="actionDelete(data[' + data.id + '])" )"="">' +
            '<span class="btn-label">'+
            '   <i class="fa fa-trash-o"></i>' +
            '</span>'+
            '</button>';
    }

    $scope.obj  = {src:"", selection: [], thumbnail: true};
    
});
