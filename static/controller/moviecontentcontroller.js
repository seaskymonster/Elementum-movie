(function() {
    angular.module('movieapp')
        .controller('MovieContentController', movieContentController);

    function movieContentController($scope, CollectionHelperService) {
        console.log('here in movieContentController');
        $scope.currentMovie = $scope.$parent.currentMovie
        CollectionHelperService.getMovieCollectionById($scope.currentMovie).then(function(movie_content) {
            console.log('movie', movie_content);
        }, function(ex){
            //console.error(ex);
        });
    }
})();