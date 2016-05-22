(function() {
    angular.module('movieapp')
        .directive('movieCollection', MovieCollectionDirective);

    function MovieCollectionDirective() {
        console.log('here in moviecollectiondirecitve');
        return {
            restrict: 'E',
            controller: 'MovieCollectionController',
            templateUrl: '../partials/moviecollection.html',
            link: function(scope, element, attr) {
            }
        };
    }
})();