
<!DOCTYPE html>
<?php  echo $_POST["rating"]; ?>

<html>
<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.4.8/angular.min.js"></script>
<body>
<h3>Anime Details of rating greater than: <h5 id ="id"></h5></h3>
<div ng-app="myApp" ng-controller="myCtrl"> 

<ul>
  <li ng-repeat="x in myData">
    {{ x }}
  </li>
</ul>

</div>

<script>
var app = angular.module('myApp', []);
var rating = "<?php echo $_POST['rating']; ?>";
var api = "http://localhost:3000/api/anime/rating/";
var apiname = api.concat(rating);
document.getElementById("id").innerHTML = rating;
app.controller('myCtrl', function($scope, $http) {
  $http.get(apiname).then(function (response) {
      $scope.myData = response.data.data;
  });
});
</script>

</body>
</html>
