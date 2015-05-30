var simpleApp = angular.module('HeatmapApp', ['calHeatmap']);

simpleApp.controller('HeatmapCtrl', function($scope) {
	
    $scope.heatmap = {};
    $scope.heatmap.config = {
        domain: "month",
        start: new Date(2015, 4, 1)
    };

    var date1secs = new Date(2015,4,1).getTime() / 1000;
    var date2secs = new Date(2015,4,5).getTime() / 1000;
    var date3secs = new Date(2015,4,7).getTime() / 1000;
    var date4secs = new Date(2015,4,9).getTime() / 1000;
    var date5secs = new Date(2015,4,20).getTime() / 1000;

    $scope.heatmap.config.data = {};
    $scope.heatmap.config.data[date1secs] = 5;
    $scope.heatmap.config.data[date2secs] = 1;
    $scope.heatmap.config.data[date3secs] = 9;
    $scope.heatmap.config.data[date4secs] = 2;
    $scope.heatmap.config.data[date5secs] = 3;

        	
});