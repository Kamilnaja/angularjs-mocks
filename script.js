// @ts-check
var app = angular.module('app', [
    'ngResource',
    'ngMockE2E'
]);

app.component('secondComponent', {
    controller: function ($scope, Contact) {

        $scope.deleteItem = function () {
            $scope.contactsData = Contact;
            $scope.contactsData.remove({ id: 2 })
                .$promise
                .then(updateContactList)
        }

        function updateContactList() {
            $scope.contacts = $scope.getContacts();
        }

        $scope.loadContactList = function () {
            $scope.contactsData = Contact.query();
        }

    },
    template:
        `
        <h2>Second component</h2>
        <button ng-click="loadContactList()">Get items </button>
        <div>
            <ul ng-repeat="contact in contactsData">
                <li>{{contact.id}} | {{contact.name}} | {{contact.phone}}</li>
            </ul>
        </div>
        <div>
            <button ng-click="deleteItem()">Click to delete something</button>
        </div>
        
        `
})