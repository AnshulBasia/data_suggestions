<!DOCTYPE html>

<html>
<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.4.8/angular.min.js"></script>
<body>
<h3>Anime INSERTED: <h5 id ="id"></h5></h3>
<div ng-app="myApp" ng-controller="myCtrl"> 

<ul>
  <li ng-repeat="x in myData">
    {{ x }}
  </li>
</ul>

</div>

<script>
var app = angular.module('myApp', []);
var id = "<?php echo $_POST['id']; ?>";
var name = "<?php echo $_POST['name']; ?>";
var genre = "<?php echo $_POST['genre']; ?>";
var api = "http://localhost:3000/api/insert_anime/";
apid = api +id + "/" + name + "/" + genre;

app.controller('myCtrl', function($scope, $http) {
  $http.get(apid).then(function (response) {
      $scope.myData = response.data.data;
  });
});
</script>
<a href="anime.html">Back</a>
</body>
</html>
