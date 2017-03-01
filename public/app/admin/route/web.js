/**
 * AngularJS Application
 * @author Arthur Costa <root.arthur@gmail.com>
 */
angular.module('mangueApp')
.config( function($stateProvider,$urlRouterProvider,$ocLazyLoadProvider, $httpProvider, $provide, CONF_MODULE, CONF_LAZY ) {
        

        $httpProvider.defaults.useXDomain = true;
        $httpProvider.defaults.headers.common = {Accept: "application/json, text/plain, */*"};
        $httpProvider.defaults.headers.post = {"Content-Type": "application/json;charset=utf-8"};
        $httpProvider.defaults.useXDomain = true;
        delete $httpProvider.defaults.headers.common['X-Requested-With'];

        // The $httpInterceptor
        function redirectWhenLoggedOut($q, $injector, $localStorage) {
            return {
            	request: function(config){
            		config.headers = config.headers || {};
            		if ($localStorage.token) {
                        config.headers.Authorization = 'Bearer ' + $localStorage.token;
                    }
                    config.headers['Accept'] = 'application/json;odata=verbose';
                    config.withCredentials =  false;
                    return config;
            	},
                responseError: function(rejection) {
                    var $state      = $injector.get('$state');
                    var $timeout    = $injector.get('$timeout');
                    var ngToast     = $injector.get('ngToast');
                    if( rejection.data ){
                         var rejectionReasons = ['token_not_provided', 'token_expired', 'token_absent', 'token_invalid'];
                         angular.forEach(rejectionReasons, function(val, key) {
                             if(rejection.data.error === val) {
                                 //delete $localStorage.token;
                                 ngToast.danger('Sessão do usuario expirado! <br/><strong class="uppercase">Faça o login novamente</strong>');
                                 // GO STATE
                                 // $timeout(function(){
                                 //         $state.go('auth.signin');
                                 // },3000);
                             }
                         });
                        // console.log( rejection.data.error );
                        console.log('error')
                        if( rejection.data.error == 'token_not_provided'){
                            //delete $localStorage.token;
                            ngToast.danger('Sessão do usuario expirado! <br/><strong class="uppercase">Faça o login novamente</strong>');
                            // GO STATE
                            // $timeout(function(){
                            //         $state.go('auth.signin');
                            // },2000);
                        }
                    }
                    
                    if( rejection.status == 401 || rejection.status == 403 ){
                    	delete $localStorage.token;
                    	// ANIMETE LOADING
                    	// ....
                    	// ....

                    	// GO STATE
                    	$timeout(function(){
                                $state.go('auth.signin');
                        },2000);

                    }
                    return $q.reject(rejection);
                }
            }
        }

        // Setup for the $httpInterceptor
        $provide.factory('redirectWhenLoggedOut', redirectWhenLoggedOut)
        // Push the new factory onto the $http interceptor array
        $httpProvider.interceptors.push('redirectWhenLoggedOut')
        
	// Otherwise
        $urlRouterProvider.otherwise('dash');

        // AUTH
        $stateProvider
        .state('auth', {
            url: '/',
            abstract: true,
            templateUrl: 'tpls/admin/auth/auth.html'
        })
        .state('auth.signin', {
            url: 'auth/signin',
            templateUrl: 'tpls/admin/auth/signin.html',
            controller: 'SigninCtrl',
            resolve: load([
                'mdSingin'
            ]),
            onEnter: function ($rootScope, $timeout) {
                $rootScope.loading =  true;
                $timeout(function(){
                    $rootScope.loading =  false;
                },1000);
            }
        })
        
    
        
        $stateProvider
        .state('main', {
            url: '/',
            abstract: true,
            controller: 'MainCtrl',
            templateUrl: 'tpls/admin/main.html',
            // resolve: load([
            //     'mdMain'
            // ])
        })
        
        /*
         * =========================================================
         * HOME ROUTES
         * =========================================================
         */
        .state('main.dash', {
            url: 'dash',
            controller: 'DashCtrl',
            templateUrl: 'tpls/admin/dash.html',
            resolve: load([
                'mdDash'
            ]),
            onEnter: function ($rootScope, $timeout) {
                    // Bread Crumb
                    // $rootScope.breadcrumb = { 
                    //             icon: "pe-7s-graph", 
                    //             title: "Dashborad"
                    // };
                    // Loading
                    $rootScope.breadcrumb   = [{title: "Dashborad"}];
                    $rootScope.loading =  true;
                    $timeout(function(){
                        $rootScope.loading =  false;
                    },1000);
                }
        })
        /*
         * =========================================================
         * CONF ROUTES
         * =========================================================
         */
        .state('main.conf', {
            url: 'conf/',
            controller: 'ConfCtrl',
            abstract: true,
            templateUrl: 'tpls/admin/conf/main.html',
            resolve: load([
                'mdConf'
            ]),
            onEnter: function ($rootScope, $timeout) {
                    $rootScope.breadcrumb=[{title: "Configurações"}];
                    $rootScope.loading =  true;
                    $timeout(function(){
                        $rootScope.loading =  false;
                    },1000);
                }
        })
        .state('main.conf.maps', {
            url: 'maps',
            controller: 'ConfMapsCtrl',
            templateUrl: 'tpls/admin/conf/maps.html',
            resolve: load([
                'mdConfMaps'
            ]),
            onEnter: function ($rootScope, $timeout) {
                // Loading
                $rootScope.breadcrumb[1]={title: "Maps"};
                $rootScope.loading =  true;
                $timeout(function(){
                    $rootScope.loading =  false;
                },1000);
            }
        })
        .state('main.conf.mail', {
            url: 'mail',
            controller: 'ConfMailCtrl',
            templateUrl: 'tpls/admin/conf/mail.html',
            resolve: load([
                'mdConfMail'
            ]),
            onEnter: function ($rootScope, $timeout) {
                // Loading
                $rootScope.breadcrumb[1]={title: "E-Mail"};
                $rootScope.loading =  true;
                $timeout(function(){
                    $rootScope.loading =  false;
                },1000);
            }
        })
        /*
         * =========================================================
         * MODULES ROUTES
         * =========================================================
         */
        .state('main.modules', {
            url: 'modules/',
            controller: 'ModulesCtrl',
            abstract: true,
            templateUrl: 'tpls/admin/modules/main.html',
            resolve: load([
                'mdModules'
            ]),
            onEnter: function ($rootScope, $timeout) {
                    $rootScope.breadcrumb=[{title: "Modulos"}];
                    $rootScope.loading =  true;
                    $timeout(function(){
                        $rootScope.loading =  false;
                    },1000);
                }
        })
        //
        // GRUPO ROUTER
        //
        .state('main.modules.grupo', {
            url: 'grupo/',
            controller: 'GrupoCtrl',
            abstract: true,
            templateUrl: 'tpls/admin/modules/grupo/main.html',
            resolve: load([
                'mdGrupo'
            ]),
            onEnter: function ($rootScope, $timeout) {
                // Loading
                $rootScope.breadcrumb[1]   = {title: "Grupo"};
                $rootScope.loading =  true;
                $timeout(function(){
                    $rootScope.loading =  false;
                },1000);
            }
        })
        .state('main.modules.grupo.home', {
            url: 'home',
            controller: 'GrupoHomeCtrl',
            templateUrl: 'tpls/admin/modules/grupo/home.html',
            resolve: load([
                'mdGrupoHome'
            ]),
            onEnter: function ($rootScope, $timeout) {
                // Loading
                $rootScope.breadcrumb = { 
                            icon: "pe-7s-albums", 
                            title: "Modulo - Grupo - Home"
                };
                $rootScope.loading =  true;
                $timeout(function(){
                    $rootScope.loading =  false;
                },1000);
            }
        })
        .state('main.modules.grupo.segmentos', {
            url: 'segmentos',
            controller: 'GrupoSegmentosCtrl',
            templateUrl: 'tpls/admin/modules/grupo/segmentos.html',
            resolve: load([
                'mdGrupoSegmentos'
            ]),
            onEnter: function ($rootScope, $timeout) {
                // Loading
                $rootScope.breadcrumb[2] = { title: "Home"};
                $rootScope.loading =  true;
                $timeout(function(){
                    $rootScope.loading =  false;
                },1000);
            }
        })
        .state('main.modules.grupo.sobre', {
            url: 'sobre',
            controller: 'GrupoSobreCtrl',
            templateUrl: 'tpls/admin/modules/grupo/sobre.html',
            resolve: load([
                'mdGrupoSobre'
            ]),
            onEnter: function ($rootScope, $timeout) {
                // Loading
                $rootScope.breadcrumb[2] = { title: "Sobre"};
                $rootScope.loading =  true;
                $timeout(function(){
                    $rootScope.loading =  false;
                },1000);
            }
        })
        .state('main.modules.grupo.publicidade', {
            url: 'publicidade',
            controller: 'GrupoPubCtrl',
            templateUrl: 'tpls/admin/modules/grupo/pub.html',
            resolve: load([
                'mdGrupoPub'
            ]),
            onEnter: function ($rootScope, $timeout) {
                // Loading
                $rootScope.breadcrumb[2] = { title: "Publicidade"};
                $rootScope.loading =  true;
                $timeout(function(){
                    $rootScope.loading =  false;
                },1000);
            }
        })
        .state('main.modules.grupo.servicos', {
            url: 'servicos',
            controller: 'GrupoServicosCtrl',
            templateUrl: 'tpls/admin/modules/grupo/servicos.html',
            resolve: load([
                'mdGrupoServicos'
            ]),
            onEnter: function ($rootScope, $timeout) {
                // Loading
                $rootScope.breadcrumb[2] = { title: "Serviços"};
                $rootScope.loading =  true;
                $timeout(function(){
                    $rootScope.loading =  false;
                },1000);
            }
        })
        .state('main.modules.grupo.contato', {
            url: 'contato',
            controller: 'GrupoContatoCtrl',
            templateUrl: 'tpls/admin/modules/grupo/contato.html',
            resolve: load([
                'mdGrupoContato'
            ]),
            onEnter: function ($rootScope, $timeout) {
                // Loading
                $rootScope.breadcrumb[2] = { title: "Contato"};
                $rootScope.loading =  true;
                $timeout(function(){
                    $rootScope.loading =  false;
                },1000);
            }
        })

        //
        // MED ROUTER
        //
        .state('main.modules.acquamed', {
            url: 'acquamed/',
            controller: 'MedCtrl',
            abstract: true,
            templateUrl: 'tpls/admin/modules/med/main.html',
            resolve: load([
                'mdMed'
            ]),
            onEnter: function ($rootScope, $timeout) {
                // Loading
                $rootScope.breadcrumb[1] = { title: "AcquaMed"};
                $rootScope.loading =  true;
                $timeout(function(){
                    $rootScope.loading =  false;
                },1000);
            }
        })
        .state('main.modules.acquamed.home', {
            url: 'home',
            controller: 'MedHomeCtrl',
            templateUrl: 'tpls/admin/modules/med/home.html',
            resolve: load([
                'mdMedHome'
            ]),
            onEnter: function ($rootScope, $timeout) {
                // Loading
                $rootScope.breadcrumb[2] = { title: "Home"};
                $rootScope.loading =  true;
                $timeout(function(){
                    $rootScope.loading =  false;
                },1000);
            }
        })
        .state('main.modules.acquamed.slider', {
            url: 'slider',
            controller: 'MedSliderCtrl',
            templateUrl: 'tpls/admin/modules/med/slider.html',
            resolve: load([
                'mdMedSlider'
            ]),
            onEnter: function ($rootScope, $timeout) {
                // Loading
                $rootScope.breadcrumb[2] = { title: "Slider"};
                $rootScope.loading =  true;
                $timeout(function(){
                    $rootScope.loading =  false;
                },1000);
            }
        })
        .state('main.modules.acquamed.sobre', {
            url: 'sobre',
            controller: 'MedSobreCtrl',
            templateUrl: 'tpls/admin/modules/med/sobre.html',
            resolve: load([
                'mdMedSobre'
            ]),
            onEnter: function ($rootScope, $timeout) {
                // Loading
                $rootScope.breadcrumb[2] = { title: "Sobre"};
                $rootScope.loading =  true;
                $timeout(function(){
                    $rootScope.loading =  false;
                },1000);
            }
        })
        .state('main.modules.acquamed.publicidade', {
            url: 'publicidade',
            controller: 'MedPubCtrl',
            templateUrl: 'tpls/admin/modules/med/pub.html',
            resolve: load([
                'mdMedPub'
            ]),
            onEnter: function ($rootScope, $timeout) {
                // Loading
                $rootScope.breadcrumb[2] = { title: "Publicidade"};
                $rootScope.loading =  true;
                $timeout(function(){
                    $rootScope.loading =  false;
                },1000);
            }
        })
        .state('main.modules.acquamed.servicos', {
            url: 'servicos',
            controller: 'MedServicosCtrl',
            templateUrl: 'tpls/admin/modules/med/servicos.html',
            resolve: load([
                'mdMedServicos'
            ]),
            onEnter: function ($rootScope, $timeout) {
                // Loading
                $rootScope.breadcrumb[2] = { title: "Serviços"};
                $rootScope.breadcrumb[3] = { title: "Titulo"};
                $rootScope.loading =  true;
                $timeout(function(){
                    $rootScope.loading =  false;
                },1000);
            }
        })
        .state('main.modules.acquamed.especialidades', {
            url: 'especialidades',
            controller: 'MedEspCtrl',
            templateUrl: 'tpls/admin/modules/med/especialidades.html',
            resolve: load([
                'mdMedEsp'
            ]),
            onEnter: function ($rootScope, $timeout) {
                // Loading
                $rootScope.breadcrumb[2] = { title: "Serviços"};
                $rootScope.breadcrumb[3] = { title: "Especialidades"};
                $rootScope.loading =  true;
                $timeout(function(){
                    $rootScope.loading =  false;
                },1000);
            }
        })
        .state('main.modules.acquamed.servico', {
            url: 'servico',
            controller: 'MedServCtrl',
            templateUrl: 'tpls/admin/modules/med/servico.html',
            resolve: load([
                'mdMedServ'
            ]),
            onEnter: function ($rootScope, $timeout) {
                // Loading
                $rootScope.breadcrumb[2] = { title: "Serviços"};
                $rootScope.breadcrumb[3] = { title: "Serviço"};
                $rootScope.loading =  true;
                $timeout(function(){
                    $rootScope.loading =  false;
                },1000);
            }
        })
        .state('main.modules.acquamed.categorias', {
            url: 'categorias',
            controller: 'MedCategoriasCtrl',
            templateUrl: 'tpls/admin/modules/med/categorias.html',
            resolve: load([
                'mdMedCategorias'
            ]),
            onEnter: function ($rootScope, $timeout) {
                // Loading
                $rootScope.breadcrumb[2] = { title: "Equipe"};
                $rootScope.breadcrumb[3] = { title: "Categoria"};
                $rootScope.loading =  true;
                $timeout(function(){
                    $rootScope.loading =  false;
                },1000);
            }
        })
        .state('main.modules.acquamed.profissionais', {
            url: 'profissionais',
            controller: 'MedProfCtrl',
            templateUrl: 'tpls/admin/modules/med/profissionais.html',
            resolve: load([
                'mdMedProf'
            ]),
            onEnter: function ($rootScope, $timeout) {
                // Loading
                $rootScope.breadcrumb[2] = { title: "Equipe"};
                $rootScope.breadcrumb[3] = { title: "Profissionais"};
                $rootScope.loading =  true;
                $timeout(function(){
                    $rootScope.loading =  false;
                },1000);
            }
        })
        .state('main.modules.acquamed.noticias', {
            url: 'noticias',
            controller: 'MedNoticiasCtrl',
            templateUrl: 'tpls/admin/modules/med/noticias.html',
            resolve: load([
                'mdMedNoticias'
            ]),
            onEnter: function ($rootScope, $timeout) {
                // Loading
                $rootScope.breadcrumb[2] = { title: "Notícias"};
                $rootScope.loading =  true;
                $timeout(function(){
                    $rootScope.loading =  false;
                },1000);
            }
        })
        .state('main.modules.acquamed.galerias', {
            url: 'galerias',
            controller: 'MedGaleriasCtrl',
            templateUrl: 'tpls/admin/modules/med/galerias.html',
            resolve: load([
                'mdMedGalerias'
            ]),
            onEnter: function ($rootScope, $timeout) {
                // Loading
                $rootScope.breadcrumb[2] = { title: "Galerias"};
                $rootScope.loading =  true;
                $timeout(function(){
                    $rootScope.loading =  false;
                },1000);
            }
        })
        .state('main.modules.acquamed.contato', {
            url: 'contato',
            controller: 'MedContatoCtrl',
            templateUrl: 'tpls/admin/modules/med/contato.html',
            resolve: load([
                'mdMedContato'
            ]),
            onEnter: function ($rootScope, $timeout) {
                // Loading
                $rootScope.breadcrumb[2] = { title: "Contato"};
                $rootScope.loading =  true;
                $timeout(function(){
                    $rootScope.loading =  false;
                },1000);
            }
        })
        //
        // SHOP ROUTER
        //
        .state('main.modules.acquashop', {
            url: 'acquashop/',
            controller: 'ShopCtrl',
            abstract: true,
            templateUrl: 'tpls/admin/modules/shop/main.html',
            resolve: load([
                'mdShop'
            ]),
            onEnter: function ($rootScope, $timeout) {
                // Loading
                $rootScope.breadcrumb[1] = { title: "AcquaShop"};
                $rootScope.loading =  true;
                $timeout(function(){
                    $rootScope.loading =  false;
                },1000);
            }
        })
        .state('main.modules.acquashop.home', {
            url: 'home',
            controller: 'ShopHomeCtrl',
            templateUrl: 'tpls/admin/modules/shop/home.html',
            resolve: load([
                'mdShopHome'
            ]),
            onEnter: function ($rootScope, $timeout) {
                // Loading
                $rootScope.breadcrumb[2] = { title: "Home"};
                $rootScope.loading =  true;
                $timeout(function(){
                    $rootScope.loading =  false;
                },1000);
            }
        })
        .state('main.modules.acquashop.slider', {
            url: 'slider',
            controller: 'ShopSliderCtrl',
            templateUrl: 'tpls/admin/modules/shop/slider.html',
            resolve: load([
                'mdShopSlider'
            ]),
            onEnter: function ($rootScope, $timeout) {
                // Loading
                $rootScope.breadcrumb[2] = { title: "Slider"};
                $rootScope.loading =  true;
                $timeout(function(){
                    $rootScope.loading =  false;
                },1000);
            }
        })
        .state('main.modules.acquashop.sobre', {
            url: 'sobre',
            controller: 'ShopSobreCtrl',
            templateUrl: 'tpls/admin/modules/shop/sobre.html',
            resolve: load([
                'mdShopSobre'
            ]),
            onEnter: function ($rootScope, $timeout) {
                // Loading
                $rootScope.breadcrumb[2] = { title: "Sobre"};
                $rootScope.loading =  true;
                $timeout(function(){
                    $rootScope.loading =  false;
                },1000);
            }
        })
        .state('main.modules.acquashop.publicidade', {
            url: 'publicidade',
            controller: 'ShopPubCtrl',
            templateUrl: 'tpls/admin/modules/shop/pub.html',
            resolve: load([
                'mdShopPub'
            ]),
            onEnter: function ($rootScope, $timeout) {
                // Loading
                $rootScope.breadcrumb[2] = { title: "Publicidade"};
                $rootScope.loading =  true;
                $timeout(function(){
                    $rootScope.loading =  false;
                },1000);
            }
        })
        .state('main.modules.acquashop.servicos', {
            url: 'servicos',
            controller: 'ShopServicosCtrl',
            templateUrl: 'tpls/admin/modules/shop/servicos.html',
            resolve: load([
                'mdShopServicos'
            ]),
            onEnter: function ($rootScope, $timeout) {
                // Loading
                $rootScope.breadcrumb[2] = { title: "Serviços"};
                $rootScope.loading =  true;
                $timeout(function(){
                    $rootScope.loading =  false;
                },1000);
            }
        })
        .state('main.modules.acquashop.categorias', {
            url: 'categorias',
            controller: 'ShopCategoriasCtrl',
            templateUrl: 'tpls/admin/modules/shop/categorias.html',
            resolve: load([
                'mdShopCategorias'
            ]),
            onEnter: function ($rootScope, $timeout) {
                // Loading
                $rootScope.breadcrumb[2] = { title: "Produtos"};
                $rootScope.breadcrumb[3] = { title: "Categorias"};
                $rootScope.loading =  true;
                $timeout(function(){
                    $rootScope.loading =  false;
                },1000);
            }
        })
        .state('main.modules.acquashop.produtos', {
            url: 'produtos',
            controller: 'ShopProdutosCtrl',
            templateUrl: 'tpls/admin/modules/shop/produtos.html',
            resolve: load([
                'mdShopProdutos'
            ]),
            onEnter: function ($rootScope, $timeout) {
                // Loading
                $rootScope.breadcrumb[2] = { title: "Produtos"};
                $rootScope.breadcrumb[3] = { title: "Produtos & Detalhes"};
                $rootScope.loading =  true;
                $timeout(function(){
                    $rootScope.loading =  false;
                },1000);
            }
        })
        .state('main.modules.acquashop.noticias', {
            url: 'noticias',
            controller: 'ShopNoticiasCtrl',
            templateUrl: 'tpls/admin/modules/shop/noticias.html',
            resolve: load([
                'mdShopNoticias'
            ]),
            onEnter: function ($rootScope, $timeout) {
                // Loading
                $rootScope.breadcrumb[2] = { title: "Notícias"};
                $rootScope.loading =  true;
                $timeout(function(){
                    $rootScope.loading =  false;
                },1000);
            }
        })
        .state('main.modules.acquashop.galerias', {
            url: 'galerias',
            controller: 'ShopGaleriasCtrl',
            templateUrl: 'tpls/admin/modules/shop/galerias.html',
            resolve: load([
                'mdShopGalerias'
            ]),
            onEnter: function ($rootScope, $timeout) {
                // Loading
                $rootScope.breadcrumb[2] = { title: "Galerias"};
                $rootScope.loading =  true;
                $timeout(function(){
                    $rootScope.loading =  false;
                },1000);
            }
        })
        .state('main.modules.acquashop.contato', {
            url: 'contato',
            controller: 'ShopContatoCtrl',
            templateUrl: 'tpls/admin/modules/shop/contato.html',
            resolve: load([
                'mdShopContato'
            ]),
            onEnter: function ($rootScope, $timeout) {
                // Loading
                $rootScope.breadcrumb[2] = { title: "Contato"};
                $rootScope.loading =  true;
                $timeout(function(){
                    $rootScope.loading =  false;
                },1000);
            }
        })
        //
        // FIT ROUTER
        //
        .state('main.modules.acquafitness', {
            url: 'acquafitness/',
            controller: 'FitCtrl',
            abstract: true,
            templateUrl: 'tpls/admin/modules/fit/main.html',
            resolve: load([
                'mdFit'
            ]),
            onEnter: function ($rootScope, $timeout) {
                // Loading
                $rootScope.breadcrumb[1] = { title: "AcquaFitnnes"};
                $rootScope.loading =  true;
                $timeout(function(){
                    $rootScope.loading =  false;
                },1000);
            }
        })
        .state('main.modules.acquafitness.home', {
            url: 'home',
            controller: 'FitHomeCtrl',
            templateUrl: 'tpls/admin/modules/fit/home.html',
            resolve: load([
                'mdFitHome'
            ]),
            onEnter: function ($rootScope, $timeout) {
                // Loading
                $rootScope.breadcrumb[2] = { title: "Home"};
                $rootScope.loading =  true;
                $timeout(function(){
                    $rootScope.loading =  false;
                },1000);
            }
        })
        .state('main.modules.acquafitness.slider', {
            url: 'slider',
            controller: 'FitSliderCtrl',
            templateUrl: 'tpls/admin/modules/fit/slider.html',
            resolve: load([
                'mdFitSlider'
            ]),
            onEnter: function ($rootScope, $timeout) {
                // Loading
                $rootScope.breadcrumb[2] = { title: "Slider"};
                $rootScope.loading =  true;
                $timeout(function(){
                    $rootScope.loading =  false;
                },1000);
            }
        })
        .state('main.modules.acquafitness.sobre', {
            url: 'sobre',
            controller: 'FitSobreCtrl',
            templateUrl: 'tpls/admin/modules/fit/sobre.html',
            resolve: load([
                'mdFitSobre'
            ]),
            onEnter: function ($rootScope, $timeout) {
                // Loading
                $rootScope.breadcrumb[2] = { title: "Sobre"};
                $rootScope.loading =  true;
                $timeout(function(){
                    $rootScope.loading =  false;
                },1000);
            }
        })
        .state('main.modules.acquafitness.publicidade', {
            url: 'publicidade',
            controller: 'FitPubCtrl',
            templateUrl: 'tpls/admin/modules/fit/pub.html',
            resolve: load([
                'mdFitPub'
            ]),
            onEnter: function ($rootScope, $timeout) {
                // Loading
                $rootScope.breadcrumb[2] = { title: "Publicidade"};
                $rootScope.loading =  true;
                $timeout(function(){
                    $rootScope.loading =  false;
                },1000);
            }
        })
        .state('main.modules.acquafitness.servicos', {
            url: 'servicos',
            controller: 'FitServicosCtrl',
            templateUrl: 'tpls/admin/modules/fit/servicos.html',
            resolve: load([
                'mdFitServicos'
            ]),
            onEnter: function ($rootScope, $timeout) {
                // Loading
                $rootScope.breadcrumb[2] = { title: "Serviços"};
                $rootScope.loading =  true;
                $timeout(function(){
                    $rootScope.loading =  false;
                },1000);
            }
        })
        .state('main.modules.acquafitness.noticias', {
            url: 'noticias',
            controller: 'FitNoticiasCtrl',
            templateUrl: 'tpls/admin/modules/fit/noticias.html',
            resolve: load([
                'mdFitNoticias'
            ]),
            onEnter: function ($rootScope, $timeout) {
                // Loading
                $rootScope.breadcrumb[2] = { title: "Notícias"};
                $rootScope.loading =  true;
                $timeout(function(){
                    $rootScope.loading =  false;
                },1000);
            }
        })
        .state('main.modules.acquafitness.galerias', {
            url: 'galerias',
            controller: 'FitGaleriasCtrl',
            templateUrl: 'tpls/admin/modules/fit/galerias.html',
            resolve: load([
                'mdFitGalerias'
            ]),
            onEnter: function ($rootScope, $timeout) {
                // Loading
                $rootScope.breadcrumb[2] = { title: "Galerias"};
                $rootScope.loading =  true;
                $timeout(function(){
                    $rootScope.loading =  false;
                },1000);
            }
        })
        .state('main.modules.acquafitness.contato', {
            url: 'contato',
            controller: 'FitContatoCtrl',
            templateUrl: 'tpls/admin/modules/fit/contato.html',
            resolve: load([
                'mdFitContato'
            ]),
            onEnter: function ($rootScope, $timeout) {
                // Loading
                $rootScope.breadcrumb[2] = { title: "Contato"};
                $rootScope.loading =  true;
                $timeout(function(){
                    $rootScope.loading =  false;
                },1000);
            }
        })
        //
        // ACQUARIUS ROUTER
        //
        .state('main.modules.acquarius', {
            url: 'acquarius/',
            controller: 'AcqCtrl',
            abstract: true,
            templateUrl: 'tpls/admin/modules/acq/main.html',
            resolve: load([
                'mdAcq'
            ]),
            onEnter: function ($rootScope, $timeout) {
                // Loading
                $rootScope.breadcrumb[1] = { title: "Acquarius"};
                $rootScope.loading =  true;
                $timeout(function(){
                    $rootScope.loading =  false;
                },1000);
            }
        })
        .state('main.modules.acquarius.home', {
            url: 'home',
            controller: 'AcqHomeCtrl',
            templateUrl: 'tpls/admin/modules/acq/home.html',
            resolve: load([
                'mdAcqHome'
            ]),
            onEnter: function ($rootScope, $timeout) {
                // Loading
                $rootScope.breadcrumb[2] = { title: "Home"};
                $rootScope.loading =  true;
                $timeout(function(){
                    $rootScope.loading =  false;
                },1000);
            }
        })
        .state('main.modules.acquarius.slider', {
            url: 'slider',
            controller: 'AcqSliderCtrl',
            templateUrl: 'tpls/admin/modules/acq/slider.html',
            resolve: load([
                'mdAcqSlider'
            ]),
            onEnter: function ($rootScope, $timeout) {
                // Loading
                $rootScope.breadcrumb[2] = { title: "Slider"};
                $rootScope.loading =  true;
                $timeout(function(){
                    $rootScope.loading =  false;
                },1000);
            }
        })
        .state('main.modules.acquarius.sobre', {
            url: 'sobre',
            controller: 'AcqSobreCtrl',
            templateUrl: 'tpls/admin/modules/acq/sobre.html',
            resolve: load([
                'mdAcqSobre'
            ]),
            onEnter: function ($rootScope, $timeout) {
                // Loading
                $rootScope.breadcrumb[2] = { title: "Sobre"};
                $rootScope.loading =  true;
                $timeout(function(){
                    $rootScope.loading =  false;
                },1000);
            }
        })
        .state('main.modules.acquarius.publicidade', {
            url: 'publicidade',
            controller: 'AcqPubCtrl',
            templateUrl: 'tpls/admin/modules/acq/pub.html',
            resolve: load([
                'mdAcqPub'
            ]),
            onEnter: function ($rootScope, $timeout) {
                // Loading
                $rootScope.breadcrumb[2] = { title: "Publicidade"};
                $rootScope.loading =  true;
                $timeout(function(){
                    $rootScope.loading =  false;
                },1000);
            }
        })
        .state('main.modules.acquarius.servicos', {
            url: 'servicos',
            controller: 'AcqServicosCtrl',
            templateUrl: 'tpls/admin/modules/acq/servicos.html',
            resolve: load([
                'mdAcqServicos'
            ]),
            onEnter: function ($rootScope, $timeout) {
                // Loading
                $rootScope.breadcrumb[2] = { title: "Serviços"};
                $rootScope.loading =  true;
                $timeout(function(){
                    $rootScope.loading =  false;
                },1000);
            }
        })
        .state('main.modules.acquarius.noticias', {
            url: 'noticias',
            controller: 'AcqNoticiasCtrl',
            templateUrl: 'tpls/admin/modules/acq/noticias.html',
            resolve: load([
                'mdAcqNoticias'
            ]),
            onEnter: function ($rootScope, $timeout) {
                // Loading
                $rootScope.breadcrumb[2] = { title: "Notícias"};
                $rootScope.loading =  true;
                $timeout(function(){
                    $rootScope.loading =  false;
                },1000);
            }
        })
        .state('main.modules.acquarius.galerias', {
            url: 'galerias',
            controller: 'AcqGaleriasCtrl',
            templateUrl: 'tpls/admin/modules/acq/galerias.html',
            resolve: load([
                'mdAcqGalerias'
            ]),
            onEnter: function ($rootScope, $timeout) {
                // Loading
                $rootScope.breadcrumb[2] = { title: "Galerias"};
                $rootScope.loading =  true;
                $timeout(function(){
                    $rootScope.loading =  false;
                },1000);
            }
        })
        .state('main.modules.acquarius.contato', {
            url: 'contato',
            controller: 'AcqContatoCtrl',
            templateUrl: 'tpls/admin/modules/acq/contato.html',
            resolve: load([
                'mdAcqContato'
            ]),
            onEnter: function ($rootScope, $timeout) {
                // Loading
                $rootScope.breadcrumb[2] = { title: "Contato"};
                $rootScope.loading =  true;
                $timeout(function(){
                    $rootScope.loading =  false;
                },1000);
            }
        });

        /*
         * =========================================================
         * CART ROUTES
         * =========================================================
         */
        // .state('main.orcamento', {
        //     url: 'orcamento',
        //     controller: 'CartCtrl as vm',
        //     templateUrl: 'tpls/admin/cart.html',
        //     resolve: load([
        //         'mdCart'
        //     ]),
        //     onEnter: function ($rootScope, $timeout) {
        //         $rootScope.loading =  true;
        //         $timeout(function(){
        //             $rootScope.loading =  false;
        //         },1000);
        //     }
        // });

        // LOAD LAZYLOAD
        function load(srcs, callback) {
            return {
                deps: ['$ocLazyLoad', '$q',
                function( $ocLazyLoad, $q ){
                    var deferred = $q.defer();
                    var promise  = false;
                    srcs = angular.isArray(srcs) ? srcs : srcs.split(/\s+/);
                    if(!promise){
                        promise = deferred.promise;
                    }
                        angular.forEach(srcs, function(src) {
                        promise = promise.then( function(){
                            if(CONF_LAZY[src]){
                            return $ocLazyLoad.load(CONF_LAZY[src]);
                            }
                            angular.forEach(CONF_MODULE, function(module) {
                            if( module.name == src){
                                name = module.name;
                            }else{
                                name = src;
                            }
                            });
                            return $ocLazyLoad.load(name);
                        } );
                        });
                        deferred.resolve();
                        return callback ? promise.then(function(){ return callback(); }) : promise;
                }]
            }
        }
        // resolve: {
        //     loadMyDirectives:function( $ocLazyLoad ){
        //         return $ocLazyLoad.load({
        //            name:'home',
        //            files:[ 
        //                     "/app/controllers/home.ctrl.js",
        //                  ]
        //         });
        //     }
        // }  
});