angular.module('myApp')
.directive('todoList', function() {
  return {
    templateUrl: 'todoList.html',
    controller: function($scope) {
      $scope.removeItem = function(item) {
        $scope.list.splice($scope.list.indexOf(item), 1);
      }

      $scope.addItem = function(item) {
        $scope.list.push({
          name: item,
          done: false
        })
        
        $scope.newItem = '';
      }
    },
    scope: {
      list: '=',
      title: '@'
    }
  }
})