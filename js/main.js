var myApp = angular.module('myApp',[]);

myApp.controller('TimeSlider', ['$scope', function($scope) {
  $scope.start = "1 week ago";
  $scope.end = "Today";
  $scope.photos = new Array(20);
  $scope.activePhoto = 10;
  for(var i=0; i<$scope.photos.length; i++){
  	$scope.photos[i]="images/photo" + i + ".jpg";
  }
  $scope.checkPhoto = function(index){
  	return index ==$scope.activePhoto;
  }
}]);
