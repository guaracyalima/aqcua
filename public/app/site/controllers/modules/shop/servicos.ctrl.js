/**
 * AngularJS Application
 * @author Arthur Costa <root.arthur@gmail.com>
 */
angular.module('mangueApp')
.controller('ShopServicosCtrl', function( $scope ,$state, $rootScope, $timeout, $compile, $q, ngToast, Modal, DTOptionsBuilder, DTColumnBuilder, DTABLE, SEGMENTS, ContentPagesSrv, BoxContentsSrv, ServicosSrv, InfoSrv ) { //GrupoHomeSrv
    
    // VAR 
    $scope.confModal = {
        templates: 'tpls/admin/modules/shop/modal/servicos.mod.html',
        titles: 'Serviços',
        size: 'lg'
    };
    // Text Conf
    $scope.taConf = [
                        ['bold','italics', 'insertLink', 'html']
                    ]

    // DATATABLES
    $scope.dtOptions = DTOptionsBuilder.fromFnPromise(function() {
        var defer = $q.defer();
        ServicosSrv.get({segment: SEGMENTS.SHOP},function(response){
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
        DTColumnBuilder.newColumn('id').withTitle('ID'),
        DTColumnBuilder.newColumn('title').withTitle('Titulo'),
        DTColumnBuilder.newColumn('subtitle').withTitle('Subtitulo'),
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
                    // GET ICON
                    $scope.icons = [];
                    InfoSrv.getArray({type: 'icon'}, function( response ){
                        $scope.icons = response;
                    });
                    // GET INFOR
                    $scope.servicos = {};
                    $scope.servicos = ServicosSrv.show({id: data.id });
                    ContentPagesSrv.get({type: 'ref', cmd: data.id, seg_id: SEGMENTS.SHOP}, function( response ){
                        $scope.servicos.content = response;
                    })
                    $scope.boxContent = [
                        {
                            id:         "",
                            seq:        "",
                            title:      "",
                            sutitle:    "",
                            content:    "",
                            img:        "",
                            icon:       "",
                            link:       ""
                        }
                    ];
                    BoxContentsSrv.getArray({type: 'ref', cmd: data.id, seg_id: SEGMENTS.SHOP}, function( data ){

                        if( data.length > 0 ){
                            $scope.boxContent = data;
                        }
                        $scope.cloneItem = function () {
                            var itemToClone =   {
                                                    id:         "",
                                                    seq:        "",
                                                    title:      "",
                                                    sutitle:    "",
                                                    content:    "",
                                                    img:        "",
                                                    icon:       "",
                                                    link:       ""
                                                };
                            $scope.boxContent.push(itemToClone);
                        }
                        $scope.removeItem = function (itemIndex) {
                            $scope.boxContent.splice(itemIndex, 1);
                        }
                    });
                }
            }
        );
    };
    // Salva o registro ou cria um novo se não houver id
    $scope.save = function() {
        if ($scope.servicosForm.$valid) {
            $scope.servicos.content.box = $scope.boxContent;
            var promise =  $scope.servicos.$save();
                promise.then(function(){
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
