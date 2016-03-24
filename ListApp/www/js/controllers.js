angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {})

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

/*.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})*/

.controller('ChatDetailCtrl', function ($scope, $stateParams, Chats) {
  //  <!-- $scope.message = "Hello!";-->
  $scope.chat = Chats.get($stateParams.chatId);

  $scope.items = [{'name': 'My dream item', checked: false}];

  $scope.addListItem = function (item) {
    $scope.items.push({'name': item, checked: false});
    //clear quote
    this.newItem = null;
    //newItem = ' ';

  }
  $scope.removeSelected = function () {
    $scope.items = $scope.items.filter(function (item) {
      return !item.checked;
    })
  }
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };


});
