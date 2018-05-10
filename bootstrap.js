app.run(['$httpBackend', function ($httpBackend) {
    contacts = [
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

    $httpBackend.whenGET('/contacts')
        .respond(contacts);
}])