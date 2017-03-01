/**
 * AngularJS Application
 * @author Arthur Costa <root.arthur@gmail.com>
 */
angular.module('mangueApp')
.factory('DataTables', function( DTOptionsBuilder, DTColumnBuilder ){
    
    var dts = this;

    return {
        get: function(dt){
            return function( datatables ){
                var param = null;
                // Param
                dts.columns = [];

                // OPTIONS
                dts.options = DTOptionsBuilder.fromFnPromise(function(){
                    return dt.service().query().$promise;
                }).withPaginationType('full_numbers');

                // COLUMNS
                angular.forEach( dt.columns, function(val) {
                    dts.columns.push( DTColumnBuilder.newColumn(val.name).withTitle(val.title) );
                });
                
                // if( dt.param && dt.param() ){
                      
                // }

                // // SET DATA RESOURCE 
                // dts.dtOptions = DTOptionsBuilder.fromFnPromise(function(){
                //     return dt.service().query().$promise;
                // }).withPaginationType('full_numbers');

                
                // $timeout(function () {
                //     dt.service().index({
                //         page: page,
                //         filter: tableState.search,
                //         itemsByPage: tableState.pagination.number,
                //         param: param
                //     }, function (response) {
                //         de.callback(response);
                //         tableState.pagination.numberOfPages = response.last_page;
                //         tableState.pagination.currentPage = response.current_page;
                //         tableState.pagination.totalItemCount = response.total;
                //         de.isLoading(false);
                //     });
                // }, 500);

            }

        },
        refresh: function(){

        }
    }
});