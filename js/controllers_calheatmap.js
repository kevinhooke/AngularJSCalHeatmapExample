var simpleApp = angular.module('HeatmapApp', []);

simpleApp.controller('HeatmapCtrl', function($scope) {
	
    var date1secs = new Date(2014,7,1).getTime() / 1000;
    var date2secs = new Date(2014,7,5).getTime() / 1000;
    var date3secs = new Date(2014,7,7).getTime() / 1000;
    var date4secs = new Date(2014,7,9).getTime() / 1000;
    var date5secs = new Date(2014,7,20).getTime() / 1000;
    var date6secs = new Date(2014,10,10).getTime() / 1000;
    var data = {};
    data[date1secs] = 5;
    data[date2secs] = 1;
    data[date3secs] = 11;
    data[date4secs] = 2;
    data[date5secs] = 3;
    data[date6secs] = 3;
    
    
    //map2
    var cal2 = new CalHeatMap();
    cal2.init(
    {
        start : new Date(2014,7,1),
        cellSize : 25,
        itemSelector: "#cal-heatmap",
        domain: "month", //hour|day|week|month|year
        subDomain : "day",
        subDomainTextFormat : "%d",
        range: 5, 
        domainGutter: 10,
        previousSelector: "#cal-heatmap-previous",
        nextSelector: "#cal-heatmap-next", 
        data: data     
    });
    
    $scope.heatmapRefresh = function(){
        cal2 = new CalHeatMap();
        cal2.init({ domain : $scope.search.heatmap.config.domain})
    }
        	
});