let app = angular.module("MyApp", []);

app.controller("MyCtrl", ($scope, $http) => {
    //this is controller
  $scope.title = "Stay Home Stay Safe";

  console.log("App Loaded");

  //calling api
  $http.get('https://covid19.mathdro.id/api').then(
    (response) => {
      //success
      console.log(response.data);

      $scope.all_data = response.data;
    },
    (error) => {
      //error
      console.log(error);
    }
  );
  $scope.get_c_data = ()=>{
      let country=$scope.c;
      if(country==""){
          $scope.c_data=undefined;
        return;
      }
      $http.get(`${'https://covid19.mathdro.id/api'}/countries/${country}`)
      .then((response)=>{
        console.log(response.data)
        $scope.c_data = response.data;
      }, (erroe)=>{
        console.log(error);
      })
  };
});
