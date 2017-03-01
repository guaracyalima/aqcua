/**
 * AngularJS Application
 * @author Arthur Costa <root.arthur@gmail.com>
 */
angular.module('acquaApp')
// ROUTER
.constant('CONF_LAZY', {
    owl2:   [
                'app/site/directives/owl.carousel.dts.js'
            ],
    heroSlider: [
                'css/hero.slider.css',
                'js/hero.slider.js',
                'app/site/directives/hero.slider.dts.js'
            ],
    parallax: [
                'css/parallax.css',
                'js/parallax.js',
                'app/site/directives/parallax.dts.js'
            ],
    parallaxImg: [
                'app/site/directives/parallax.img.dts.js'
            ],
    maps:   [
                'app/site/directives/maps.dts.js'
                // 'https://maps.googleapis.com/maps/api/js'
            ],
    scrollNav: [
                'app/site/directives/nav.scroll.dts.js'
            ],
    yamm:   [
                'components/yamm3/yamm/yamm.css'
            ]//,
    // navFix: [
    //             ''
    //         ]
})
.constant('CONF_MODULE',[
        {
            name: 'mdMain',
            files: [
                'css/vertical.main.css',
                'css/vertical.menu.css',
                'js/main.js'              
            ]
        },
        {
            name: 'mdHome',
            files: [
                'app/site/services/acqua/grupo.srv.js',
                'app/site/controllers/home.ctrl.js'
            ]
        },
        {
            name: 'mdEmpresa',
            files: [
                'app/site/controllers/empresa.ctrl.js'
            ]
        },
        {
            name: 'mdContato',
            files: [
                'app/site/controllers/contato.ctrl.js'
            ]
        },
        /**
         * ACQUA-MED
         */
        {
            name: 'mdMainAcquaMed',
            files: [
                'css/acquamed/main.css',
                'app/site/constants/acquamed.js',
                'app/site/services/acquamed/menu.med.srv.js',
                'app/site/directives/nav.fix.dts.js',
                'app/site/controllers/acquamed/main.ctrl.js'
            ]
        },
        {
            name: 'mdHomeAcquaMed',
            files: [
                'app/site/services/acquamed/med.srv.js',
                'app/site/services/acquamed/med.services.srv.js',
                'app/site/services/acquamed/med.blog.srv.js',
                'app/site/services/team.srv.js',
                'app/site/controllers/acquamed/home.ctrl.js'
            ]
        },
        /**
         * ACQUA-SHOP
         */
        {
            name: 'mdMainAcquaShop',
            files: [
                'app/site/constants/acquashop.js',
                'app/site/services/acquashop/menu.shop.srv.js',
                'app/site/directives/nav.fix.dts.js',
                'app/site/controllers/acquashop/main.ctrl.js'
            ]
        },
        {
            name: 'mdHomeAcquaShop',
            files: [
                'app/site/services/acquashop/shop.srv.js',
                'app/site/services/acquashop/categories.products.srv.js',
                'app/site/services/acquashop/products.srv.js',
                'app/site/services/acquashop/shop.blog.srv.js',
                'app/site/controllers/acquashop/home.ctrl.js'
            ]
        },
        /**
         * ACQUA-FITNESS
         */
        {
            name: 'mdMainAcquaFitness',
            files: [
                'app/site/constants/acquafitness.js',
                'app/site/services/acquafitness/menu.fitness.srv.js',
                'app/site/directives/nav.fix.dts.js',
                'app/site/controllers/acquafitness/main.ctrl.js'
            ]
        },
        {
            name: 'mdHomeAcquaFitness',
            files: [
                'app/site/services/acquafitness/fit.srv.js',
                'app/site/services/acquafitness/fit.blog.srv.js',
                'app/site/controllers/acquafitness/home.ctrl.js'
            ]
        },
        /**
         * ACQUARIUS
         */
        {
            name: 'mdMainAcquarius',
            files: [
                'app/site/constants/acquarius.js',
                'app/site/services/acquarius/menu.acquarius.srv.js',
                'app/site/directives/nav.fix.dts.js',
                'app/site/controllers/acquarius/main.ctrl.js'
            ]
        },
        {
            name: 'mdHomeAcquarius',
            files: [
                'app/site/services/acquarius/acquarius.srv.js',
                'app/site/services/acquarius/acquarius.blog.srv.js',
                'app/site/controllers/acquarius/home.ctrl.js'
            ]
        }
        
])
// LAZYCONF
.config(function($ocLazyLoadProvider, CONF_MODULE) {
    $ocLazyLoadProvider.config({
        debug:  false,
        events: true,
        modules: CONF_MODULE
    });
});