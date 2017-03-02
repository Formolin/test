/**
 * Created by SONY on 2017/2/16.
 */
(function (angular) {
    angular.module('myApp',[]).controller('headerController',['$scope', function ($scope) {
        $scope.flag = false;
        $scope.bgw = function () {
            $scope.flag= true;
        };
        $scope.bgb = function () {
            $scope.flag= false;
        };


        $scope.myHide = function () {
            $scope.myWar = true;
            $scope.flag = true;
        };


    }]);
})(angular);