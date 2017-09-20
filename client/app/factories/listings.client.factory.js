angular.module('listings').factory('Listings', ['$http',
  function($http) {
    var methods = {
      getAll: function() {
        return $http.get(window.location.origin + '/api/listings');
      },

      create: function(listing) {
        return $http.post(window.location.origin + '/api/listings', listing);
      },

      read: function(id) {
        return $http.get(window.location.origin + '/api/listings/' + id);
      },

      update: function(id, listing) {
        return $http.put(window.location.origin + '/api/listings/' + id, listing);
      },

      delete: function(id) {
        return $http.delete(window.location.origin + '/api/listings/' + id);
      }
    };

    return methods;
  }
]);
