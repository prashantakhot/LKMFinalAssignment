
var app = angular.module('myApp', ['ngRoute']);
            

app.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/technicalpresentation', {
        templateUrl: 'technicalpresentation.html',
        controller: 'technicalCtrl'
    }).
      when('/Home', {
        templateUrl: 'index1.html',
        controller: 'assetCtrl'
      }).
      when('/underconstruction',{
        templateUrl: 'underconstruction.html',
        controller: 'assetCtrl'
      }).
     when('/underconstruction',{
        templateUrl: 'underconstruction.html',
        controller: 'assetCtrl'
      }).
     when('/underconstruction',{
        templateUrl: 'underconstruction.html',
        controller: 'assetCtrl'
      }).
      otherwise({
        redirectTo: '/Home'
      });
}]);


app.controller('assetCtrl', function($scope, $http) {
                $http.get("data/data2.json")
                .success(function (response) {$scope.names = response.records;});
            });

app.controller('technicalCtrl', function($scope) {
               $scope.message = "This is message";
            });
 



$(document).ready(function(){
        $(document).on('click',"#business-image",function(){
            var url = $(this).data('image');
            var name = $(this).data('name');
            var description = $(this).data('description');
            var contributor = $(this).data('contributor');
            var  createdon = $(this).data('createdon');
            var  source = $(this).data('source');
          /*  alert(url+" " +name+" "+description+contributor+createdon);
            alert('url is '+url);*/
            $("#detailimage").attr('src', url);
            document.getElementById('light').style.display='block';
            document.getElementById('fade').style.display='block';
            document.getElementById("detailname").innerHTML = "<p style='font-size:20px;color:#636363;'><b>"+name+"</b></p>";
            document.getElementById("description").innerHTML = "<p style='font-size:12px;color:#636363;'>"+description+"</p>";
            document.getElementById("contributor").innerHTML = "<p style='font-size:14px;color:#636363;'> Contributor -- <font style='font-size:14px;color:#51992b;'>"+contributor+"</font> </p><p style='font-size:11px;color:#454545;'>Created On : "+createdon+"</p>";
            $("#gotosite").attr('href',source);
            
        });
});

