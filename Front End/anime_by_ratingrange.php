<!DOCTYPE html>

<html>
    
        <link rel="stylesheet" type="text/css" href="mystyle.css">

<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.4.8/angular.min.js"></script>
<body>
<h3 id= "id"></h3> 

<div ng-app="myApp" ng-controller="myCtrl"> 


        <table>
            <tr>
                <th>id</th>
                <th>name</th>
                <th>genre</th>
                <th>episodes</th>
                <th>rating</th>
            </tr>
            <tr ng-repeat="x in myData">
                <td>{{ x.anime_id }}</td>
                <td>{{ x.name }}</td>
                <td>{{ x.genre }}</td>
                <td>{{ x.episodes }}</td>
                <td>{{ x.rating }}</td>
            </tr>
        </table>
</div>


<script>
var app = angular.module('myApp', []);
var ratinghigh = "<?php echo $_POST['high']; ?>";
var ratinglow = "<?php echo $_POST['low']; ?>";
var api = "http://localhost:3000/api/anime/rating/";
var slash = "/";
apiname = api+ratinglow+slash+ratinghigh;

document.getElementById("id").innerHTML = "Anime Details of rating greater than: "+ratinghigh+" less than "+ratinglow;
app.controller('myCtrl', function($scope, $http) {
  $http.get(apiname).then(function (response) {
      $scope.myData = response.data.data;
  });
});
</script>

</body>
</html>
