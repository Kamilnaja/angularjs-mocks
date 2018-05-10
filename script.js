// @ts-check
var app = angular.module('app', [
    'ngResource',
    'ngMockE2E'
]);

app.component('secondComponent', {
    controller: function ($scope, contactService) {

        $scope.deleteItem = function () {
            $scope.contactsData.delete()
                .$promise
                .then(updateContactList)
        }

        function updateContactList() {
            $scope.contacts = $scope.getContacts();
        }

        $scope.loadContactList = function () {
            $scope.contactsData = contactService.getData;
            $scope.contacts = $scope.contactsData.query();
        }

    },
    template:
        `
        <h2>Second component</h2>
        <button ng-click="loadContactList()">Get items </button>
        <div>
            <ul ng-repeat="contact in contacts">
                <li>{{contact.id}} | {{contact.name}} | {{contact.phone}}</li>
            </ul>
        </div>
        <div>
            <button ng-click="deleteItem()">Click to delete something</button>
        </div>
        
        `
})