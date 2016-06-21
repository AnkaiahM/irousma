angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

    // Ionic uses AngularUI Router which uses the concept of states
    // Learn more here: https://github.com/angular-ui/ui-router
    // Set up the various states which the app can be in.
    // Each state's controller can be found in controllers.js
    $stateProvider

        .state('menu', {
        url: '/side-menu21',
        templateUrl: 'templates/menu.html',
        abstract: true
    })

    .state('menu.login', {
        url: '/login',
        views: {
            'side-menu21': {
                templateUrl: 'templates/login.html',
                controller: 'loginCtrl'
            }
        }
    })

    .state('menu.orders', {
        url: '/orders',
        views: {
            'side-menu21': {
                templateUrl: 'templates/orders.html',
                controller: 'ordersCtrl'
            }
        }
    })

    .state('selectTable', {
        url: '/selecttable',
        templateUrl: 'templates/selectTable.html',
        controller: 'neworderCtrl'
    })

    .state('selectMenu', {
        url: '/selectmenu',
        templateUrl: 'templates/selectMenu.html',
        controller: 'neworderCtrl'
    })

    .state('reviewOrder', {
        url: '/revieworder',
        templateUrl: 'templates/reviewOrder.html',
        controller: 'neworderCtrl'
    })

    .state('menu.mergeOrders', {
        url: '/mergeorders',
        views: {
            'side-menu21': {
                templateUrl: 'templates/mergeOrders.html',
                controller: 'mergeOrdersCtrl'
            }
        }
    })

    .state('menu.syncMenu', {
        url: '/syncmenu',
        views: {
            'side-menu21': {
                templateUrl: 'templates/syncMenu.html',
                controller: 'syncMenuCtrl'
            }
        }
    })

    .state('menu.showBills', {
        url: '/showbills',
        views: {
            'side-menu21': {
                templateUrl: 'templates/showBills.html',
                controller: 'showBillsCtrl'
            }
        }
    })

    .state('showOrder', {
        url: '/showorder',
        templateUrl: 'templates/showOrder.html',
        controller: 'showOrderCtrl'
    })

    $urlRouterProvider.otherwise('/side-menu21/login')



});
