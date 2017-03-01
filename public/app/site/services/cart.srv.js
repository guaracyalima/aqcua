/**
 * AngularJS Application
 * @author Arthur Costa <root.arthur@gmail.com>
 * REF: https://www.bennadel.com/blog/2861-encapsulating-localstorage-access-in-angularjs.htm
 */
angular.module('acquaApp')
.factory('CartSrv', function ($q, storage) {
    
    // Attempt to pull the cart out of storage.
    var cart = ( storage.extractItem( "cart" ) || [] );
    // Rather than trying to keep the service-data and the cache-data in 
    // constant sync, let's just hook into the persist event of the storage
    // which will give us an opportunity to do just-in-time synchronization.
    storage.onBeforePersist(
        function handlePersist() {
            storage.setItem( "cart", cart );
        }
    );
    // Return the public API.
    return({
        addCart     : addCart,
        updateCart  : updateCart,
        deleteCart  : deleteCart,
        getCart     : getCart,
        clearCart   : clearCart
    });
    // ---
    // PUBLIC METHODS.
    // ---
    function addCart( dtCart ) {
        var ac = true;
        if( cart.length >= 1 ){
            for ( var i = 0, length = cart.length ; i < length ; i++ ) {
                if ( cart[ i ].id === dtCart.id ) {
                    ac = false;
                    break;
                }
            }
        }
        if( !ac ){
            return;
        }
        cart.push({
            id          : dtCart.id,
            title       : dtCart.title,
            price       : dtCart.price,
            thumbnail   : dtCart.thumbnail,
            qtd         : dtCart.qtd
        });
        return( $q.when( dtCart.id ) );
    }
    function updateCart(id, data){
        for ( var i = 0, length = cart.length ; i < length ; i++ ) {
            if ( cart[ i ].id === id ) {
                angular.forEach( cart[ i ],function(val, key){
                    cart[i][key] = data[key];
                });
                break;
            }
        }
        return( $q.when() );
    }
    function deleteCart( id ) {
        for ( var i = 0, length = cart.length ; i < length ; i++ ) {
            if ( cart[ i ].id === id ) {
                cart.splice( i, 1 );
                break;
            }
        }
        return( $q.when() );
    }
    // I get the entire collection of cart. Returns a promise.
    function getCart() {
        // NOTE: We are using .copy() so that the internal cache can't be
        // mutated through direct object references.
        return( $q.when( angular.copy( cart ) ) );
    }
    function clearCart()
    {
        storage.disablePersist();
        return( $q.when( angular.copy( cart = [] ) ) );
    }

})