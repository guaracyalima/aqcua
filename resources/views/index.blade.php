<!DOCTYPE html>
<html lang="en" ng-app="mangueApp">
<head>
    <meta charset="utf-8">
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>Admin::Mangue Tecnologia</title>
    
    <!-- 
    
    STYLE
    
    -->
    <link rel="stylesheet" type="text/css" href="components/bootstrap/dist/css/bootstrap.min.css" />
    <link rel="stylesheet" type="text/css" href="components/font-awesome/css/font-awesome.min.css" />
    <link rel="stylesheet" type="text/css" href="css/pe-icon-7-stroke.css" rel="stylesheet" />
    <link rel="stylesheet" type="text/css" href="css/acquamed/fonts.gigants.medical.css">
    <link rel="stylesheet" type="text/css" href="css/acquafitness/fonts.gigants.fit.css" />
    <link rel="stylesheet" type="text/css" href="css/acquashop/fonts.gigants.clothes.css" />
    <link rel="stylesheet" type="text/css" href="css/acquarius/fonts.gigants.building.css" />
    
    <!-- Bootstrap -->
    <link rel="stylesheet" type="text/css" href="components/bootstrap/dist/css/bootstrap.min.css" >
    
    <!--  Light Bootstrap Table core CSS    -->
    <link rel="stylesheet" type="text/css" href="css/dist/light-bootstrap.css" rel="stylesheet">
    
    <!-- Toast -->
    <link rel="stylesheet" type="text/css" href="components/ngtoast/dist/ngToast.css">
    <link rel="stylesheet" type="text/css" href="components/ngtoast/dist/ngToast-animations.css">

    <!-- DATATALES -->
    <link rel="stylesheet" type="text/css" href="components/angular-datatables/dist/plugins/bootstrap/datatables.bootstrap.min.css">

    <!-- Text Angular -->
    <link rel='stylesheet' type="text/css" href='components/textAngular/dist/textAngular.css'>
    
    <!-- Jcrop -->
    <link rel="stylesheet" type="text/css" href="components/jcrop/css/jquery.Jcrop.css" />
    
    <!-- Iconpiker -->
    <link rel="stylesheet" type="text/css" href="components/fontawesome-iconpicker/dist/css/fontawesome-iconpicker.min.css" />
    
    <!-- ui-iconpicker CSS -->
    <!--<link rel="stylesheet" type="text/css" href="components/ui-iconpicker/dist/styles/ui-iconpicker.min.css">-->

    <!-- UI Select -->
    <link rel="stylesheet" type="text/css" href="components/angular-ui-select/dist/select.min.css" />

    <!-- Audite -->
    <link rel="stylesheet" type="text/css" href="css/dist/app.css">

    
    
    <!-- 
    
    SCRIPTS 
    
    -->
    <script>
        // VAR INJECT
        var URL_ADM  = '{!! env("URL_ADM") !!}';
        var URL_API  = '{!! env("URL_API") !!}';
        var URL_API  = '{!! env("URL_API") !!}';
        var RE_CAP   = "{!! env('RE_CAP_SITE') !!}";
    </script>

    <script src="https://maps.googleapis.com/maps/api/js?key={!! env('MAPS_KEY') !!}" async defer></script>

    <!-- LIBS JS -->
    <script src="components/jquery/dist/jquery.min.js"></script>
    <script src="components/bootstrap/dist/js/bootstrap.min.js"></script>
    <script src="components/datatables.net/js/jquery.dataTables.min.js"></script>
    <script src="components/datatables.net-bs/js/dataTables.bootstrap.min.js"></script>
    <script src="components/datatables.net-buttons/js/dataTables.buttons.js"></script>
    <script src="components/datatables.net-buttons/js/buttons.html5.js"></script>
    <script src="components/datatables.net-buttons/js/buttons.print.js"></script>
    <script src="components/modernizr/modernizr.js"></script>
    <script src="components/jcrop/js/jquery.Jcrop.js"></script>
    <script src="components/fontawesome-iconpicker/dist/js/fontawesome-iconpicker.js"></script>

    <!-- RECAPTCHA -->
    <!--<script src="//www.google.com/recaptcha/api.js?render=explicit&onload=vcRecaptchaApiLoaded" lang="pt-PT" async defer></script>-->

    <!-- ANGULAR JS -->
    <script src="components/angular/angular.js"></script>
    <script src="components/angular-cookies/angular-cookies.js"></script>
    <script src="components/ngstorage/ngStorage.js"></script>
    <script src="components/angular-resource/angular-resource.js"></script>
    <script src="components/angular-animate/angular-animate.js"></script>
    <script src="components/angular-bootstrap/ui-bootstrap-tpls.js"></script>
    <!--<script src="components/angular-route/angular-route.js"></script>-->
    <script src="components/angular-ui-router/release/angular-ui-router.js"></script>
    <script src="components/angular-sanitize/angular-sanitize.js"></script>
    <script src="components/satellizer/dist/satellizer.js"></script>
    <script src="components/oclazyload/dist/ocLazyLoad.js"></script>
    <script src="components/ngtoast/dist/ngToast.min.js"></script>
    <script src="components/angular-datatables/dist/angular-datatables.min.js"></script>
    <script src="components/angular-datatables/dist/plugins/bootstrap/angular-datatables.bootstrap.min.js"></script>
    <script src="components/angular-datatables/dist/plugins/buttons/angular-datatables.buttons.min.js"></script>
    <script src="components/chart.js/dist/Chart.min.js"></script>
    <script src="components/angular-chart.js/dist/angular-chart.min.js"></script>
    <script src='components/textAngular/dist/textAngular-rangy.min.js'></script>
    <script src='components/textAngular/dist/textAngular-sanitize.min.js'></script>
    <script src='components/textAngular/dist/textAngular.min.js'></script>
    <script src="components/ng-jcrop/ng-jcrop.js"></script>
    <script src="components/angular-ui-select/dist/select.min.js"></script>
    <script src="components/angular-input-masks/angular-input-masks-standalone.min.js"></script>
    <script src="components/ngMask/dist/ngMask.min.js"></script>
    
<!--    <script src="components/ui-iconpicker/dist/scripts/ui-iconpicker.min.js"></script>-->
    
    <!-- APP JS -->
    <script src="app/app.js"></script>
    <script src="app/config/run.js"></script>
    <script src="app/config/config.jcrop.js"></script>
    <script src="app/constants/config.js"></script>
    <script src="app/constants/config.datatables.js"></script>
    <script src="app/constants/config.lazyload.js"></script>
    <script src="app/config/config.js"></script>
    <script src="app/services/abs.srv.js"></script>
    <script src="app/services/auth.srv.js"></script>
    <script src="app/services/modal.srv.js"></script>
    <script src="app/controllers/main.ctrl.js"></script>
    <script src="app/directives/iconpiker.dts.js"></script>
    <script src="app/directives/iconpiker.dts.js"></script>


    <!-- Application Start SCRIPTS -->
    <script src="app/route/web.js"></script>


</head>

<body>

    <!-- ngToast directive -->
    <toast></toast>
    
    <!-- View -->
    <div ui-view></div>

</html>
