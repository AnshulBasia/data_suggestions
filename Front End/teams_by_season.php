<!DOCTYPE html>


<html>
<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.4.8/angular.min.js"></script>

<head>
    <title>Season stats</title>
    <link rel="stylesheet" type="text/css" href="mystyle.css">

    
</head>

<body>
    
    <h3 id="id"></h3>
    <div ng-app="myApp" ng-controller="myCtrl">
       
        <table>
            <tr>
                <th>name</th>
                <th>matches</th>
                <th>won</th>
                <th>lost</th>
                <th>draw</th>
            </tr>

            <tr ng-repeat="x in myData">
                <td>{{ x.name }}</td>
                <td>{{ x.matches }}</td>
                <td>{{ x.won }}</td>
                <td>{{ x.lost }}</td>
                <td>{{ x.draw }}</td>
            </tr>
        </table>
    </div>

    <script>
        var app = angular.module('myApp', []);
        var api = "http://localhost:3000/api/ipl/season/";
        var season = "<?php echo $_POST['season']; ?>";
        var apid = api.concat(season);
        
        document.getElementById("id").innerHTML = "Teams stats for season "+season;
        app.controller('myCtrl', function($scope, $http) {
            $http.get(apid).then(function(response) {
                $scope.myData = response.data.data;
            });
        });
    </script>

</body>

</html>