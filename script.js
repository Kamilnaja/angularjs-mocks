var app = angular.module('app', [
    'ngResource',
    'ngMockE2E'
]);

app.component('firstComponent', {
    controller: function ($scope, Contact) {
        $scope.contacts = Contact.query();
    },

    template: `<div>{{contacts}}</div>`
})

app.component('main', {
    controller: function ($scope, mainService) {

    },
    template: `<div>{{hello}}</div>`
})