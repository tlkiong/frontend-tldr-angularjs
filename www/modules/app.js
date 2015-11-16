'use strict';

angular.module('app', [
        'Core',
        'Directives',
        'Sample'
    ])
    .config(function($stateProvider, $urlRouterProvider, $compileProvider) {
        $urlRouterProvider.otherwise('/');
        $compileProvider.imgSrcSanitizationWhitelist(/^\s*(https?|file|blob|cdvfile|content):|data:image\//);
    });
