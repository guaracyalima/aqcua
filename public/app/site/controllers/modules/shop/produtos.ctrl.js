/**
 * AngularJS Application
 * @author Arthur Costa <root.arthur@gmail.com>
 */
angular.module('mangueApp')
.controller('ShopProdutosCtrl', function( $scope ,$state, $rootScope, $timeout, $compile, $q, ngToast, Modal, DTOptionsBuilder, DTColumnBuilder, DTABLE, SEGMENTS, ContentPagesSrv, BoxContentsSrv, ProdutosSrv, CategoriasSrv, InfoSrv ) { //GrupoHomeSrv
    
    // VAR 
    var self = this;
    $scope.confModal = {
        templates: 'tpls/admin/modules/shop/modal/produtos.mod.html',
        templaDel: 'tpls/admin/modules/shop/modal/produtos.delete.mod.html',
        titles: 'Produtos',
        size: 'lg'
    };

    // GET ICON
    $scope.icons = [];
    InfoSrv.getArray({type: 'icon'}, function( response ){
        $scope.icons = response;
    });
    // Text Conf
    $scope.taConf = [
                        ['bold','italics', 'insertLink', 'html']
                    ]

    // DATATABLES
    $scope.dtOptions = DTOptionsBuilder.fromFnPromise(function() {
        var defer = $q.defer();
        ProdutosSrv.get({segment: SEGMENTS.SHOP},function(response){
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
        DTColumnBuilder.newColumn('title').withTitle('Titulo'),
        DTColumnBuilder.newColumn('categoria').withTitle('Categoria'),
        DTColumnBuilder.newColumn('img').withTitle('Produto').notSortable().renderWith(imgHtml),
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
                    CategoriasSrv.getArray({type: 'listar', cmd: 'todos'}, function( response ){
                        $scope.categorias = response;
                    });
                    $scope.produtos = new ProdutosSrv;
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
                    // GET ICON
                    // $scope.icons = [];
                    // InfoSrv.getArray({type: 'icon'}, function( response ){
                    //     $scope.icons = response;
                    // });
                    // GET INFOR
                    $scope.produtos = {};
                    $scope.produtos = ProdutosSrv.show({id: data.id });
                }
            }
        );
    };
    // Salva o registro ou cria um novo se não houver id
    $scope.save = function() {
        if ($scope.produtosForm.$valid) {
            if( $scope.obj.src ){
                $scope.produtos.img = $scope.obj
            }
            var promise =  $scope.produtos.$save();
                promise.then(function(){
                    self.realod();
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
        var promise =  ProdutosSrv.destroy(id);
        promise.then(function(){
            self.realod();
            $timeout(function(){
                $scope.cancel();
            },1000);
        });
    };
    // RELOAD FORCE
    self.realod = function(){
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
    function imgHtml(data, type, full, meta){
        return '<img src="' + data +'" class="img-response img-table"/>';
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
