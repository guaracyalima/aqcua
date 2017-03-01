/**
 * AngularJS Application
 * @author Arthur Costa <root.arthur@gmail.com>
 */
angular.module('mangueApp')
.controller('FitPubCtrl', function( $scope ,$state, $rootScope, $timeout, $compile, $q, ngToast, Modal, DTOptionsBuilder, DTColumnBuilder, DTABLE, SEGMENTS, ContentPagesSrv, PubSrv ) { //GrupoHomeSrv
    
    // VAR 
    $scope.confModal = {
        templates: 'tpls/admin/modules/fit/modal/pub.mod.html',
        titles: 'Publicidade',
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
        PubSrv.get({segment: SEGMENTS.FIT},function(response){
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
        DTColumnBuilder.newColumn('img').withTitle('Banner').notSortable().renderWith(imgHtml),
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
                    $scope.pub = {};
                    $scope.pub = PubSrv.show({id: data.id });
                    ContentPagesSrv.get({type: 'ref', cmd: data.id}, function( response ){
                        $scope.pub.content = response;
                    })
                }
            }
        );
    };
    // Salva o registro ou cria um novo se não houver id
    $scope.save = function() {
        if ($scope.pubForm.$valid) {
            if( $scope.obj.src ){
                $scope.pub.content.img = $scope.obj
            }
            var promise =  $scope.pub.$save();
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
    function imgHtml(data, type, full, meta){
        return '<img src="' + data +'" class="img-response img-table"/>';
    }
    function actionsHtml(data, type, full, meta) {
        $scope.data[data.id] = data;
        return '<button class="btn btn-sm btn-fill btn-warning" ng-click="actionUpdate(data[' + data.id + '])">' +
            '<span class="btn-label">'+
            '   <i class="fa fa-edit"></i>' +
            '</span>'+
            '</button>&nbsp;';
            //  +
            // '<button class="btn btn-sm btn-fill btn-danger" ng-click="delete(data[' + data.id + '])" )"="">' +
            // '<span class="btn-label">'+
            // '   <i class="fa fa-trash-o"></i>' +
            // '</span>'+
            // '</button>';
    }

    //
    // IMG JCROP
    //
    $scope.obj  = {src:"", selection: [], thumbnail: true};
    
});
