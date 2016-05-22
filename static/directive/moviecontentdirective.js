(function() {
    angular.module('movieapp')
        .directive('movieContent', MovieContentDirective);

    function MovieContentDirective() {
        //console.log('here in MovieContentDirective');
        return {
            restrict: 'E',
            controller: 'MovieCollectionController',
            templateUrl: '../partials/moviecontent.html',
            link: function(scope, element, attr) {
            }
        };
    }
})();