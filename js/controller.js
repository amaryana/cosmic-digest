angular.module('cosmicdigest').controller('PostsController', function($scope, $firebaseArray, FirebaseService){

$scope.getPosts = function () {
  FirebaseService.getPosts().then(function(res){
    $scope.posts = res.data;

  })
}
$scope.getPosts();

});
