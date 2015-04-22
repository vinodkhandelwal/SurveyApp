app.controller('pageController', ['$scope', '$location', '$routeParams', '$http', '$localStorage', 'userService', function($scope, $location, $routeParams, $http, $localStorage, userService) {

    $scope.pageId = $routeParams.pageId || 1;
    
    $scope.nextPage = function() {
        $scope.pageId = (++$scope.pageId % 6) || 1;
        $location.path("/page/" + $scope.pageId);

        if($scope.pageId == 5) {
        	$scope.saveSurvey();
        }
    };

    $scope.saveUser = function(){
    	userService.username = $scope.username;
    	$scope.nextPage();
    };

    $scope.saveSecond = function(){
    	userService.response1 = $scope.response1;
    	$scope.nextPage();
    };

    $scope.saveThird = function(){
    	userService.response2 = $scope.response2;
    	$scope.nextPage();
    };

    $scope.saveFourth = function(){
    	userService.response3 = $scope.response3;
    	$scope.nextPage();
    };

	$scope.pageClass = 'page-' + $scope.pageId;


	$scope.saveSurvey = function() {

		$scope.saved = localStorage.getItem('surveys');
		$scope.surveys = (localStorage.getItem('surveys')!==null) ? JSON.parse($scope.saved) : [ ];
		var allAnsCorrect = false;

		if(userService.response1 == 'A' && userService.response2 == 'B' && userService.response3 == 'C') {
				allAnsCorrect = true;
		}
		

		$scope.surveys.push({
			username: userService.username,
			question1: userService.response1,
			question2: userService.response2,
			question3: userService.response3,
			allanscorrect: allAnsCorrect

		});

		localStorage.setItem('surveys', JSON.stringify($scope.surveys));

	};
	
}]);