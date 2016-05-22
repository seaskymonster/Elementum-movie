(function() {
    angular.module('movieapp')
        .controller('MovieCollectionController', movieCollectionController);

    function movieCollectionController($scope, CollectionHelperService, ContentHelperService, CreditHelperService) {
        var movieCollection;

        $scope.setMovie = function (id) {
            ContentHelperService.getMovieContentById(id).then(function (movie_content) {
                $scope.currentMovie = movie_content;
                return movie_content;
            }, function (ex) {
                //console.error(ex);
            }).then(function(movie_content){
                CreditHelperService.getMovieCreditById(movie_content.id).then(function (movie_credit) {
                    $scope.currentMovieCredit = movie_credit;
                    $scope.currentMovieCreditProfile = movie_credit.cast[0];
                }, function (ex) {
                    //console.error(ex);
                });
            });
        };

        $scope.setCastProfile = function (cast) {
            if(cast && cast.id){
                $scope.currentMovieCreditProfile = cast;
            }
        };

        $scope.init = function () {
            CollectionHelperService.getMovieCollectionById(528).then(function (collection) {
                console.log('collection',collection);
                $scope.Movies = collection.movies;
                return collection;
            }, function (ex) {
                //console.error(ex);
            }).then(function(collection){
                var initMovieId = collection.movies[0].id;
                ContentHelperService.getMovieContentById(initMovieId).then(function (movie_content) {
                    $scope.currentMovie = movie_content;
                    return movie_content;
                }, function (ex) {
                    //console.error(ex);
                }).then(function(movie_content){
                        CreditHelperService.getMovieCreditById(movie_content.id).then(function (movie_credit) {
                            $scope.currentMovieCredit = movie_credit;
                            $scope.currentMovieCreditProfile = movie_credit.cast[0];
                        }, function (ex) {
                            //console.error(ex);
                        });
                    })
            })
        }


    }
})();