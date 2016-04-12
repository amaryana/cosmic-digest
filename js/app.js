angular.module("cosmicdigest", ["ui.router"]).config(function($stateProvider, $urlRouterProvider){
​  $urlRouterProvider
      .otherwise("/");
​
    $stateProvider
      .state("home", {
        url: "/",
        controller: "homectrl",
        templateUrl: "components/home/homeIndex.html"
      })
​
      .state("about", {
        url: "/about",
        controller: "aboutCtrl",
        templateUrl: "components/about/aboutTmpl.html"
      })
​
      .state("login", {
        url: "/login",
        controller: "loginCtrl",
        templateUrl: "components/login/loginTmpl.html"
      })
​
      .state("signup", {
        url: "/signup",
        controller: "loginCtrl",
        templateUrl: "components/signup/signupTmpl.html"
      })
      .state('day', {
          url: '/day',
          controller: "dayCtrl",
          templateUrl: 'components/Day/day.html'
      })
​
  });
