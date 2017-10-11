var app = angular.module("myapp",[]);
app.controller("ListController", ['$scope', function($scope) {
	
	
    $scope.delete = function(){
    	const id = $scope.editetIndex;
    	$scope.data.splice(id, 1);
    };

	$scope.popId = null;

	// pop up with short description

	$scope.showPopover = function(id) {
		$scope.popId = id; 
	};

	$scope.hidePopover = function () {
		$scope.popId = null; 
	};

	$scope.onclickRow = function(data, index) {
		$scope.editetIndex = index;
		$scope.editedElement = data;
		$scope.experience = data.experience;
		$scope.shortDescription = data.shortDescription;
		$scope.longDescription = data.longDescription;
	}

	$scope.update = function() {
		const id = $scope.editetIndex;
		$scope.data[id].experience = $scope.experience;
		$scope.data[id].shortDescription = $scope.shortDescription;
		$scope.data[id].longDescription = $scope.longDescription;
	}

	$scope.data = [
		{
			'firstName':'Jan',
			'lastName':'Kowalski',
			'position':'Admin',
			'role':'Admin',
			'experience':5,
			'shortDescription':'description short jan',
			'longDescription':'description long jan',
			'id':'0'
		},
		{
			'firstName':'Adam',
			'lastName':'Nowak',
			'position':'HR',
			'role':'User',
			'experience':2,
			'shortDescription':'description short adam',
			'longDescription':'description long adam',
			'id':'1'
		},
		{
			'firstName':'Kacper',
			'lastName':'Ciesielski',
			'position':'HR',
			'role':'User',
			'experience':53,
			'shortDescription':'description short kacper',
			'longDescription':'description long kacper',
			'id':'2'
		},
		{
			'firstName':'Krzysztof',
			'lastName':'Polak',
			'position':'Developer,',
			'role':'User',
			'experience':34,
			'shortDescription':'description short krzysztof',
			'longDescription':'description long krzysztof',
			'id':'3'
		},
		{
			'firstName':'Magdalena',
			'lastName':'Wilk',
			'position':'Admin',
			'role':'Admin',
			'experience':54,
			'shortDescription':'description short magdalena',
			'longDescription':'description long magdalena',
			'id':'0'
		},
		{
			'firstName':'Liliana',
			'lastName':'Zając',
			'position':'Developer,',
			'role':'User',
			'experience':2,
			'shortDescription':'description short liliana',
			'longDescription':'description long liliana',
			'id':'1'
		},
		{
			'firstName':'Jakub',
			'lastName':'Cybulski',
			'position':'Tester,',
			'role':'User',
			'experience':65,
			'shortDescription':'description short jakub',
			'longDescription':'description long jakub',
			'id':'2'
		},
		{
			'firstName':'Janina',
			'lastName':'Jajko2',
			'position':'Developer,',
			'role':'Admin',
			'experience':23,
			'shortDescription':'description short janina',
			'longDescription':'description long janina',
			'id':'3'
		},
		{
			'firstName':'Michał',
			'lastName':'Urban',
			'position':'Developer,',
			'role':'User',
			'experience':42,
			'shortDescription':'description short michal',
			'longDescription':'description long michal',
			'id':'2'
		},
		{
			'firstName':'Patrycja',
			'lastName':'Piotrowska',
			'position':'Manager,',
			'role':'User',
			'experience':78,
			'shortDescription':'description short patrycja',
			'longDescription':'description long patrycja',
			'id':'3'
		}
	];

}]);