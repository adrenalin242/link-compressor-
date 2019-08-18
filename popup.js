var app = angular.module("linkshort", []);
app.controller("mainCtrl",function($scope,$http) {
	$scope.input="";
    $scope.login="o_66mrd7lvf2";
    $scope.api_key="R_ff8d0dee180f40f5a6b1bc57102bc284";
    $scope.result;
    $scope.short=function(){
    	$http({ url: "http://api.bitly.com/v3/shorten?login="+$scope.login+"&apiKey="+$scope.api_key+"&longUrl="+$scope.input})
    	.then(
            function(data) {
                $scope.result = data;
                console.log($scope.result.data.data);
				document.getElementById("real").value=$scope.result.data.data.url;
            }
        )
    };
});