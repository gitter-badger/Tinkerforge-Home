'use strict'

angular.module 'tfHomeApp'
.factory 'brickletModel', ['$resource', ($resource)->
	return $resource("/api/bricklets/:id", {id: '@_id'},{
		update:{
			method: 'PUT'
		}
		})
]