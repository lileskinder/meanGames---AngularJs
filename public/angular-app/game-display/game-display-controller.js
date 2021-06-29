angular.module("meanGames").controller("GameController", GameController);


function GameController(GamesDataFactory, $routeParams) {

    const vm = this;
    const gameId = $routeParams.id;

    function _getStarsArray(rating) {
        return new Array(rating).fill(1);
    }

    GamesDataFactory.getOne(gameId).then(function(response) {
        vm.game = response;
        vm.starsArray = _getStarsArray(vm.game.rate);

    })

}