<!DOCTYPE html>

<html>

<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.4.8/angular.min.js"></script>
<body>
<h3>Movie INSERTED: <h5 id ="id"></h5></h3>
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
var genre = "<?php echo $_POST['genre']; ?>";
var year = "<?php echo $_POST['year']; ?>";
var director = "<?php echo $_POST['director']; ?>";
var actor1 = "<?php echo $_POST['actor1']; ?>";
var actor2 = "<?php echo $_POST['actor2']; ?>";
var actor3 = "<?php echo $_POST['actor3']; ?>";
var imdb = "<?php echo $_POST['imdb']; ?>";
var budget = "<?php echo $_POST['budget']; ?>";
var gross = "<?php echo $_POST['gross']; ?>";

var api = "http://localhost:3000/api/insert_movie/";
apid = api + name + "/" + genre + "/" + year + "/" + director +/" + actor1+ "/" + actor2+ "/" + actor3+ "/" + imdb+ "/" + budget+ "/" + gross ;
document.getElementById("id").innerHTML = apid;
app.controller('myCtrl', function($scope, $http) {
  $http.get(apid).then(function (response) {
      $scope.myData = response.data.data;
  });
});
</script>
<a href = "movies.html">Back</a>
</body>
</html>
