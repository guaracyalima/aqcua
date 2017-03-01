/**
 * AngularJS Application
 * @author Arthur Costa <root.arthur@gmail.com>
 */
angular.module('mangueApp')
.controller('FitContatoCtrl', function( $scope ,$state, $rootScope, $timeout, $compile, $q, ngToast, Modal, DTOptionsBuilder, DTColumnBuilder, DTABLE, SEGMENTS, InfoSrv, ContentPagesSrv, BoxContentsSrv, ContatoSrv, MobileOperatorsSrv ) { //GrupoHomeSrv
    
    // VAR
    var self = this;
    // Modal
    $scope.confModal = {
        templates: 'tpls/admin/modules/fit/modal/contato.mod.html',
        titles: 'Contato',
        size: 'lg'
    };
    // Text Conf
    $scope.taConf = [
                        ['bold','italics', 'insertLink', 'html']
                    ]

    // DATATABLES
    $scope.dtOptions = DTOptionsBuilder.fromFnPromise(function() {
        var defer = $q.defer();
        ContatoSrv.get({segment: SEGMENTS.FIT},function(response){
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
                    // GET INFOR
                    // SERVICE GET OPERATORS
                    MobileOperatorsSrv.getArray(function(response){
                        $scope.operadoras = response;
                    });
                    // GET ICON
                    $scope.icons = [];
                    InfoSrv.getArray({type: 'icon'}, function( response ){
                        $scope.icons = response;
                    });
                    $scope.info = {};
                    $scope.info.contacts = [
                        {
                            id:         "",
                            info_id:    "",
                            seq:        "",
                            code:       "",
                            number_id:  "",
                            desc:       "",
                            type: {
                                name: "",
                                icon: "",
                                op_id: ""
                            }
                           
                        }
                    ];
                    $scope.info.address = [
                        {
                            id          : "",
                            info_id     : "",
                            seq         : "",
                            country     : "",
                            state       : "",
                            neighborhood: "",
                            street      : "",
                            zip_code    : "",
                            number      : "",
                            long        : "",
                            lat         : "",
                            icon        : ""
                        }
                    ];
                    $scope.info.emails = [
                        {
                            id          : "",
                            info_id     : "",
                            seq         : "",
                            email       : "",
                            desc        : ""
                        }
                    ];
                    $scope.info.hours = [
                        {
                            id          : "",
                            info_id     : "",
                            seq         : "",
                            desc        : "",
                            icon        : ""
                        }
                    ];
                    $scope.info.social = [
                        {
                            id      : "",
                            info_id : "",
                            seq     : "",
                            name    : "",
                            title   : "",
                            icon    : "",
                            link    : ""
                        }
                    ];
                    // GET CONTACTS
                    $scope.contato = {};
                    ContatoSrv.show({id: data.id }, function(response){
                        $scope.contato = response;
                        if( Object.keys( response.info ).length > 0 ){
                            if( Object.keys( response.info.contacts ).length > 0 ){
                                $scope.info.contacts = response.info.contacts;
                            }
                            if( Object.keys( response.info.address ).length > 0 ){
                                $scope.info.address = response.info.address;
                            }
                            if( Object.keys( response.info.emails ).length > 0 ){
                                $scope.info.emails = response.info.emails;
                            }
                            if( Object.keys( response.info.hours ).length > 0 ){
                                $scope.info.hours = response.info.hours;
                            }
                            if( Object.keys( response.info.social ).length > 0 ){
                                $scope.info.social = response.info.social;
                            }
                        }
                        $scope.cloneItemContacts = function () {
                            var itemToCloneContacts =   {
                                                            id:         "",
                                                            seq:        "",
                                                            code:       "",
                                                            number_id:  "",
                                                            desc:       ""
                                                        };
                            $scope.info.contacts.push(itemToCloneContacts);
                        }
                        $scope.cloneItemAddress = function () {
                            var itemToCloneAddress =   {
                                                            id          : "",
                                                            info_id     : "",
                                                            seq         : "",
                                                            country     : "",
                                                            state       : "",
                                                            neighborhood: "",
                                                            street      : "",
                                                            zip_code    : "",
                                                            number      : "",
                                                            long        : "",
                                                            lat         : "",
                                                            icon        : ""
                                                        };
                            $scope.info.address.push(itemToCloneAddress);
                        }
                        $scope.cloneItemEmails = function () {
                            var itemToCloneEmails =   {
                                                            id          : "",
                                                            info_id     : "",
                                                            seq         : "",
                                                            email       : "",
                                                            desc        : ""
                                                        };
                            $scope.info.emails.push(itemToCloneEmails);
                        }
                        $scope.cloneItemHours = function () {
                            var itemToCloneHours =   {
                                                            id          : "",
                                                            info_id     : "",
                                                            seq         : "",
                                                            desc        : "",
                                                            icon        : ""
                                                        };
                            $scope.info.hours.push(itemToCloneHours);
                        }
                        $scope.cloneItemSocial = function () {
                            var itemToCloneSocial =   {
                                                            id      : "",
                                                            info_id : "",
                                                            seq     : "",
                                                            name    : "",
                                                            title   : "",
                                                            icon    : "",
                                                            link    : ""
                                                        };
                            $scope.info.social.push(itemToCloneSocial);
                        }
                        $scope.removeItemContacts = function (itemIndex) {
                            $scope.info.contacts.splice(itemIndex, 1);
                        }
                        $scope.removeItemAddress = function (itemIndex) {
                            $scope.info.address.splice(itemIndex, 1);
                        }
                        $scope.removeItemEmails = function (itemIndex) {
                            $scope.info.emails.splice(itemIndex, 1);
                        }
                        $scope.removeItemHours = function (itemIndex) {
                            $scope.info.hours.splice(itemIndex, 1);
                        }
                        $scope.removeItemSocial = function (itemIndex) {
                            $scope.info.social.splice(itemIndex, 1);
                        }
                    });
                }
            }
        );
    };
    // Salva o registro ou cria um novo se não houver id
    $scope.save = function() {
        if ($scope.contatoForm.$valid) {
            $scope.contato.info = $scope.info;
            var promise =  $scope.contato.$save();
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
            '</button>&nbsp;';
    }

    $scope.listSeq = function(min, max, step){
        step = step || 1;
        var input = [];
        for( var i = min; i <= max; i += step){
            input.push(i);
        }
        return input;
    }

});
