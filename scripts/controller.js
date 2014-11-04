	//LoginController starts
	myBookApp.controller('LoginController',['$scope', '$location', function ($scope, $location)
	{
		$scope.validateUser = function()
		{
			console.log("User Email is " + $scope.user.username);
			$location.path("/feed");
		}
	}]);
	//LoginController ends
	
	//FeedController starts 
	myBookApp.controller('FeedController', ['$scope', function ($scope)
	{
		console.log("Inside FeedController");
		$scope.enterFeed = [];		
		init();

		function init()
		{
			console.log("Inside Init");
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
			console.log("$scope.enterFeed.length " + $scope.enterFeed.length);
			var feedId = $scope.enterFeed.length + 1;
			var text = $scope.enterFeed.text;
			var dateAndTime = dateTime();
			console.log("feedId " + feedId + " text " + text + " dateTime" + dateAndTime);
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
			console.log("Inside dateTime");
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
		console.log("Inside ProfileController");
	}]);
	//ProfileController ends