angular.module('cosmicdigest').service('FirebaseService', function($http, $q){

  this.getPosts = function(posts) {
    return $http ({
       method: 'GET',
       url: 'https://cosmic-digest.firebaseio.com/posts.json'})
  }

});
