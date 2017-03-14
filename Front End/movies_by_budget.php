<!DOCTYPE html>

<html>
    
        <link rel="stylesheet" type="text/css" href="mystyle.css">

<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.4.8/angular.min.js"></script>
<body>
    
<h3 id="id"></h3>
<div ng-app="myApp" ng-controller="myCtrl"> 



        <table>
            <tr>
                <th>movie_title</th>
                <th>title_year</th>
                <th>director</th>
                <th>actor_1_name</th>
                <th>actor_2_name</th>
                <th>actor_3_name</th>
                <th>imdb_score</th>
                <th>budget</th>
                <th>gross</th>
            </tr>
            <tr ng-repeat="x in myData">
                <td>{{ x.movie_title }}</td>
                <td>{{ x.title_year }}</td>
                <td>{{ x.director_name }}</td>
                <td>{{ x.actor_1_name }}</td>
                <td>{{ x.actor_2_name }}</td>
                <td>{{ x.actor_3_name }}</td>
                <td>{{ x.imdb_score }}</td>
                <td>{{ x.budget }}</td>
                <td>{{ x.gross }}</td>
            </tr>
        </table>
</div>



<script>
var app = angular.module('myApp', []);
var budget_low = "<?php echo $_POST['budget_low']; ?>";
var budget_high = "<?php echo $_POST['budget_high']; ?>";
//name="V Kohli";
var api = "http://localhost:3000/api/movies/budget/";
var apid = api+budget_low+"/"+budget_high;

document.getElementById("id").innerHTML = "Movies with budget in range "+budget_low+"-"+budget_high;
app.controller('myCtrl', function($scope, $http) {
  $http.get(apid).then(function (response) {
      $scope.myData = response.data.data;
  });
});
</script>

</body>
</html>
