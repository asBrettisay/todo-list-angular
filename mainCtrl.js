angular.module('myApp')
.controller('mainCtrl', function($scope) {
  $scope.todos = [
    {
      name: 'Wash Dishes',
      done: false
    },
    {
      name: 'Do Laundry',
      done: false
    },
    {
      name: 'Walk Dog',
      done: true
    }
  ]

  $scope.groceries = [
    {
      name: 'Lettuce',
      done: false
    },
    {
      name: 'Turkey',
      done: false
    },
    {
      name: 'Tomato',
      done: false
    }
  ]


  $scope.reminders = [
    {
      name: 'Buy Gift',
      done: false
    },
    {
      name: 'Call Jeff',
      done: false
    },
    {
      name: 'RSVP to Party',
      done: false
    }
  ]


  $scope.ideas = [
    {
      name: 'Use directives',
      done: true
    },
    {
      name: 'Use Apis',
      done: false
    }
  ]
})