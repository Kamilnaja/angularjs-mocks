app.service('mainService', function ($http) {
    var service = {
        get data() {
            return $http.get('/details')
        }
    }
    return service;
})

app.service('Contact', function ($resource) {
    return $resource(
        '/contacts'
    )
})