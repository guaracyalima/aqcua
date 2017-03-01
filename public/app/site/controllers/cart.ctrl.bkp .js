/**
 * AngularJS Application
 * @author Arthur Costa <root.arthur@gmail.com>
 * 
 * REF: https://www.bennadel.com/blog/2861-encapsulating-localstorage-access-in-angularjs.htm
 */
angular.module('acquaApp')
.controller('CartCtrl',function( $scope, $window, CartSrv, storage){
    var vm = this;
    // I hold the collection of cart.
    vm.cart = [];
    // I hold the form data for use with ngModel.
    vm.form = {
        id          : "",
        title       : "",
        price       : {},
        img         : "",
        qtd         : 0
    };
    loadRemoteData();

    // Expose the public API.
    vm.processForm = processForm;
    vm.removeCart = removeCart;
    vm.updateCart = updateCart;
    vm.clearCart = clearCart;
    // ---
    // PUBLIC METHODS.
    // ---
    function clearCart() {
        // storage.disablePersist();
        // loadRemoteData();
        // //vm.cart = [];
        // console.log('clear')
        // console.log( vm.cart )
        // $window.location.href = "http://mangue.local/acqua/#/acquashop/home";
        CartSrv.clearCart()
            .then( loadRemoteData );
    }
    // I process the new-cart form in an attempt to add a new cart.
    function processForm() {
        if ( ! vm.form.id ) {
            return;
        }
        CartSrv.addCart( vm.form )
            .then( loadRemoteData );
        vm.form = {};
    }
    // I update the cart from list.
    function updateCart( id, data )
    {
        if(!id){
            return;
        }
        CartSrv.updateCart(id, data)
            .then( loadRemoteData );
    }
    // I remove the given cart from the collection.
    function removeCart( cart ) {
        CartSrv
            .deleteCart( cart.id )
            .then( loadRemoteData );
    }
    // ---
    // PRIVATE METHODS.
    // ---
    // I apply the remote data to the view-model.
    function applyRemoteData( cart ) {
        vm.cart = cart;
    }


    // I load the remote data for use in the view-model.
    function loadRemoteData() {
        CartSrv
            .getCart()
            .then( applyRemoteData );
    }
    //

});