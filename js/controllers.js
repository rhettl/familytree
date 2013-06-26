'use strict';

/* Controllers */

var controllers = angular.module('FamilyTree.controllers', []);

controllers.controller('AllPeopleCtrl', function($scope, $http){
    $scope.people = {};
    $http.get('people/people.json').success(function(data){
        $scope.people = data;
    });
});
controllers.controller('PersonDetailsCtrl', function($scope, $http, $routeParams){
    $scope.personID = $routeParams.personID;
    $scope.person = {};
    $http.get('people/people.json').success(function(data){
        $scope.person = data[$scope.personID];
    });
});

