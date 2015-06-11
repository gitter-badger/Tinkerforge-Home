'use strict'

angular.module 'tfHomeApp'
.config ($stateProvider) ->
  $stateProvider.state 'options',
    url: '/options'
    templateUrl: 'app/options/options.html'
    controller: 'OptionsCtrl'
