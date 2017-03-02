<html ng-app="acquaApp">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="url" content="http://www.grupoacqua.com.br">
    <meta name="robots" content="index, follow">
    <meta name="copyright" content="Grupo Acqua">
    <meta name="description" content="">
    <meta name="keywords" content=" Clínica, Medicina, Médicos, Reabilitação, Atividade Física, 
                                    Ortopedista, Traumatologista, Atividade Física na Piscina, 
                                    Cardiologista, Fisioterapeutas, Nutricionista, Psicólogos,
                                    Educação Física, Cosmetóloga, Esteticista, Piscina aquecida,
                                    natação, natação de bebês, natação infantil, natação adulto,
                                    hidroginástica, hidroterapia, musculação, ginástica aeróbica, 
                                    karatê, pilates, ioga, circuito infantil e adulto, Dança de Salão,
                                    reabilitação física
    ">
    <meta http-equiv="Pragma" content="no-cache">
    <meta http-equiv="content-type" content="text/html; charset=iso-8859-1">
    <meta http-equiv="content-language" content="pt-br">
    <meta name="author" content="Mangue Tecnologia" />
    <meta name="reply-to" content="root.arthur@root.arthur">
    
    <link rel="apple-touch-icon" sizes="57x57" href="img/ico/apple-icon-57x57.png">
    <link rel="apple-touch-icon" sizes="60x60" href="img/ico/apple-icon-60x60.png">
    <link rel="apple-touch-icon" sizes="72x72" href="img/ico/apple-icon-72x72.png">
    <link rel="apple-touch-icon" sizes="76x76" href="img/ico/apple-icon-76x76.png">
    <link rel="apple-touch-icon" sizes="114x114" href="img/ico/apple-icon-114x114.png">
    <link rel="apple-touch-icon" sizes="120x120" href="img/ico/apple-icon-120x120.png">
    <link rel="apple-touch-icon" sizes="144x144" href="img/ico/apple-icon-144x144.png">
    <link rel="apple-touch-icon" sizes="152x152" href="img/ico/apple-icon-152x152.png">
    <link rel="apple-touch-icon" sizes="180x180" href="img/ico/apple-icon-180x180.png">
    <link rel="icon" type="image/png" sizes="192x192"  href="img/ico/android-icon-192x192.png">
    <link rel="icon" type="image/png" sizes="32x32" href="img/ico/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="96x96" href="img/ico/favicon-96x96.png">
    <link rel="icon" type="image/png" sizes="16x16" href="img/ico/favicon-16x16.png">
    <link rel="manifest" href="img/ico/manifest.json">
    <link rel="shortcut icon" href="img/ico/favicon.ico" type="image/x-icon" />
    <meta name="msapplication-TileColor" content="#ffffff">
    <meta name="msapplication-TileImage" content="assets/img/ico/ms-icon-144x144.png">
    <meta name="theme-color" content="#ffffff">


    <title></title>
        
<!--        {   { titleHead }  }-->
    
    <!--
        ===================== 
        STYLE 
        =====================
    -->
    <!--<link href="https://fonts.googleapis.com/css?family=Karla:400,700&amp;subset=latin-ext" rel="stylesheet">-->
    <link href="https://fonts.googleapis.com/css?family=Lato:300,400,400i,700&amp;subset=latin-ext" rel="stylesheet"> 
    <link href="components/bootstrap/dist/css/bootstrap.min.css" rel="stylesheet">
    <link href="components/owl.carousel/dist/assets/owl.carousel.css" rel="stylesheet">
    <link href="components/owl.carousel/dist/assets/owl.theme.default.css" rel="stylesheet">
                
    <!-- FONTS -->
    <link href="components/font-awesome/css/font-awesome.min.css" rel="stylesheet">
    <link href="css/acquamed/fonts.gigants.medical.css" rel="stylesheet">
    <link href="css/acquafitness/fonts.gigants.fit.css" rel="stylesheet">
    <link href="css/acquashop/fonts.gigants.clothes.css" rel="stylesheet">
    <link href="css/acquarius/fonts.gigants.building.css" rel="stylesheet">

    <link href="css/reset.css" rel="stylesheet">
    <link href="css/acqua.css" rel="stylesheet">
    <link href="css/footer.group.css" rel="stylesheet">
    <link href="css/loading.css" rel="stylesheet">

    
    <link href="css/dist/acqua.css" rel="stylesheet">
    <link href="css/dist/acquashop.css" rel="stylesheet">
    <link href="css/dist/acquafitness.css" rel="stylesheet">
    <link href="css/dist/acquamed.css" rel="stylesheet">
    <link href="css/dist/acquarius.css" rel="stylesheet">

    
</head>
<body>

<body>
    <!--[if lt IE 7]>
    <p class="browsehappy">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade
        your browser</a> to improve your experience.</p>
    <![endif]-->

    <!-- ======== INT LOADING ======== -->
    <div ng-include='"tpls/site/block/loading-bars.html"' ng-class="{'svg-show': loading}" class="content-loading"></div>
    <!-- ======== END LOADING ======== -->

    <div ui-view></div>
    
    
    <!--
        ===================== 
        SCRIPTS
        =====================
    -->
    <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
        <script src="https://oss.maxcdn.com/html5shiv/3.7.3/html5shiv.min.js"></script>
        <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->
    
    <script>
        // VAR INJECT
        var URL_API  = '{!! env("URL_API") !!}';
    </script>
    
    <script src="components/jquery/dist/jquery.min.js"></script>
    <script src="components/owl.carousel/dist/owl.carousel.min.js"></script>
    
    <script src="https://www.youtube.com/iframe_api"></script>
    <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyA2W0lUy_CuqLQ2M54ImzzG5dnwBnqDmPQ" async defer></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"
            integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa"
            crossorigin="anonymous"></script>
    
    
    <!-- Application Dependencies -->
    <script src="components/modernizr/modernizr.js"></script>
    <script src="components/angular/angular.js"></script>
    <script src="components/angular-resource/angular-resource.js"></script>
    <script src="components/angular-animate/angular-animate.js"></script>
    <script src="components/angular-bootstrap/ui-bootstrap-tpls.js"></script>
    <script src="components/angular-route/angular-route.js"></script>
    <script src="components/angular-ui-router/release/angular-ui-router.js"></script>
    <script src="components/angular-sanitize/angular-sanitize.js"></script>
    <!--
    <script src="components/angular-touch/angular-touch.min.js"></script>
    <script src="components/angular-carousel/dist/angular-carousel.js"></script>
    -->
    <script src="components/satellizer/dist/satellizer.js"></script>
    <script src="components/oclazyload/dist/ocLazyLoad.js"></script>
    <script src="components/angular-youtube-mb/dist/angular-youtube-embed.min.js"></script>
    <script src="js/mega-menu/angular-mega-menu.js"></script>
    <script src="js/cart/cart.js"></script>
    
    
    <!-- Application SCRIPTS -->
    <script src="app/site/app.js"></script>
    <script src="app/site/constants/config.js"></script>
    <script src="app/site/constants/config.lazyload.js"></script>
    <script src="app/site/route/routes.js"></script>
    <script src="app/site/config/config.js"></script>
    <script src="app/site/filters/filter.js"></script>
    <script src="app/site/services/abs.srv.js"></script>
    <script src="app/site/services/modal.srv.js"></script>
    <script src="app/site/services/blog.srv.js"></script>
    <script src="app/site/services/store.srv.js"></script>
    <script src="app/site/services/cart.shared.srv.js"></script>
    <script src="app/site/services/cart.srv.js"></script>
    <script src="app/site/directives/cart.dts.js"></script>
    <script src="js/angular-socialshare.min.js"></script>

    <!-- Application Start SCRIPTS -->
    <script src="app/site/controllers/main.ctrl.js"></script>
    <script src="app/site/controllers/cart.ctrl.js"></script>


</body>
</html>