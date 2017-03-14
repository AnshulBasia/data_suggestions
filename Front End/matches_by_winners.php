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
                <th>season</th>
                <th>team1</th>
                <th>team2</th>
                <th>win_by_runs</th>
                <th>win_by_wickets</th>
                <th>player_of_match</th>
                <th>venue</th>
            </tr>

            <tr ng-repeat="x in myData">
                <td>{{ x.id }}</td>
                <td>{{ x.season }}</td>
                <td>{{ x.team1 }}</td>
                <td>{{ x.team2 }}</td>
                <td>{{ x.win_by_runs }}</td>
                <td>{{ x.win_by_wickets }}</td>
                <td>{{ x.player_of_match }}</td>
                <td>{{ x.venue }}</td>

            </tr>
        </table>
    </div>
    
    <script>
        var app = angular.module('myApp', []);
        var winner = "<?php echo $_POST['winner']; ?>";
        //name="V Kohli";/api/ipl/teams/matches/:name
        var api = "http://localhost:3000/api/ipl/winner/matches/";
        var apid = api.concat(winner);

        document.getElementById("id").innerHTML = "All matches with winner " + winner;
        app.controller('myCtrl', function($scope, $http) {
            $http.get(apid).then(function(response) {
                $scope.myData = response.data.data;
            });
        });
    </script>

</body>

</html>