var myApp = angular.module('myApp', []);
myApp.controller('AppCtrl', ['$scope', '$http', function($scope, $http) {
    console.log("Hello World from controller");


var refresh = function() {
  $http.get('/educationlist').success(function(response) {
    console.log("I got the data I requested");
    $scope.educationlist = response;
    $scope.education = "";
  });
};

refresh();

$scope.addEducation = function() {
  console.log($scope.education);
  $http.post('/educationlist', $scope.education).success(function(response) {
    console.log(response);
    refresh();
  });
};

$scope.remove = function(id) {
  console.log(id);
  $http.delete('educationlist/' + id).success(function(response) {
    refresh();
  });
};

$scope.edit = function(id) {
  console.log(id);
  $http.get('/educationlist/' + id).success(function(response) {
    $scope.education = response;
  });
};

$scope.update = function() {
  console.log($scope.education._id);
  $http.put('/educationlist/' + $scope.education._id, $scope.education).success(function(response) {
    refresh();
  })
};

$scope.deselect = function() {
  $scope.education = "";
}

var refresh = function() {
  $http.get('/skilllist').success(function(response) {
    console.log("I got the data I requested");
    $scope.skilllist = response;
    $scope.skill = "";
  });
};

refresh();

$scope.addSkill = function() {
  console.log($scope.skill);
  $http.post('/skilllist', $scope.skill).success(function(response) {
    console.log(response);
    refresh();
  });
};

$scope.remove = function(id) {
  console.log(id);
  $http.delete('skilllist/' + id).success(function(response) {
    refresh();
  });
};

$scope.edit = function(id) {
  console.log(id);
  $http.get('/skilllist/' + id).success(function(response) {
    $scope.skill = response;
  });
};

$scope.update = function() {
  console.log($scope.skill._id);
  $http.put('/skilllist/' + $scope.skill._id, $scope.skill).success(function(response) {
    refresh();
  })
};

$scope.deselect = function() {
  $scope.skill = "";
}


var refresh = function() {
  $http.get('/projectlist').success(function(response) {
    console.log("I got the data I requested");
    $scope.projectlist = response;
    $scope.project = "";
  });
};

refresh();

$scope.addProject = function() {
  console.log($scope.project);
  $http.post('/projectlist', $scope.project).success(function(response) {
    console.log(response);
    refresh();
  });
};

$scope.remove = function(id) {
  console.log(id);
  $http.delete('projectlist/' + id).success(function(response) {
    refresh();
  });
};

$scope.edit = function(id) {
  console.log(id);
  $http.get('/projectlist/' + id).success(function(response) {
    $scope.project = response;
  });
};

$scope.update = function() {
  console.log($scope.project._id);
  $http.put('/projectlist/' + $scope.project._id, $scope.project).success(function(response) {
    refresh();
  })
};

$scope.deselect = function() {
  $scope.project = "";
}

}]);﻿
