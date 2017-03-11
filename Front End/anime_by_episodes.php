
<!DOCTYPE html>
<?php  echo $_POST["high"]; ?>

<html>
<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.4.8/angular.min.js"></script>
<body>
<h3>Anime Details of rating greater than: <h5 id ="low"></h5> and less than <h5 id ="high"></h5></h3>
<div ng-app="myApp" ng-controller="myCtrl"> 

<ul>
  <li ng-repeat="x in myData">
    {{ x }}
  </li>
</ul>

</div>

<script>
var app = angular.module('myApp', []);
var ratinghigh = "<?php echo $_POST['high']; ?>";
var ratinglow = "<?php echo $_POST['low']; ?>";
var api = "http://localhost:3000/api/anime/episodes/";
var slash = "/";
apiname = api+ratinghigh+slash+ratinglow;
document.getElementById("low").innerHTML = ratinglow;
document.getElementById("high").innerHTML = ratinghigh;
app.controller('myCtrl', function($scope, $http) {
  $http.get(apiname).then(function (response) {
      $scope.myData = response.data.data;
  });
});
</script>

</body>
</html>
