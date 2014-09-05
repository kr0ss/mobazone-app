'use strict';
  var app = angular.module('mobazoneAppApp', ['ngRoute']);

  app.config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

  $(function (){
    $.getJSON('https://las.api.pvp.net/api/lol/las/v1.4/summoner/by-name/kr0ssx?api_key=29a33f34-8728-464b-9f1d-1c38f6198752', {format: "json"}, function(data) {
      $("h1").html(data[0].title);
      $("p").html(data[0].description);
    });
  });
