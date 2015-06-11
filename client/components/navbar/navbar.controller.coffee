'use strict'

angular.module 'tfHomeApp'
.controller 'NavbarCtrl', ($scope, $location) ->
  $scope.menu = [
  	{
    	title: 'Home'
    	link: '/'
	}
    ,
    {
    	title: 'Options'
    	link: '/options'
	}
  ]
  $scope.isCollapsed = true

  $scope.isActive = (route) ->
    route is $location.path()