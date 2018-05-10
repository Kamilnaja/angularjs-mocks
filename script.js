var app = angular.module('app', [
    'ngResource',
    'ngMockE2E'
]);

app.component('secondComponent', {
    controller: function ($scope, ServiceWithMethods) {
        $scope.contactsData = ServiceWithMethods.getData;
        $scope.contacts = $scope.contactsData.query();
    },
    template:
        `
        <h2>Second component</h2>
        <div>
            <ul ng-repeat="contact in contacts">
                <li>{{contact.id}} | {{contact.name}} | {{contact.phone}}</li>
            </ul>
        </div>`
})