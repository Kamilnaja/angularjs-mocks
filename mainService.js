app.service('ServiceWithMethods', function ($resource) {
    var service = {
        get getData() {
            return $resource('/contacts')
        }
    }
    return service
})


