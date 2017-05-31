var app=angular.module("myApp");
app.controller("day3Ctrl",function($scope,$http)
               {
//    alert("controller");
    $http.get("http://api.apixu.com/v1/forecast.json?key=fec2fe1a8a074db5a5a152813172305&q=beirut&days=3").then(function(res){
            var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
        $scope.city1=res.data.location.name + "," + res.data.location.country;
        $scope.deg1=res.data.forecast.forecastday[0].day.avgtemp_c;
         $scope.unit1="C";
        $scope.wind1=res.data.forecast.forecastday[0].day.maxwind_kph + " km/h"
        var d = new Date(res.data.forecast.forecastday[0].date);
 
$scope.tod1=days[d.getDay()];
          $scope.img1=res.data.forecast.forecastday[0].day.condition.icon;  
            $scope.text1=res.data.forecast.forecastday[0].day.condition.text;
        
        
        
              $scope.city2=res.data.location.name + "," + res.data.location.country;
        $scope.deg2=res.data.forecast.forecastday[1].day.avgtemp_c;
         $scope.unit2="C";
        $scope.wind2=res.data.forecast.forecastday[1].day.maxwind_kph + " km/h"
        var d1 = new Date(res.data.forecast.forecastday[1].date);
 
$scope.tod2=days[d1.getDay()];
                  $scope.img2=res.data.forecast.forecastday[1].day.condition.icon;  
            $scope.text2=res.data.forecast.forecastday[1].day.condition.text;
        
        
        
        
                      $scope.city3=res.data.location.name + "," + res.data.location.country;
        $scope.deg3=res.data.forecast.forecastday[2].day.avgtemp_c;
         $scope.unit3="C";
        $scope.wind3=res.data.forecast.forecastday[2].day.maxwind_kph + " km/h"
        var d2 = new Date(res.data.forecast.forecastday[2].date);
 
$scope.tod3=days[d2.getDay()];
                  $scope.img3=res.data.forecast.forecastday[2].day.condition.icon;  
            $scope.text3=res.data.forecast.forecastday[2].day.condition.text;
        
        

    });
    
});
