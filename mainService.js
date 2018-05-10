// @ts-check
app.service('contactService', function ($resource) {
    var service = {

        get getData() {
            return $resource('/contacts')
        },

        delete() {
            return Contact.remove({ id: 3 });

        },


    }
    return service
})
