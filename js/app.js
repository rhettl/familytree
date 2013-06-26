'use strict';


// Declare app level module which depends on filters, and services
angular.module('FamilyTree', ['FamilyTree.controllers']).
  config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/', {templateUrl: 'partials/AllPeople.html', controller: 'AllPeopleCtrl'});
    $routeProvider.when('/details/:personID', {templateUrl: 'partials/PersonDetails.html', controller: 'PersonDetailsCtrl'});
    $routeProvider.otherwise({redirectTo: '/'});
  }]);
