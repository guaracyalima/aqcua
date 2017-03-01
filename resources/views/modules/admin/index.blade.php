<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Audites</title>
        <link rel="stylesheet" href="components/bootstrap/dist/css/bootstrap.min.css">
        <link rel="stylesheet" href="components/ngtoast/dist/ngToast.min.css">
        <link rel="stylesheet" href="components/font-awesome/css/font-awesome.min.css">
        <link href="css/all/spin.css" rel="stylesheet" type="text/css">
        <link href="css/admin/main.css" rel="stylesheet" type="text/css">
        <link href="css/admin/signin.css" rel="stylesheet" type="text/css">
        <!-- endbuild -->
        
        <!-- SCRIPTS -->
        <script>
            // VAR INJECT
            var URL_BASE = '{!! env("APP_URI") !!}'
            var RE_CAP   = "{!! env('RE_CAP_SITE') !!}";
        </script>
        <script src="components/jquery/dist/jquery.min.js"></script>
        
        <!-- RECAPTCHA -->
        <script src="//www.google.com/recaptcha/api.js?render=explicit&onload=vcRecaptchaApiLoaded" lang="pt-PT" async defer></script>
        
        <!-- ANGULAR JS -->
        <script src="components/angular/angular.js"></script>
        <script src="components/angular-bootstrap/ui-bootstrap-tpls.min.js"></script>
        <script src="components/angular-ui-router/release/angular-ui-router.min.js"></script>
        <script src="components/angular-sanitize/angular-sanitize.min.js"></script>
        <script src="components/angular-resource/angular-resource.min.js"></script>
        <script src="components/angular-animate/angular-animate.min.js"></script>
        <script src="components/angular-cookies/angular-cookies.min.js"></script>
        <script src="components/angular-i18n/angular-locale_pt-br.js"></script>
        <script src="components/oclazyload/dist/ocLazyLoad.min.js"></script>
        <script src="components/ngtoast/dist/ngToast.min.js"></script>
        <script src="components/angular-recaptcha/release/angular-recaptcha.js"></script>
        <script src="components/ngstorage/ngStorage.min.js"></script>
        
        <!-- Angular APP -->
        <script type="text/javascript" src="js/app/app.js"></script>
        <script type="text/javascript" src="js/app/constants.js"></script>
        <script type="text/javascript" src="js/app/router.js"></script>
        <script type="text/javascript" src="js/app/run.js"></script>
        
        <!-- DEF CTRL -->
        <script type="text/javascript" src="js/app/controllers/admin/main.ctrl.js"></script>


    </head>
    <body ng-app="auditeApp">
        <!-- LOADING PAGE -->
        <div class="spin-cube show">
            <div class="sk-folding-cube">
                <div class="sk-cube1 sk-cube"></div>
                <div class="sk-cube2 sk-cube"></div>
                <div class="sk-cube4 sk-cube"></div>
                <div class="sk-cube3 sk-cube"></div>
            </div>
        </div>
        
        <div ui-view></div>
        
        
    </body>
</html>
