window.onload=function(){
window.location ="/#/current";
}

var app=angular.module("myApp",['ngRoute']);






app.config(function($routeProvider)
          {
//    alert('provider');
        $routeProvider
    .when("/current",
         {
                 controller:"mainCtrl",
                 templateUrl:"current.html"

   
        
    })
    
      .when("/day3",
         {
                 controller:"day3Ctrl",
                 templateUrl:"3days.html"

   
        
    })
          .when("/day7",
         {
                 controller:"day7Ctrl",
                 templateUrl:"7days.html"

   
        
    });
    
}
          
          
          
          );


