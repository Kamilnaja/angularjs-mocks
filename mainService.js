app.factory("Contact", ["$resource", function ($resource) {
    return $resource(
        "/contacts/:id",
        {
            id: "@id"
        },
        {
            "update": {
                method: "PUT"
            }
        }
    );
}]);