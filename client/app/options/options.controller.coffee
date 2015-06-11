'use strict'

angular.module 'tfHomeApp'
.controller 'OptionsCtrl', ($scope, $http, socket, brickletModel) ->
  $scope.bricklets = []
  $scope.devices = {
  	233: {label: 'Motion Detector', id: 233, threshold: false},
  	238: {label: 'Sound Intensity', id: 238, threshold: true}
  }
  $scope.thresholdOptions = [
  	{key: 'x', label: 'turned off'},
  	{key: 'o', label: 'outside'},
  	{key: 'i', label: 'inside'},
  	{key: '<', label: 'smaller then'},
  	{key: '>', label: 'greater then'},
  ]
  $scope.bricklets = brickletModel.query()
  $scope.bricklets.$promise.then ->
  	socket.syncUpdates 'bricklet', $scope.bricklets

  $scope.saveBricklet = (bricklet) ->
    if bricklet._id is undefined
    	brickletModel.save(bricklet).$promise.then (data) ->
    		bricklet = data
    else
    	brickletModel.update(bricklet)
  
  $scope.addBricklet = ->
  	$scope.bricklet = new brickletModel()
  	$scope.bricklet.backend = {threshold:{option: 'x'}}

  $scope.selectBricklet = (bricklet) ->
  	$scope.bricklet = bricklet

  $scope.removeBricklet = (bricklet) ->
    bricklet.$remove()
    $scope.bricklet = undefined

  $scope.$on '$destroy', ->
    socket.unsyncUpdates 'bricklet'