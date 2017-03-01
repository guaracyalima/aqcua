/**
 * AngularJS Application
 * @author Arthur Costa <root.arthur@gmail.com>
 */
angular.module('mangueApp')
// ROUTER
.constant('CONF_LAZY', {
    owl2:   [
                'components/owl.carousel/dist/assets/owl.carousel.css',
                'components/owl.carousel/dist/assets/owl.theme.default.css',
                'components/owl.carousel/dist/owl.carousel.min.js',
                'app/admin/directives/owl.carousel.dts.js'
            ],
    heroSlider: [
                'css/hero.slider.css',
                'js/hero.slider.js',
                'app/admin/directives/hero.slider.dts.js'
            ],
    parallax: [
                'css/parallax.css',
                'js/parallax.js',
                'app/admin/directives/parallax.dts.js'
            ],
    DataTables: [
                'app/admin/services/datatables.srv.js'
            ]
})
.constant('CONF_MODULE',[
        {
            name: 'xeditable',
            files: [
              'components/angular-xeditable/dist/js/xeditable.min.js',
              'components/angular-xeditable/dist/css/xeditable.css'
            ]
        },
        {
            name: 'ui.select',
            files: [
                'components/select2/dist/js/select2.min.js',
                'components/select2/dist/css/select2.min.css',
                'components/angular-ui-select/dist/select.min.js',
                'components/angular-ui-select/dist/select.min.css'
            ]
        },
        {
            name: 'mdSingin',
            files: [
                'app/admin/controllers/signin.ctrl.js'
            ]
        },
        {
            name: 'mdDash',
            files: [
                'app/admin/services/dash.srv.js',
                'app/admin/controllers/dash.ctrl.js'
            ]
        },
        {
            name: 'mdConf',
            files: [
                'app/admin/directives/maps.dts.js',
                'app/admin/controllers/conf.ctrl.js'
            ]
        },
        /**
         * MAPS
         * 
         */
        {
            name: 'mdConfMaps',
            files: [
                'app/admin/controllers/conf/maps.ctrl.js'
            ]
        },

        {
            name: 'mdModules',
            files: [
                'app/admin/controllers/modules.ctrl.js'
            ]
        },
        /**
         * GRUPO
         * 
         */
        {
            name: 'mdGrupo',
            files: [
                'app/admin/services/info.srv.js',
                'app/admin/services/modules/pages.srv.js',
                'app/admin/services/modules/content.pages.srv.js',
                'app/admin/services/modules/box.contents.srv.js',
                'app/admin/controllers/modules/grupo/grupo.ctrl.js'
            ]
        },
        {
            name: 'mdGrupoHome',
            files: [
                'app/admin/controllers/modules/grupo/home.ctrl.js'
            ]
        },
        {
            name: 'mdGrupoSegmentos',
            files: [
                'app/admin/services/modules/banners.srv.js',
                'app/admin/controllers/modules/grupo/segmentos.ctrl.js'
            ]
        },
        {
            name: 'mdGrupoSobre',
            files: [
                'app/admin/services/modules/sobre.srv.js',
                'app/admin/controllers/modules/grupo/sobre.ctrl.js'
            ]
        },
        {
            name: 'mdGrupoPub',
            files: [
                'app/admin/services/modules/pub.srv.js',
                'app/admin/controllers/modules/grupo/pub.ctrl.js'
            ]
        },
        {
            name: 'mdGrupoServicos',
            files: [
                'app/admin/services/modules/servicos.srv.js',
                'app/admin/controllers/modules/grupo/servicos.ctrl.js'
            ]
        },
        {
            name: 'mdGrupoContato',
            files: [
                'app/admin/services/mobile.operators.srv.js',
                'app/admin/services/modules/contato.srv.js',
                'app/admin/controllers/modules/grupo/contato.ctrl.js'
            ]
        },
        /**
         * ACQUAMED
         * 
         */
        {
            name: 'mdMed',
            files: [
                'app/admin/services/info.srv.js',
                'app/admin/services/modules/pages.srv.js',
                'app/admin/services/modules/content.pages.srv.js',
                'app/admin/services/modules/box.contents.srv.js',
                'app/admin/controllers/modules/med/med.ctrl.js'
            ]
        },
        {
            name: 'mdMedHome',
            files: [
                'app/admin/controllers/modules/med/home.ctrl.js'
            ]
        },
        {
            name: 'mdMedSlider',
            files: [
                'app/admin/services/modules/med/slider.srv.js',
                'app/admin/controllers/modules/med/slider.ctrl.js'
            ]
        },
        {
            name: 'mdMedSobre',
            files: [
                'app/admin/services/modules/sobre.srv.js',
                'app/admin/controllers/modules/med/sobre.ctrl.js'
            ]
        },
        {
            name: 'mdMedPub',
            files: [
                'app/admin/services/modules/pub.srv.js',
                'app/admin/controllers/modules/med/pub.ctrl.js'
            ]
        },
        {
            name: 'mdMedServicos',
            files: [
                'app/admin/services/modules/servicos.srv.js',
                'app/admin/controllers/modules/med/servicos.ctrl.js'
            ]
        },
        {
            name: 'mdMedEsp',
            files: [
                'app/admin/services/modules/especialidades.srv.js',
                'app/admin/controllers/modules/med/especialidades.ctrl.js'
            ]
        },
        {
            name: 'mdMedServ',
            files: [
                'app/admin/services/modules/especialidades.srv.js',
                'app/admin/services/modules/servico.srv.js',
                'app/admin/controllers/modules/med/servico.ctrl.js'
            ]
        },
        {
            name: 'mdMedCategorias',
            files: [
                'app/admin/services/modules/med/categorias.srv.js',
                'app/admin/controllers/modules/med/categorias.ctrl.js'
            ]
        },
        {
            name: 'mdMedProf',
            files: [
                'app/admin/services/modules/med/categorias.srv.js',
                'app/admin/services/modules/especialidades.srv.js',
                'app/admin/services/modules/med/profissionais.srv.js',
                'app/admin/controllers/modules/med/profissionais.ctrl.js'
            ]
        },
        {
            name: 'mdMedGalerias',
            files: [
                'app/admin/services/modules/med/galerias.srv.js',
                'app/admin/controllers/modules/med/galerias.ctrl.js'
            ]
        },
        {
            name: 'mdMedNoticias',
            files: [
                'app/admin/services/modules/med/noticias.srv.js',
                'app/admin/controllers/modules/med/noticias.ctrl.js'
            ]
        },
        {
            name: 'mdMedContato',
            files: [
                'app/admin/services/mobile.operators.srv.js',
                'app/admin/services/modules/contato.srv.js',
                'app/admin/controllers/modules/med/contato.ctrl.js'
            ]
        },
        /**
         * ACQUASHOP
         * 
         */
        {
            name: 'mdShop',
            files: [
                'app/admin/services/info.srv.js',
                'app/admin/services/modules/pages.srv.js',
                'app/admin/services/modules/content.pages.srv.js',
                'app/admin/services/modules/box.contents.srv.js',
                'app/admin/controllers/modules/shop/shop.ctrl.js'
            ]
        },
        {
            name: 'mdShopHome',
            files: [
                'app/admin/controllers/modules/shop/home.ctrl.js'
            ]
        },
        {
            name: 'mdShopSlider',
            files: [
                'app/admin/services/modules/shop/slider.srv.js',
                'app/admin/controllers/modules/shop/slider.ctrl.js'
            ]
        },
        {
            name: 'mdShopSobre',
            files: [
                'app/admin/services/modules/sobre.srv.js',
                'app/admin/controllers/modules/shop/sobre.ctrl.js'
            ]
        },
        {
            name: 'mdShopPub',
            files: [
                'app/admin/services/modules/pub.srv.js',
                'app/admin/controllers/modules/shop/pub.ctrl.js'
            ]
        },
        {
            name: 'mdShopServicos',
            files: [
                'app/admin/services/modules/servicos.srv.js',
                'app/admin/controllers/modules/shop/servicos.ctrl.js'
            ]
        },
        {
            name: 'mdShopCategorias',
            files: [
                'app/admin/services/modules/categorias.srv.js',
                'app/admin/controllers/modules/shop/categorias.ctrl.js'
            ]
        },
        {
            name: 'mdShopProdutos',
            files: [
                'app/admin/services/modules/categorias.srv.js',
                'app/admin/services/modules/produtos.srv.js',
                'app/admin/controllers/modules/shop/produtos.ctrl.js'
            ]
        },
        {
            name: 'mdShopGalerias',
            files: [
                'app/admin/services/modules/galerias.srv.js',
                'app/admin/controllers/modules/shop/galerias.ctrl.js'
            ]
        },
        {
            name: 'mdShopNoticias',
            files: [
                'app/admin/services/modules/noticias.srv.js',
                'app/admin/controllers/modules/shop/noticias.ctrl.js'
            ]
        },
        {
            name: 'mdShopContato',
            files: [
                'app/admin/services/mobile.operators.srv.js',
                'app/admin/services/modules/contato.srv.js',
                'app/admin/controllers/modules/shop/contato.ctrl.js'
            ]
        },
        /**
         * ACQUAFIT
         * 
         */
        {
            name: 'mdFit',
            files: [
                'app/admin/services/info.srv.js',
                'app/admin/services/modules/pages.srv.js',
                'app/admin/services/modules/content.pages.srv.js',
                'app/admin/services/modules/box.contents.srv.js',
                'app/admin/controllers/modules/fit/fit.ctrl.js'
            ]
        },
        {
            name: 'mdFitHome',
            files: [
                'app/admin/controllers/modules/fit/home.ctrl.js'
            ]
        },
        {
            name: 'mdFitSlider',
            files: [
                'app/admin/services/modules/fit/slider.srv.js',
                'app/admin/controllers/modules/fit/slider.ctrl.js'
            ]
        },
        {
            name: 'mdFitSobre',
            files: [
                'app/admin/services/modules/sobre.srv.js',
                'app/admin/controllers/modules/fit/sobre.ctrl.js'
            ]
        },
        {
            name: 'mdFitPub',
            files: [
                'app/admin/services/modules/pub.srv.js',
                'app/admin/controllers/modules/fit/pub.ctrl.js'
            ]
        },
        {
            name: 'mdFitServicos',
            files: [
                'app/admin/services/modules/servicos.srv.js',
                'app/admin/controllers/modules/fit/servicos.ctrl.js'
            ]
        },
        {
            name: 'mdFitGalerias',
            files: [
                'app/admin/services/modules/galerias.srv.js',
                'app/admin/controllers/modules/fit/galerias.ctrl.js'
            ]
        },
        {
            name: 'mdFitNoticias',
            files: [
                'app/admin/services/modules/noticias.srv.js',
                'app/admin/controllers/modules/fit/noticias.ctrl.js'
            ]
        },
        {
            name: 'mdFitContato',
            files: [
                'app/admin/services/mobile.operators.srv.js',
                'app/admin/services/modules/contato.srv.js',
                'app/admin/controllers/modules/fit/contato.ctrl.js'
            ]
        },
        /**
         * ACQUARIUS
         * 
         */
        {
            name: 'mdAcq',
            files: [
                'app/admin/services/info.srv.js',
                'app/admin/services/modules/pages.srv.js',
                'app/admin/services/modules/content.pages.srv.js',
                'app/admin/services/modules/box.contents.srv.js',
                'app/admin/controllers/modules/acq/acq.ctrl.js'
            ]
        },
        {
            name: 'mdAcqHome',
            files: [
                'app/admin/controllers/modules/acq/home.ctrl.js'
            ]
        },
        {
            name: 'mdAcqSlider',
            files: [
                'app/admin/services/modules/acq/slider.srv.js',
                'app/admin/controllers/modules/acq/slider.ctrl.js'
            ]
        },
        {
            name: 'mdAcqSobre',
            files: [
                'app/admin/services/modules/sobre.srv.js',
                'app/admin/controllers/modules/acq/sobre.ctrl.js'
            ]
        },
        {
            name: 'mdAcqPub',
            files: [
                'app/admin/services/modules/pub.srv.js',
                'app/admin/controllers/modules/acq/pub.ctrl.js'
            ]
        },
        {
            name: 'mdAcqServicos',
            files: [
                'app/admin/services/modules/servicos.srv.js',
                'app/admin/controllers/modules/acq/servicos.ctrl.js'
            ]
        },
        {
            name: 'mdAcqGalerias',
            files: [
                'app/admin/services/modules/galerias.srv.js',
                'app/admin/controllers/modules/acq/galerias.ctrl.js'
            ]
        },
        {
            name: 'mdAcqNoticias',
            files: [
                'app/admin/services/modules/noticias.srv.js',
                'app/admin/controllers/modules/acq/noticias.ctrl.js'
            ]
        },
        {
            name: 'mdAcqContato',
            files: [
                'app/admin/services/mobile.operators.srv.js',
                'app/admin/services/modules/contato.srv.js',
                'app/admin/controllers/modules/acq/contato.ctrl.js'
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