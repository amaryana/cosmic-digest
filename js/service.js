angular.module('cosmicdigest').service('FirebaseService', function($http, $q){

  this.getPosts = function(posts) {
    return $http ({
       method: 'GET',
       url: 'https://devmtn.firebaseio.com/posts.json'})
  }

});
