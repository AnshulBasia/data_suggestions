<!DOCTYPE html>
<?php  echo $_POST["name"]; ?>

<html>
<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.4.8/angular.min.js"></script>
<body>
<h3>Anime Details of id: <h5 id ="id"></h5></h3>
<div ng-app="myApp" ng-controller="myCtrl"> 

<ul>
  <li ng-repeat="x in myData">
    {{ x }}
  </li>
</ul>

</div>

<script>
var app = angular.module('myApp', []);
var name = "<?php echo $_POST['name']; ?>";
var api = "http://localhost:3000/api/anime/";
var apiname = api.concat(id);
document.getElementById("id").innerHTML = name;
app.controller('myCtrl', function($scope, $http) {
  $http.get(apiname).then(function (response) {
      $scope.myData = response.data.data;
  });
});
</script>

</body>
</html>
