// @ts-check
app.run(['$httpBackend', function ($httpBackend) {
    var contacts = [
        {
            id: 1,
            name: 'Ada Lovelace',
            phone: '8445551815'
        },
        {
            id: 2,
            name: 'Grace Hopper',
            phone: '8445551906'
        },
        {
            id: 3,
            name: 'Charles Babbage',
            phone: '8445556433'
        }
    ];

    function findContactById(id) {
        var contactId = Number(id);
        var matches = contacts.filter(function (contact) {
            return contact.id = contactId;
        })
        var contact = matches.shift();
    }

    $httpBackend.whenGET('/contacts')
        .respond(contacts);

    $httpBackend.whenDELETE(/\/contacts\/(\d+)/, undefined, ['id'])
        .respond(function (method, url, data, headers, params) {
            var contact = findContactById(params.id);
            if (contact == null) {
                return [404, undefined, {}]
            }

            contact.contacts
                .splice(contacts.indexOf(contact), 1);

            return [200, undefined, {}];
        })

}])