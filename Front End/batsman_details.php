<!DOCTYPE html>

<html>
    
        <link rel="stylesheet" type="text/css" href="mystyle.css">

<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.4.8/angular.min.js"></script>
<body>
    
<h3 id="id"></h3>
<div ng-app="myApp" ng-controller="myCtrl"> 



<table>
            <tr>
                <th>name</th>
                <th>matches_played</th>
                <th>avg</th>
                <th>strike_rate</th>
                <th>runs_scored</th>
                <th>balls_faced</th>
            </tr>

            <tr ng-repeat="x in myData">
                <td>{{ x.name }}</td>
                <td>{{ x.matches_played }}</td>
                <td>{{ x.avg }}</td>
                <td>{{ x.strike_rate}}</td>
                <td>{{ x.runs_scored }}</td>
                <td>{{ x.balls_faced }}</td>

            </tr>
        </table>
</div>

<script>
var app = angular.module('myApp', []);
var name = "<?php echo $_POST['name']; ?>";
//name="V Kohli";
var api = "http://localhost:3000/api/ipl/batsman/";
var apid = api.concat(name);

document.getElementById("id").innerHTML = name+" Batting Stats";
app.controller('myCtrl', function($scope, $http) {
  $http.get(apid).then(function (response) {
      $scope.myData = response.data.data;
  });
});
</script>

</body>
</html>
