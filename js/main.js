var myApp = angular.module('myApp',[]);

myApp.controller('TimeSlider', ['$scope', function($scope) {
  $scope.start = "1 week ago";
  $scope.end = "Today";
  $scope.photos = new Array(11);
  $scope.weight = new Array(11);
  $scope.comments = new Array(11);
  $scope.day = new Array(11);
  $scope.comment_template = [
	"Wow looks nice bro!",
	"How ???",
	"NICE!! Take me to the gym.",
	"What a progress ..!",
	"My rival!!. Anyway, Good job man",
	"WOOOOOW",
  ]
  $scope.answer_template = [
	"Tnx",
	"Yeah, it is mee hihi",
	"Thank you bro",
	":)",
	"yay!",
  ]
  $scope.angels = [
  	{name: "Darkhan", pic: "profile-d.jpg"},
  	{name: "Macho", pic: "profile-m.jpg"}
 ]
  $scope.activePhoto = 0;
  for(var i=0; i<$scope.photos.length; i++) {
  	$scope.photos[i]="images/d" + i + ".JPG";
	$scope.weight[i] = 70 - i;
	$scope.day[i] = 1 + i;
  }
  $scope.checkPhoto = function(index) {
  	return index == $scope.activePhoto;
  }
  $scope.get_day = function(index) {
	return $scope.day[index];
  }
  $scope.get_weight = function(index) {
	return $scope.weight[index];
  }
  $scope.get_comment_number = function() {
	return Math.floor(Math.random() * $scope.comment_template.length - 1);
  }
  $scope.get_answer_number = function() {
	return Math.floor(Math.random() * $scope.answer_template.length - 1);
  }
  $scope.angel_number = function() {
	return Math.floor(Math.random() * 1);
  }
  $scope.get_comment_count = function() {
	return Math.floor(Math.random() * 5);
  }
}]);
