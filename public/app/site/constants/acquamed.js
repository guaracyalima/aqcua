/**
 * AngularJS Application
 * @author Arthur Costa <root.arthur@gmail.com>
 */
angular.module('acquaApp')
// ROUTER
.constant('MENU_FIXED', {
    template:  '<nav class="navbar navbar-fixed-top" ng-class="menuf.class">\n\
                    <div class="container">\n\
                         <div class="navbar-header">\n\
                            <button type="button" class="navbar-toggle" ng-click="isNavCollapsed = !isNavCollapsed">\n\
                                <span class="sr-only">Toggle navigation</span>\n\
                                <span class="icon-bar"></span>\n\
                                <span class="icon-bar"></span>\n\
                                <span class="icon-bar"></span>\n\
                            </button>\n\
                            <a class="navbar-brand" ng-class="menuf.logoClass" href="#">\n\
                                <img ng-src="{{ menuf.logo }}" class="img-responsive">\n\
                            </a>\n\
                         </div>\n\
                         <div id="navbar" class="collapse navbar-collapse"  uib-collapse="isNavCollapsed">\n\
                            <ul class="nav navbar-nav">\n\
                                <li ng-repeat="nlist in menuf.navList" ng-class="{\'active\' : nlist.active == true}">\n\
                                    <a dts-nav-scroll="" ng-if="\'tree-nav\' !== nlist.tree && !nlist.link" dt-href="nlist.uri">\n\
                                        <span>{{nlist.name}}</span>\n\
                                    </a>\n\
                                    <a dts-nav-scroll="" ng-if="\'tree-nav\' !== nlist.tree && nlist.link" ng-href="{{nlist.uri}}">\n\
                                        <span>{{nlist.name}}</span>\n\
                                    </a>\n\
                                    <a class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false" ng-if="\'tree-nav\' === nlist.tree">\n\
                                        <span>{{nlist.name}}</span>\n\
                                        <i class="fa fa-angle-down"></i>\n\
                                    </a>\n\
                                    <ul class="dropdown-menu" ng-if="\'tree-nav\' === nlist.tree">\n\
                                        <li ng-repeat="tlist in nlist.treeList" class="active" ng-if="nlist.active">\n\
                                            <a dts-nav-scroll="" dt-href="tlist.uri">\n\
                                                {{tlist.navName}}\n\
                                            </a>\n\
                                        </li>\n\
                                    </ul>\n\
                                </li>\n\
                            </ul>\n\
                         </div>\n\
                   </div>\n\
                </nav>'
});