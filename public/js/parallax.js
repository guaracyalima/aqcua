/**
 * AngularJS Application
 * @author Arthur Costa <root.arthur@gmail.com>
 */
$.fn.extend({
    parallaxHeader: function (options) {
        return this.each(function ()    {
            
            var $content = $(this).find('.content')
              , $blur    = $('.section-header .overlay')
              , wHeight  = heightScreen(options.percent);

            $(window).on('resize', function(){
                 wHeight  = heightScreen(40);
             });

            /**
             * Height screen
             */
            function heightScreen(per){
                var val = parseInt( window.screen.availHeight );
                var sub = (val / 100);
                return val - ( per * sub )
            }
            /**
             * requestAnimationFrame Shim 
             */
            window.requestAnimFrame = (function()
            {
                return  window.requestAnimationFrame       ||
                        window.webkitRequestAnimationFrame ||
                        window.mozRequestAnimationFrame    ||
                        function( callback ){
                            window.setTimeout(callback, 1000 / 60);
                        };
            })();

            /**
             * Scroller
             */
            function Scroller()
            {
                this.latestKnownScrollY = 0;
                this.ticking            = false;
            }

            Scroller.prototype = {
                /**
                 * Initialize
                 */
                init: function() {
                    window.addEventListener('scroll', this.onScroll.bind(this), false);
                },

                /**
                 * Capture Scroll
                 */
                onScroll: function() {
                    this.latestKnownScrollY = window.scrollY;
                    this.requestTick();
                },

                /**
                 * Request a Tick
                 */
                requestTick: function() {
                    if( !this.ticking ) {
                    window.requestAnimFrame(this.update.bind(this));
                    }
                    this.ticking = true;
                },

                /**
                 * Update.
                 */
                update: function() {
                    var currentScrollY = this.latestKnownScrollY;
                    this.ticking       = false;
                    
                    /**
                     * Do The Dirty Work Here
                     */
                    var slowScroll = currentScrollY / 4
                    , blurScroll = currentScrollY * 2;
                    
                    $content.css({
                    'transform'         : 'translateY(-' + slowScroll + 'px)',
                    '-moz-transform'    : 'translateY(-' + slowScroll + 'px)',
                    '-webkit-transform' : 'translateY(-' + slowScroll + 'px)'
                    });
                    
                    $blur.css({
                    'opacity' : blurScroll / wHeight
                    });
                }
            };

            /**
             * Attach!
             */
            var scroller = new Scroller();  
            scroller.init();

        });
    }
});
