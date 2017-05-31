var app=angular.module("myApp");
 var days = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
app.controller("day7Ctrl",function($scope,$http)
               {
//    alert("controller");
     $scope.getDay=function(d)
 {
     var d1 = new Date(d);
      
     return days[d1.getDay()];
 }
  
    $http.get("http://api.apixu.com/v1/forecast.json?key=fec2fe1a8a074db5a5a152813172305&q=beirut&days=7").then(function(res){
          
        $scope.weathers=res.data.forecast.forecastday;
        console.log($scope.weathers);
//        $scope.city1=res.data.location.name + "," + res.data.location.country;
//        $scope.deg1=res.data.forecast.forecastday[0].day.avgtemp_c;
//         $scope.unit1="C";
//        $scope.wind1=res.data.forecast.forecastday[0].day.maxwind_kph + " km/h"
        
//        var d = new Date(res.data.forecast.forecastday[0].date);
// p
//$scope.tod1=days[d.getDay()];
//          $scope.img1=res.data.forecast.forecastday[0].day.condition.icon;  
//            $scope.text1=res.data.forecast.forecastday[0].day.condition.text;
//        
      
        

    });
    
});
