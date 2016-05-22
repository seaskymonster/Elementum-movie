(function() {
    angular.module('movieapp')
        .directive('movieCredit', MovieCreditDirective);

    function MovieCreditDirective() {
        return {
            restrict: 'E',
            controller: 'MovieCollectionController',
            templateUrl: '../partials/moviecredit.html',
            link: function(scope, element, attr) {
            }
        };
    }
})();