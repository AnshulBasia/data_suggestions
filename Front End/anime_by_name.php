<!DOCTYPE html>

<html>
    
        <link rel="stylesheet" type="text/css" href="mystyle.css">

<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.4.8/angular.min.js"></script>
<body>
    
<h3 id="id"></h3>
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
var name = "<?php echo $_POST['name']; ?>";
var api = "http://localhost:3000/api/anime/name/";
var apiname = api.concat(name);
document.getElementById("id").innerHTML = name;
app.controller('myCtrl', function($scope, $http) {
  $http.get(apiname).then(function (response) {
      $scope.myData = response.data.data;
  });
});
</script>

</body>
</html>
