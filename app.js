
angular.module('instaCity', ['ngRoute'])
  
  //initializing routes
  .config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'templates/search.html',
        controller: 'MainCtrl'
      });
    $routeProvider
      .when('/about',{
        templateUrl: 'templates/about.html',
      })

    $locationProvider.html5Mode({
      enabled: true,
      requireBase: false
    });
  }])

  .controller('MainCtrl', ['$scope', '$http', function ($scope, $http) {
    $scope.photos = [];

    $scope.searchCity = function () {
      var city = $scope.city.replace(/\s+/, '');
      $scope.currentCity = $scope.city;
      console.log($scope.currentCity);
      var url = 'https://api.instagram.com/v1/tags/' + city + '/media/recent?count=8&client_id=c54ba92f2d0847478489f3f2d58d088b&callback=JSON_CALLBACK';
      var weatherUrl = "https://api.openweathermap.org/data/2.5/forecast?&q="  + city + "&type=accurate&,us&mode=json&callback=JSON_CALLBACK&APPID=8aa25b237192dd69078ca44e1b1e2598";
      $http.jsonp(url)
        .then(function (response) {
          console.log(response.data.data);       
          // console.log($scope.currentCity);
          $scope.city = '';
          $scope.photos = response.data.data;
        });
        $http.jsonp(weatherUrl)
        .then(function (response) {
          //error handling if city  not found or no response
          if (response == undefined || response == null){
            alert("No City Found!");
          }else{
            console.log(response);
            $scope.city = '';
            $scope.weather = response.data;
            console.log($scope.weather);
          };

          //***************************** Today's weather *************************

          //description of current weather
          $scope.main = response.data.list[2].weather[0].description;

          // set icon for current weather id
          $scope.id = response.data.list[2].weather[0].id;
          console.log($scope.id);
            if ($scope.id >= 200 && $scope.id <= 299){
              $scope.icon = "thunderstorm.png";
            }if ($scope.id >= 300 && $scope.id <= 399){
              $scope.icon = "drizzle.png";
            }else if ($scope.id >= 500 && $scope.id <= 599){
              $scope.icon = "rain.png";
            }else if ($scope.id >= 600 && $scope.id <= 699){
              $scope.icon = "snow.png";
            }else if ($scope.id >= 700 && $scope.id <= 799){
              $scope.icon = "atmosphere.png";
            }else{ ($scope.id >= 800 && $scope.id <= 899)
              $scope.icon = "clouds.png";
            };


          //temp for current weather
          $scope.today = response.data.list[2].main.temp;
          console.log($scope.today);

          //conversion of kelvein to farenheight
          $scope.temp = Math.round(($scope.today - 273.15) * 1.8 + 32);

          //finding the date
          $scope.date = response.data.list[2].dt_txt;
          var newDate = $scope.date.split(" ");
          $scope.date = newDate[0];
          console.log(newDate);

          //*****************************  day one's weather *************************

          //description of current weather
          $scope.mainOne = response.data.list[13].weather[0].description;
          console.log($scope.mainOne);

          //set icon for day one's weather id
          $scope.oneId = response.data.list[13].weather[0].id;
          console.log($scope.oneId);
            if ($scope.oneId >= 200 && $scope.oneId <= 299){
              $scope.iconOne = "thunderstorm.png";
            }if ($scope.oneId >= 300 && $scope.oneId <= 399){
              $scope.iconOne = "drizzle.png";
            }else if ($scope.oneId >= 500 && $scope.oneId <= 599){
              $scope.iconOne = "rain.png";
            }else if ($scope.oneId >= 600 && $scope.oneId <= 699){
              $scope.iconOne = "snow.png";
            }else if ($scope.oneId >= 700 && $scope.oneId <= 799){
              $scope.iconOne = "atmosphere.png";
            }else{ ($scope.oneId >= 800 && $scope.oneId <= 899)
              $scope.iconOne = "clouds.png";
            };

          //temp for current weather
          $scope.todayOne = response.data.list[13].main.temp;
          console.log($scope.today);

          //conversion of kelvein to farenheight
          $scope.tempOne = Math.round(($scope.todayOne - 273.15) * 1.8 + 32);

          //finding the date
          $scope.oldDateOne = response.data.list[13].dt_txt;
          console.log($scope.date);
          var newOneDate = $scope.oldDateOne.split(" ");
          $scope.dateOne = newOneDate[0];
          console.log(newDate);

          //***************************** day two's weather *************************

          //description of current weather
          $scope.mainTwo = response.data.list[21].weather[0].description;
          console.log($scope.mainTwo);

          //set icon for day two's weather id
          $scope.idTwo = response.data.list[21].weather[0].id;
          console.log($scope.idTwo);
            if ($scope.idTwo >= 200 && $scope.idTwo <= 299){
              $scope.iconTwo = "thunderstorm.png";
            }if ($scope.idTwo >= 300 && $scope.idTwo <= 399){
              $scope.iconTwo = "drizzle.png";
            }else if ($scope.idTwo >= 500 && $scope.idTwo <= 599){
              $scope.iconTwo = "rain.png";
            }else if ($scope.idTwo >= 600 && $scope.idTwo <= 699){
              $scope.iconTwo = "snow.png";
            }else if ($scope.idTwo >= 700 && $scope.idTwo <= 799){
              $scope.iconTwo = "atmosphere.png";
            }else{ ($scope.idTwo >= 800 && $scope.idTwo <= 899)
              $scope.iconTwo = "clouds.png";
            };


          //temp for current weather
          $scope.todayTwo = response.data.list[21].main.temp;
          console.log($scope.today);

          //conversion of kelvein to farenheight
          $scope.tempTwo = Math.round(($scope.todayTwo - 273.15) * 1.8 + 32);

          //finding the date
          $scope.oldDateTwo = response.data.list[21].dt_txt;
          console.log($scope.date);
          var newDateTwo = $scope.oldDateTwo.split(" ");
          $scope.dateTwo = newDateTwo[0];
          console.log(newDate);

          //***************************** day threes's weather *************************

          //description of current weather
          $scope.mainThree = response.data.list[29].weather[0].description;
          console.log($scope.mainThree);

          //set icon for day three's weather
          $scope.idThree = response.data.list[29].weather[0].id;
          console.log($scope.idThree);
          if ($scope.idThree >= 200 && $scope.idThree <= 299){
              $scope.iconThree = "thunderstorm.png";
            }if ($scope.idThree >= 300 && $scope.idThree <= 399){
              $scope.iconThree = "drizzle.png";
            }else if ($scope.idThree >= 500 && $scope.idThree <= 599){
              $scope.iconThree = "rain.png";
            }else if ($scope.idThree >= 600 && $scope.idThree <= 699){
              $scope.iconThree = "snow.png";
            }else if ($scope.idThree >= 700 && $scope.idThree <= 799){
              $scope.iconThree = "atmosphere.png";
            }else{ ($scope.idThree >= 800 && $scope.idThree<= 899)
              $scope.iconThree = "clouds.png";
            };

          //temp for current weather
          $scope.todayThree = response.data.list[29].main.temp;
          console.log($scope.todayThree);

          //conversion of kelvein to farenheight
          $scope.tempThree = Math.round(($scope.todayThree - 273.15) * 1.8 + 32);

          //finding the date
          $scope.oldDateThree = response.data.list[29].dt_txt;
          console.log($scope.oldDateThree);
          var newDateThree = $scope.oldDateThree.split(" ");
          $scope.dateThree = newDateThree[0];
          console.log(newDate);
          console.log($scope.icon);
          console.log($scope.main);  
          // console.log($scope.weather);
        });


    }

    $scope.savePhoto = function (photo) {
      // check if localStorage.photos doesn't exist yet
      if (!localStorage.photos) {
        localStorage.photos = JSON.stringify([]);
      }

      // get existing favorites from localStorage.photos
      var allPhotos = JSON.parse(localStorage.photos);

      // push new favrotie into array of all photos
      allPhotos.push(photo);

      // reset localStorage.photos to updated array of all photos
      localStorage.photos = JSON.stringify(allPhotos);
    };
  }])

  .controller('FavoritesCtrl', ['$scope', function ($scope) {
    if (!localStorage.photos) {
      $scope.favorites = [];
    } else {
      $scope.favorites = JSON.parse(localStorage.photos);
    }
  }]);






