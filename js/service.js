angular.module('cosmicdigest').service('FirebaseService', function($http, $q){


  this.getPosts = function(posts) {
    return $http ({
       method: 'GET',
       url: 'https://cosmic-digest.firebaseio.com/posts.json'})
  }

  var ref = new Firebase("https://docs-examples.firebaseio.com/web/saving-data/fireblog");
  
  usersRef.set({
  alanisawesome: {
    date_of_birth: "June 23, 1912",
    full_name: "Alan Turing"
  },
  gracehop: {
    date_of_birth: "December 9, 1906",
    full_name: "Grace Hopper"
  }

});
