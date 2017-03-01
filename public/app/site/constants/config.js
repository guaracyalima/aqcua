/**
 * AngularJS Application
 * @author Arthur Costa <root.arthur@gmail.com>
 */
angular.module('acquaApp')
// ROUTER
.constant('URI_API', {
    sys:      'http://site-acqua.siritecnologia.com.br',
})
.constant('NAV_MENU', {
    MED: {
        "class": "navbar-default navbar-med",
        "logo": "img/logo/acquamed.png",
        "logoClass": "img-logo",
        "navList": [
            {
                "active": true,
                "tree": false,
                "uri": "#home",
                "name": "Home"
            },
            {
                "active": false,
                "tree": false,
                "uri": "#especialidades",
                "name": "Especialidades"
            },
            {
                "active": false,
                "tree": false,
                "uri": "#equipe",
                "name": "Profissionais"
            },
            {
                "active": false,
                "tree": false,
                "uri": "#galeria",
                "name": "Galeria"
            },
            {
                "active": false,
                "tree": false,
                "uri": "#blog",
                "name": "Notícias"
            },
            {
                "active": false,
                "tree": false,
                "link": true,
                "uri": "#/home",
                "name": "Grupo"
            },
            {
                "active": false,
                "tree": false,
                "uri": "#contato",
                "name": "contato"
            }

        ]
    },
    SHOP:{
        "class": "navbar-default navbar-shop",
        "logo": "img/logo/acquashop.png",
        "logoClass": "img-logo",
        "navList": [
            {
                "active": true,
                "tree": false,
                "uri": "#home",
                "name": "Home"
            },
            {
                "active": false,
                "tree": false,
                "uri": "#sobre",
                "name": "Empresa"
            },
            {
                "active": false,
                "tree": false,
                "uri": "#produto",
                "name": "Produtos"
            },
            {
                "active": false,
                "tree": false,
                "uri": "#galeria",
                "name": "Galeria"
            },
            {
                "active": false,
                "tree": false,
                "uri": "#blog",
                "name": "Notícias"
            },
            {
                "active": false,
                "tree": false,
                "link": true,
                "uri": "#/home",
                "name": "Grupo"
            },
            {
                "active": false,
                "tree": false,
                "uri": "#contato",
                "name": "contato"
            }

        ]
    },
    FIT:{
        "class": "navbar-default navbar-fitness",
        "logo": "img/logo/acquafitness.png",
        "logoClass": "img-logo",
        "navList": [
            {
                "active": true,
                "tree": false,
                "uri": "#home",
                "name": "Home"
            },
            {
                "active": false,
                "tree": false,
                "uri": "#sobre",
                "name": "Acquafitness"
            },
            {
                "active": false,
                "tree": false,
                "uri": "#servicos",
                "name": "Atividades"
            },
            {
                "active": false,
                "tree": false,
                "uri": "#galeria",
                "name": "Galeria"
            },
            {
                "active": false,
                "tree": false,
                "uri": "#blog",
                "name": "Notícias"
            },
            {
                "active": false,
                "tree": false,
                "link": true,
                "uri": "#/home",
                "name": "Grupo"
            },
            {
                "active": false,
                "tree": false,
                "uri": "#contato",
                "name": "contato"
            }

        ]
    },
    ACQ:{
        "class": "navbar-default navbar-acquarius",
        "logo": "img/logo/acquarius.png",
        "logoClass": "img-logo",
        "navList": [
            {
                "active": true,
                "tree": false,
                "uri": "#home",
                "name": "Home"
            },
            {
                "active": false,
                "tree": false,
                "uri": "#sobre",
                "name": "Acquarius"
            },
            {
                "active": false,
                "tree": false,
                "uri": "#estrutura",
                "name": "Estrutura"
            },
            {
                "active": false,
                "tree": false,
                "uri": "#galeria",
                "name": "Galeria"
            },
            {
                "active": false,
                "tree": false,
                "uri": "#blog",
                "name": "Notícias"
            },
            {
                "active": false,
                "tree": false,
                "link": true,
                "uri": "#/home",
                "name": "Grupo"
            },
            {
                "active": false,
                "tree": false,
                "uri": "#contato",
                "name": "contato"
            }

        ]
    }

});
