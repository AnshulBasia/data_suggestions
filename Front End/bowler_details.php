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
                <th>wickets</th>
                <th>avg</th>
                <th>econ</th>
                <th>runs</th>
                <th>balls</th>
            </tr>

            <tr ng-repeat="x in myData">
                <td>{{ x.name }}</td>
                <td>{{ x.matches_played }}</td>
                <td>{{ x.wickets }}</td>
                <td>{{ x.avg }}</td>
                <td>{{ x.econ}}</td>
                <td>{{ x.runs }}</td>
                <td>{{ x.balls }}</td>

            </tr>
        </table>
    </div>

    <script>
        var app = angular.module('myApp', []);
        var name = "<?php echo $_POST['name']; ?>";
        //name="V Kohli";
        var api = "http://localhost:3000/api/ipl/bowler/";
        var apid = api.concat(name);

        document.getElementById("id").innerHTML = name + " Bowling Stats";
        app.controller('myCtrl', function($scope, $http) {
            $http.get(apid).then(function(response) {
                $scope.myData = response.data.data;
            });
        });
    </script>

</body>

</html>