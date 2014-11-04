	//LoginController starts
	myBookApp.controller('LoginController',['$scope', '$location', function ($scope, $location)
	{
		var validUsers = [["pras0586","123456"],["laks0586","123456"],["rvig0586","123456"]];
		
		$scope.validateUser = function()
		{
			if(validateUserName() && validatePassword() && validateUser())
			{
				console.log("Valid User....");
				$location.path("/feed");
			}	
		};
			
			
		function validateUser()
		{
			var validUser = false;
			for(var count = 0; count < validUsers.length; count++)
			{
				if(validUsers[count][0] === $scope.user.username  && validUsers[count][1] === $scope.user.password)
				{
					validUser = true;
					break;
				}
			}
			if(!validUser)
			{
				alert("Your Username or Password is Incorrect");
			}
			return validUser;
		}

		function validatePassword()
		{
			var isValidPassword = true;
			if($scope.user.password.length < 6)
			{
				alert("Password cannot be less than 6 characters.");
				$scope.user.password = "";
				isValidPassword = false;
			}
			return isValidPassword;
		}
		
		function validateUserName()
		{
			var validKeyRegex = /[a-zA-Z0-9]$/, isValidUserName = true;
			if(!(validKeyRegex.test($scope.user.username)))
			{
				alert("Username can only be alphanumeric. Special characters are not allowed...");
				$scope.user.username = "";
				isValidUserName = false;
			}
			return isValidUserName;
		}
			
	}]);
	//LoginController ends
	
	//FeedController starts 
	myBookApp.controller('FeedController', ['$scope', function ($scope)
	{
		$scope.enterFeed = [];		
		init();

		function init()
		{
			$scope.enterFeed = [
								{id: 1, text: 'This is sample Feed 1', date: '04-11-2014 2:50 PM'},
								{id: 2, text: 'This is sample Feed 2', date: '04-11-2014 2:51 PM'},
								{id: 3, text: 'This is sample Feed 3', date: '04-11-2014 2:52 PM'},
								{id: 4, text: 'This is sample Feed 4', date: '04-11-2014 2:53 PM'},
								{id: 5, text: 'This is sample Feed 5', date: '04-11-2014 2:54 PM'}
							    ];
		}
		
		$scope.postData = function()
		{
			var feedId = $scope.enterFeed.length + 1;
			var text = $scope.enterFeed.text;
			var dateAndTime = dateTime();
			newFeed = {id: feedId, text: text, date: dateAndTime};
			$scope.enterFeed.push(newFeed);	
		};
		
		$scope.deleteFeed = function(id)
		{
			console.log("Inside deleteFeed");
			for(var i = 0; i < $scope.enterFeed.length; i++)
			{
				if($scope.enterFeed[i].id === id)
				{
					$scope.enterFeed.splice(i,1);
					break;
				}
			}
		};
		
		function dateTime()
		{
			var date = new Date();
			if(date.getHours() > 12)
			{
				hours = (date.getHours() - 12).toString();
				amOrpm = "PM";
			}
			else
			{
				hours = date.getHours().toString();
				amOrpm = "AM";
			}
			return (date.getDate().toString() + "-" + (date.getMonth() + 1).toString() + "-" 
			+ date.getFullYear().toString() + " " + hours + ":" + date.getMinutes().toString() + " " + amOrpm);
		}
	}]);
	//FeedController ends
	
	//ProfileController starts
	myBookApp.controller('ProfileController',['$scope', function ($scope)
	{
		$scope.saveUserDetails = function()
		{
			if(validateName() && validatePhoneNumber())
			{
				alert("User Details saved successfully");
			}
		};	
		function validatePhoneNumber()
		{
			var isValidPhoneNumber = true;
			if($scope.newUser.phone.length > 10)
			{
				isValidPhoneNumber = false;
				alert("Phone number cannot be more than 10 digits");
			}
			return isValidPhoneNumber;
		}
		
		function validateName()
		{
			var validKeyRegex = /[a-zA-Z]$/, isValidUserName = true;
			if(!(validKeyRegex.test($scope.newUser.name)))
			{
				alert("Username cannot have numbers or Special characaters");
				$scope.newUser.name = "";
				isValidUserName = false;
			}
			return isValidUserName;
		}
	}]);
	//ProfileController ends