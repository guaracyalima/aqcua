/**
 * AngularJS Application
 * @author Arthur Costa <root.arthur@gmail.com>
 */
$.fn.extend({
    cart: function (options) {
        return this.each(function ()    {
            
            var $cartContent    = $(this),
                $cartBody       = $cartContent.find('.cart-body'),
                $cartTrigger    = $cartContent.children('.cart-trigger'),
                $cartCount      = $cartTrigger.children('.count');

            //open btn cart   
            //$cartContent.removeClass('empty');
            
            //open/close cart
            $cartTrigger.on('click', function(event){
                event.preventDefault();
                toggleCart();
            });


            /**
             * FUNCTIONS
             */

            function toggleCart(bool) {
                var cartIsOpen = ( typeof bool === 'undefined' ) ? $cartContent.hasClass('cart-open') : bool;
                
                if( cartIsOpen ) {
                    $cartContent.removeClass('cart-open');
                    // //reset undo
                    // clearInterval(undoTimeoutId);
                    // undo.removeClass('visible');
                    // cartList.find('.deleted').remove();

                    setTimeout(function(){
                        $cartBody.scrollTop(0);
                        //check if cart empty to hide it
                        if( Number($cartCount.find('li').eq(0).text()) == 0) $cartContent.addClass('empty');
                    }, 500);
                } else {
                    $cartContent.addClass('cart-open');
                }
            }

        });
    },
    animateCartBtn: function(){
        return this.each(function ()    {
            var _this = this;
            //efects btn
            $(this).addClass('add').find('i').removeClass('fa-shopping-cart').addClass('fa-plus');
            setTimeout(function(){
                $(_this).removeClass('add').find('i').removeClass('fa-plus').addClass('fa-shopping-cart');    
            },500);
        });
        //$('.cart-container').cart();
    },
    inputNumber: function(){
        // spinner input number
        return this.each(function ()    {
            //$cartQtd        = $cartContent.find('.quantity');
            
            var spinner = $(this),
                input   = spinner.find('input[type="number"]'),
                btnUp   = spinner.find('.quantity-up'),
                btnDown = spinner.find('.quantity-down'),
                min     = input.attr('min'),
                max     = input.attr('max');

                btnUp.click(function() {
                    var oldValue = parseFloat(input.val());
                    if (oldValue >= max) {
                    var newVal = oldValue;
                    } else {
                    var newVal = oldValue + 1;
                    }
                    spinner.find("input").val(newVal);
                    spinner.find("input").trigger("change");
                });

                btnDown.click(function() {
                    var oldValue = parseFloat(input.val());
                    if (oldValue <= min) {
                    var newVal = oldValue;
                    } else {
                    var newVal = oldValue - 1;
                    }
                    spinner.find("input").val(newVal);
                    spinner.find("input").trigger("change");
                });
        });
    }
});
            // $(window).on('resize', function(){
            //      wHeight  = heightScreen(40);
            //  });

            // /**
            //  * Height screen
            //  */
            // function heightScreen(per){
            //     var val = parseInt( window.screen.availHeight );
            //     var sub = (val / 100);
            //     return val - ( per * sub )
            // }
            // /**
            //  * requestAnimationFrame Shim 
            //  */
            // window.requestAnimFrame = (function()
            // {
            //     return  window.requestAnimationFrame       ||
            //             window.webkitRequestAnimationFrame ||
            //             window.mozRequestAnimationFrame    ||
            //             function( callback ){
            //                 window.setTimeout(callback, 1000 / 60);
            //             };
            // })();

            // /**
            //  * Scroller
            //  */
            // function Scroller()
            // {
            //     this.latestKnownScrollY = 0;
            //     this.ticking            = false;
            // }

            // Scroller.prototype = {
            //     /**
            //      * Initialize
            //      */
            //     init: function() {
            //         window.addEventListener('scroll', this.onScroll.bind(this), false);
            //     },

            //     /**
            //      * Capture Scroll
            //      */
            //     onScroll: function() {
            //         this.latestKnownScrollY = window.scrollY;
            //         this.requestTick();
            //     },

            //     /**
            //      * Request a Tick
            //      */
            //     requestTick: function() {
            //         if( !this.ticking ) {
            //         window.requestAnimFrame(this.update.bind(this));
            //         }
            //         this.ticking = true;
            //     },

            //     /**
            //      * Update.
            //      */
            //     update: function() {
            //         var currentScrollY = this.latestKnownScrollY;
            //         this.ticking       = false;
                    
            //         /**
            //          * Do The Dirty Work Here
            //          */
            //         var slowScroll = currentScrollY / 4
            //         , blurScroll = currentScrollY * 2;
                    
            //         $content.css({
            //         'transform'         : 'translateY(-' + slowScroll + 'px)',
            //         '-moz-transform'    : 'translateY(-' + slowScroll + 'px)',
            //         '-webkit-transform' : 'translateY(-' + slowScroll + 'px)'
            //         });
                    
            //         $blur.css({
            //         'opacity' : blurScroll / wHeight
            //         });
            //     }
            // };

            /**
             * Attach!
             */
            // var scroller = new Scroller();  
            // scroller.init();

