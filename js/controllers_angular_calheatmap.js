var simpleApp = angular.module('HeatmapNgApp', ['calHeatmap']);

simpleApp.controller('HeatmapNgCtrl', function($scope) {
	
    $scope.search = {};
    $scope.search.heatmap = {};
   
    $scope.search.heatmap.config = {
        domain: "month", //hour|day|week|month|year
        range: 4, 
        domainGutter: 10,
        previousSelector: "#cal-heatmap-previous",
        nextSelector: "#cal-heatmap-next"
        //start: new Date(2014, 7, 2)
    };

    $scope.search.heatmap.config.start = new Date(2014, 7, 2)

    //var date1secs = new Date(2014,7,1).getTime() / 1000;
    var date2secs = new Date(2014,7,5).getTime() / 1000;
    var date3secs = new Date(2014,7,7).getTime() / 1000;
    var date4secs = new Date(2014,7,9).getTime() / 1000;
    var date5secs = new Date(2014,7,20).getTime() / 1000;
    var date6secs = new Date(2014,10,10).getTime() / 1000;
//console.log("date1secs:            " + date1secs);
    //console.log("7/1/15 from endpoint: " + 1424822400000);
    $scope.search.heatmap.config.data = {};
    //$scope.heatmap.config.data[date1secs] = 5;
    $scope.search.heatmap.config.data[date2secs] = 1;
    $scope.search.heatmap.config.data[date3secs] = 11;
    $scope.search.heatmap.config.data[date4secs] = 2;
    $scope.search.heatmap.config.data[date5secs] = 3;
    $scope.search.heatmap.config.data[date6secs] = 3;
    
        
    $scope.heatmapRefresh = function(){
        
        //TODO directive needs to watch bound value change
        //http://stackoverflow.com/questions/18667388/change-attribute-from-within-directive
        
        cal-heatmap.init({ domain : $scope.search.heatmap.config.domain})
        
    }
        	
});