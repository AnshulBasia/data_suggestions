<!DOCTYPE html>
<?php echo $_POST['fav_bowler']; ?>
<html>
    
        <link rel="stylesheet" type="text/css" href="mystyle.css">

<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.4.8/angular.min.js"></script>
<body>
    
<h3 id="id"></h3>
<div ng-app="myApp" ng-controller="myCtrl"> 



<table>
            <tr>
                <th>Match ID</th>
                <th>Bowler</th>
                <th>Runs</th>
                <th>Wickets</th>
               
            </tr>

            <tr ng-repeat="x in myData">
                <td>{{ x.match_id }}</td>
                <td>{{ x.bowler }}</td>
                <td>{{ x.runs }}</td>
                <td>{{ x.wickets}}</td>
                

            </tr>
        </table>
</div>

<script>
var app = angular.module('myApp', []);
var name = "<?php echo $_POST['fav_bowler']; ?>";
//name="V Kohli";
var api = "http://localhost:3000/api/ipl/favbowler/";
var apid = api.concat(name);

document.getElementById("id").innerHTML = "Matches of "+name;
app.controller('myCtrl', function($scope, $http) {
  $http.get(apid).then(function (response) {
      $scope.myData = response.data.data;
  });
});
</script>

</body>
</html>
