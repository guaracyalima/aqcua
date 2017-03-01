/**
 * AngularJS Application
 * @author Arthur Costa <root.arthur@gmail.com>
 * 
 * REF: https://www.bennadel.com/blog/2861-encapsulating-localstorage-access-in-angularjs.htm
 */
angular.module('acquaApp')
.controller('CartCtrl',function( $scope, $window, $timeout, storage, CartSrv, CartSharedSrv){
    
    // template cart start
    angular.element('.cart-container').cart();
    
    // broadcast
    $scope.$on('handleBroadcast', function() {
        $timeout(function(){
            $scope.dataCart = CartSharedSrv.data;
            addCart();
        }, true);
    });
    var vm = this;
    // I hold the collection of cart.
    vm.cart = [];
    // I hold the form data for use with ngModel.
    loadRemoteData();

    // Expose the public API.
    vm.removeCart   = removeCart;
    vm.updateCart   = updateCart;
    vm.clearCart    = clearCart;
    vm.upQtdCart    = upQtdCart;
    vm.downQtdCart  = downQtdCart;
    vm.totalCart    = totalCart;
    vm.checkout     = checkout;
    // ---
    // PUBLIC METHODS.
    // ---
    function clearCart() {
        CartSrv.clearCart()
            .then( loadRemoteData );
    }
    // I process the new-cart form in an attempt to add a new cart.
    function addCart()
    {
        var data = validateData()
        if( data){
            CartSrv.addCart( data )
                    .then( loadRemoteData );       
        }
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
        if( cart.length >= 1){
            // remove em empty
            angular.element('.cart-container').removeClass('empty');        
        }
        vm.cart = cart;
        
    }


    // I load the remote data for use in the view-model.
    function loadRemoteData() {
        CartSrv
            .getCart()
            .then( applyRemoteData );
    }

    // Validate data    
    function validateData(){
        if( ! $scope.dataCart.id ){
            return false;
        }else{
            return {
                id          : $scope.dataCart.id,
                title       : $scope.dataCart.title,
                price       : $scope.dataCart.price,
                thumbnail   : $scope.dataCart.thumbnail,
                qtd         : 1
            }
        }
    }

    // Spinner input number
    function upQtdCart(id , data ){
        if(!id){
            return;
        }
        data.qtd = parseInt( data.qtd ) + 1;
        CartSrv.updateCart(id, data)
            .then( loadRemoteData );
    }
    function downQtdCart(id , data ){
        if(!id){
            return;
        }
        data.qtd = parseInt( data.qtd ) - 1;
        CartSrv.updateCart(id, data)
            .then( loadRemoteData );
    }
    // Calc
    function totalCart(){
        var total = 0;
        for(var i = 0; i < vm.cart.length; i++){
            var product = vm.cart[i];
            total += (product.price.amount * product.qtd);
        }
        return total.toFixed(2);
    }
    // Checkout
    function checkout()
    {
        console.log( vm.cart );
    }

});