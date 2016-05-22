(function(){
    angular.module('movieapp')
        .factory('movieCollectionService', function($resource) {
            var APIkey = '7a8ad9ffa451b66599e130f713b6b53c';
            var baseUrl = 'https://api.themoviedb.org/3';
            return $resource(baseUrl +'/collection/:id' + '?api_key=' + APIkey, {id: '@id'},{
                get:{
                    method: 'GET'
                }
            });
        })
        .factory('movieContentService', function($resource) {
            var APIkey = '7a8ad9ffa451b66599e130f713b6b53c';
            var baseUrl = 'https://api.themoviedb.org/3';
            return $resource(baseUrl +'/movie/:id' + '?api_key=' + APIkey, {id: '@id'},{
                get:{
                    method: 'GET'
                }
            });
        })
        .factory('movieCreditService', function($resource) {
            var APIkey = '7a8ad9ffa451b66599e130f713b6b53c';
            var baseUrl = 'https://api.themoviedb.org/3';
            return $resource(baseUrl +'/movie/:id'+'/credits' + '?api_key=' + APIkey, {id: '@id'},{
                get:{
                    method: 'GET'
                }
            });
    });
})();
