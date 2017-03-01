/**
 * AngularJS Application
 * @author Arthur Costa <root.arthur@gmail.com>
 */
angular.module('mangueApp')
.controller('MedSobreCtrl', function( $scope ,$state, $rootScope, $timeout, $compile, $q, ngToast, Modal, DTOptionsBuilder, DTColumnBuilder, DTABLE, SEGMENTS, InfoSrv, ContentPagesSrv, SobreSrv ) { //GrupoHomeSrv
    
    // VAR 
    var self = this;
    $scope.confModal = {
        templates: 'tpls/admin/modules/med/modal/sobre.mod.html',
        titles: 'Sobre',
        size: 'lg'
    };
    // Text Conf
    $scope.taConf = [
                        ['h2','h4','h5', 'p'],
                        ['bold','italics', 'insertLink', 'html']
                    ]

    // DATATABLES
    $scope.dtOptions = DTOptionsBuilder.fromFnPromise(function() {
        var defer = $q.defer();
        SobreSrv.get({segment: SEGMENTS.MED},function(response){
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
        // ,{
        //     text: DTABLE.BTN.plus.text, key: DTABLE.BTN.plus.key,
        //     className: DTABLE.BTN.plus.className,
        //     action: actionNew
        // }
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
                    // GET INFOR
                    $scope.sobre = {};
                    $scope.icons = [];
                    $scope.boxContent = [
                        {
                            id:         "",
                            seq:        "",
                            title:      "",
                            subtitle:    "",
                            content:    "",
                            img:        "",
                            icon:       "",
                            link:       ""
                        }
                    ];
                    // GET ICON
                    InfoSrv.getArray({type: 'icon'}, function( response ){
                        $scope.icons = response;
                    });
                    // GET SOBRE
                    SobreSrv.show({id: data.id }, function( response ){
                        $scope.sobre =  response;
                         if( Object.keys( response.content ).length > 0 ){
                            if( Object.keys( response.content.box ).length > 0 ){
                                $scope.boxContent = response.content.box;
                            }
                         }
                         $scope.cloneItem = function () {
                            var itemToClone =   {
                                                    id:         "",
                                                    seq:        "",
                                                    title:      "",
                                                    subtitle:    "",
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
        if ($scope.sobreForm.$valid) {
            $scope.sobre.content.box = $scope.boxContent;
            var promise =  $scope.sobre.$save();
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
            '<button class="btn btn-sm btn-fill btn-danger" ng-click="delete(data[' + data.id + '])" )"="">' +
            '<span class="btn-label">'+
            '   <i class="fa fa-trash-o"></i>' +
            '</span>'+
            '</button>';
    }
    
});