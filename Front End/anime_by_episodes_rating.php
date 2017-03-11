
<!DOCTYPE html>


<html>
<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.4.8/angular.min.js"></script>
<body>
<h3>Anime Details of rating less than<?php echo $_POST['highr']; ?> and greater than 
<?php echo $_POST['lowr']; ?> and for episodes less than <?php echo $_POST['highe']; ?>
 and greater than <?php echo $_POST['lowe']; ?>:</h3>
<div ng-app="myApp" ng-controller="myCtrl"> 

<ul>
  <li ng-repeat="x in myData">
    {{ x }}
  </li>
</ul>

</div>

<script>
var app = angular.module('myApp', []);
var ratinghigh = "<?php echo $_POST['highr']; ?>";
var ratinglow = "<?php echo $_POST['lowr']; ?>";
var episodeshigh = "<?php echo $_POST['highe']; ?>";
var episodeslow = "<?php echo $_POST['lowe']; ?>";
var api = "http://localhost:3000/api/anime/episodes_rating/";
var slash = "/";
apiname = api+episodeslow+slash+episodeshigh+slash+ratinglow+slash+ratinghigh;
app.controller('myCtrl', function($scope, $http) {
  $http.get(apiname).then(function (response) {
      $scope.myData = response.data.data;
  });
});
</script>

</body>
</html>
