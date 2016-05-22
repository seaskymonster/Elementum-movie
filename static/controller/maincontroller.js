(function() {
    angular.module('movieapp')
        .controller('MainController', MainController);

    function MainController($scope, movieCollectionService) {
        console.log('here in MainController');
        var movieCollection;
        //
        movieCollectionService.get({id:528}).$promise.then(function(collection) {
            console.log('collection', collection);
            $scope.Movies = collection.parts;
        }, function(ex){
            //console.error(ex);
        });
    }
})();