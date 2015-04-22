app.controller('surveyController', ['$scope', '$localStorage', function($scope, $localStorage) {

	$scope.question1CorrrectAns = 'A';
	$scope.question2CorrrectAns = 'B';
	$scope.question3CorrrectAns = 'C';

    $scope.options = [
    {name: 'Show All'},
    {name: 'Show Correct'},
    {name: 'Show Incorrect'}
      
    ];

	$scope.cusFilter = {allanscorrect:true};

	$scope.changeOption = function(){
    	if($scope.showCorrect.name == "Show Correct"){
    		$scope.cusFilter = {allanscorrect:true};
    	}
    	else if($scope.showCorrect.name == "Show Incorrect"){
    		$scope.cusFilter = {allanscorrect:false};
    	}
    	else if($scope.showCorrect.name == "Show All"){
    		$scope.cusFilter = {allanscorrect:''};
    	}
    };

	$scope.saved = localStorage.getItem('surveys');
	$scope.surveys = (localStorage.getItem('surveys')!==null) ? JSON.parse($scope.saved) : [ ];
}]);