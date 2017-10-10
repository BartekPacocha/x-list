var app = angular.module("myapp",[]);
app.controller("ListController", ['$scope', function($scope) {
	$scope.data = [
		{
			'firstName':'Jan',
			'lastName':'Kowalski',
			'position':'Admin',
			'role':'Admin',
			'experience':'5',
			'shortDescription':'Jan Kowalski short',
			'longDescription':'Jan Kowalski long',
			'id':'1'
		},
		{
			'firstName':'Adam',
			'lastName':'Nowak',
			'position':'HR',
			'role':'User',
			'experience':'2',
			'shortDescription':'Adam Nowak short',
			'longDescription':'Adam Nowak long',
			'id':'2'
		},
		{
			'firstName':'Janina',
			'lastName':'Jajko',
			'position':'HR',
			'role':'User',
			'experience':'3',
			'shortDescription':'Janina Jajko short',
			'longDescription':'Janina Jajko long',
			'id':'3'
		}
	];

	$scope.editingData = {};

	for(var i = 0, lenght = $scope.data.lenght; i < lenght; i++) {
		$scope.editingData[$scope.data[i].id] = false;
	}

	$scope.modify = function(data) {
		$scope.editingData[data.id] = true;
	}

	$scope.update = function(data){
        $scope.editingData[data.id] = false;
    };

    $scope.delete = function(x){
    	$scope.data.splice(x, 1);
    };

    $scope.add = function(){
    	var newElement = {
    		'firstName':$scope.addNew_firstName,
    		'lastName':$scope.addNew_lastName,
    		'position':$scope.addNew_position,
    		'role':$scope.addNew_role,
    		'experience':$scope.addNew_experience,
    		'shortDescription':$scope.addNew_shortDescription,
    		'longDescription':$scope.addNew_longDescription

    	};
    	$scope.data.push(newElement);
    	$scope.addNew_firstName = '';
    	$scope.addNew_lastName = '';
    	$scope.addNew_position = '';
    	$scope.addNew_role = '';
    	$scope.addNew_experience = '';
    	$scope.addNew_shortDescription = '';
    	$scope.addNew_longDescription = '';
    }

	$scope.popId = null;

	// pop up with short description

	$scope.showPopover = function(id) {
		$scope.popId = id; 
	};

	$scope.hidePopover = function () {
		$scope.popId = null; 
	};

	$scope.fun = function(data) {
		alert(data.lastName);
	}

}]);