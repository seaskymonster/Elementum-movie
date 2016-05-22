
(function(){
    angular.module('movieapp')
        .factory('CollectionHelperService', CollectionHelperService)
        .factory('ContentHelperService', ContentHelperService)
        .factory('CreditHelperService', CreditHelperService);

    function CollectionHelperService(movieCollectionService, $q){
        return {
            getMovieCollectionById : getMovieCollectionById
        };
        function getMovieCollectionById(id){
            return movieCollectionService.get({id: id}).$promise
                .then(function(response){
                    //console.log('response', response);
                    if(response.error){
                        return $q.reject(response.error);
                    }
                    if(response && response.id) {
                        var collection = {
                            id: response.id,
                            title: response.title,
                            overview: response.overview,
                            movies: []
                        };
                        if (response.parts) {
                            _.each(response.parts, function (item) {
                                var movie = {
                                    id: item.id,
                                    title: item.title,
                                    overview: response.overview,
                                    url: 'http://image.tmdb.org/t/p/w342/' + item.poster_path
                                };
                                collection.movies.push(movie);
                            })
                        }
                    }
                    return $q.resolve(collection);
                });
        }

    }

    function ContentHelperService(movieContentService, $q){
        return {
            getMovieContentById : getMovieContentById
        };
        function getMovieContentById(id){
            return movieContentService.get({id: id}).$promise
                .then(function(response){
                    //console.log('movie_response', response);
                    if(response.error){
                        return $q.reject(response.error);
                    }
                    if(response && response.id) {
                        var movie = {
                            id: response.id,
                            title: response.title,
                            overview: response.overview,
                            url: 'http://image.tmdb.org/t/p/w342/' + response.poster_path

                        };
                    }
                    return $q.resolve(movie);
                });
        }
    }

    function CreditHelperService(movieCreditService, $q){
        return {
            getMovieCreditById : getMovieCreditById
        };
        function getMovieCreditById(id){
            return movieCreditService.get({id: id}).$promise
                .then(function(response){
                    //console.log('getMovieCreditById',response);
                    if(response.error){
                        return $q.reject(response.error);
                    }
                    if(response && response.id) {
                        var credits = {};
                        var director = _.filter(response.crew, function(item) {
                            return item.job === 'Director';
                        });
                        var writers = _.filter(response.crew, function(item) {
                            return item.department === 'Writing';
                        });

                        var cast = _.each(response.cast, function(item) {
                            item.profile_path ='http://image.tmdb.org/t/p/w342/' +  item.profile_path;

                        });

                        credits=  {
                            id: response.id,
                            cast: cast,
                            director: director[0].name,
                            writers: writers
                        };
                    }
                    //console.log('credits', credits);
                    return $q.resolve(credits);
                });
        }
    }
})();

