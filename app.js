class GameEngine {
    constructor() {
        if (!GameEngine._instance) {
            GameEngine._instance = this;
            this.roles = [];
            this.players = [];
            this.buildings = [];
            this.currentPlayerIndex = 3;
            this.crownPlayerIndex = 3;
            this.firstDoneBuildPlayerIndex = 0;
            this.isAllRoledSelected = false;
            this.currentPlayer = null;
            this.iniGame();
        }
        return GameEngine._instance;
    }

    iniGame() {
        console.log('----------init game------------');
        this.initRoles();
        this.initBuildings();
        this.initActions();
        this.updateRolesView();
        console.log('OK');
    }

    initActions() {
        // if (document.querySelector('.js-add-player')) {
        //     document.querySelector('.js-add-player').addEventListener("click", this.joinToGame);
        // }
    }

    initRoles() {
        console.log('----------init roles------------');
        this.roles.push(new Role('Ассасин', 1, false, ''));
        this.roles.push(new Role('Вор', 2, false, ''));
        this.roles.push(new Role('Чародей', 3, false, ''));
        this.roles.push(new Role('Король', 4, false, ''));
        this.roles.push(new Role('Епископ', 5, false, ''));
        this.roles.push(new Role('Купец', 6, false, ''));
        this.roles.push(new Role('Зодчий', 7, false, ''));
        this.roles.push(new Role('Кондотьер', 8, false, ''));
        console.log('OK');
    }

    initBuildings() {
        console.log('----------init Buildings------------');

        console.log('OK');
    }
    
    initGameActions() {
        console.log('----------init roles------------');
        this.roles.push(new GameActions('Выбор класса', 1));
        this.roles.push(new GameActions('Збор ресурсов', 2));
        this.roles.push(new GameActions('Строительство', 3));
        this.roles.push(new GameActions('Особое свойство персонажа', 4));
        console.log('OK');
    }

    joinToGame() {
        //var gameEngine = new GameEngine();
        console.log('----------joinToGame------------');
        if (document.querySelector('#pname') && this.players.length < 8) {
            let newPlayer = new Player(document.querySelector('#pname').value, 2, [], [], null, false);
            this.players.push(newPlayer);
            this.updatePlayerView();
        }
    }

    leftGame() {

    }

    starGame() {
        console.log('----------starGame------------');
        this.selectRolesStep();
    }

    selectRolesStep() {
        let player = this.getNextPlayerInOneTurn();
        if (player) {
            this.selectedPlayer = player;
            console.log(player.playerName);
            this.updateCurrentPlayerInfo();
        } else {
            this.isAllRoledSelected = true;
        }

    }

    selectRole(role) {
        if (this.players.length === 2) {
            let selectedRole = this.roles[role.dataset.id];
            selectedRole.isSelected = true;
            this.updateRolesView();
            this.currentPlayer.role = selectedRole;
            console.log('----------starGame------------ ' + selectedRole.roleName);
        } else if (this.players.length === 3) {

        } else if (this.players.length > 3) {

        } else if (this.players.length < 2) {
            console.log("мало гравців");
        }

    }

    resetAllRolesState() {
        this.roles.forEach((element, index) => {
            element.isSelected = false;
        });
    }

    getNextPlayerInOneTurn() {
        let nextPlayer = ++this.currentPlayerIndex
        if (nextPlayer >= this.players.length && this.crownPlayerIndex !== 0) {
            nextPlayer = 0;
        } else if ((nextPlayer >= this.players.length && this.crownPlayerIndex === 0) ||
            nextPlayer === this.crownPlayerIndex) {
            return null;
        }
        this.currentPlayerIndex = nextPlayer;
        return this.players[nextPlayer];
    }

    //--------game functionality -------------
    getBuildingsFromDeck(count) { console.log('1') }
    getCrown() { console.log('2') }
    getCoinForEachYellowBuilding() { console.log('3') }
    getCoinForEachRedBuilding() { console.log('4') }
    getCoinForEachGreenBuilding() { console.log('5') }
    getCoinForEachBlueBuilding() { console.log('6') }
    getCoin(count) { console.log('7') }
    getBonusCoin() { console.log('8') }
    spendCoin(count) { console.log('9') }
    getCard() { console.log('10') }
    discardACard() { console.log('11') }
    buildOneBuilding() { console.log('12') }
    destroyBuilding() { console.log('13') }
    checkIfPossibleToDestroyBuilding() { console.log('14') }
    killPlayer() { console.log('15') }
    stealMoney() { console.log('16') }
    exchangeHandWithPlayer() { console.log('17') }
    changeSomeCardFromHand() { console.log('18') }

    //--------engine functionality -------------
    updatePlayerView() {
        console.log('----------updatePlayerView------------');
        document.querySelector('.js-players-list').innerHTML = "";
        this.players.forEach((element) => {
            var player = document.createElement("div");
            player.innerHTML = '<div onclick="game.leftGame()">' + element.playerName + '</div>';
            document.querySelector('.js-players-list').appendChild(player);
        });
    }

    updateRolesView() {
        console.log('----------updateRolesView------------');
        document.querySelector('.js-roles-list').innerHTML = "";
        this.roles.forEach((element, index) => {
            var role = document.createElement("div");
            if (!element.isSelected) {
                role.innerHTML = '<div onclick="game.selectRole(this)" data-id="' + index + '">' + element.roleName + '</div>';
            } else {
                role.innerHTML = '<div data-id="' + index + '">' + element.roleName + '</div>';
            }
            document.querySelector('.js-roles-list').appendChild(role);
        });
    }

    updateCurrentPlayerInfo() {
        document.querySelector('.js-current-player').innerHTML = this.currentPlayer ? "Ход игрока" + this.currentPlayer.playerName : "";
        document.querySelector('.js-current-player-action').innerHTML = "test action";
    }

    static getInstance() {
        return this._instance;
    }
}

class Role {
    constructor(roleName, sequenceOfMoves, isHaveBuildingDestroyImune, imageSrc, isSelected) {
        this.sequenceOfMoves = sequenceOfMoves;
        this.roleName = roleName;
        this.isHaveBuildingDestroyImune = isHaveBuildingDestroyImune;
        this.imageSrc = imageSrc;
        this.isSelected = isSelected;
    }
}

class Player {
    constructor(playerName, coins, buildingsInTown, buildingsInHand, role, isDead, imageSrc) {
        this.playerName = playerName;
        this.coins = coins;
        this.buildingsInTown = buildingsInTown;
        this.buildingsInHand = buildingsInHand;
        this.role = role;
        this.isDead = isDead;
    }
}

class Building {
    constructor(buildName, price, color, sequenceOfMoves, isHaveBuildingDestroyImune, imageSrc) {
        this.buildName = buildName;
        this.price = price;
        this.color = color;
        this.sequenceOfMoves = sequenceOfMoves;
        this.roleName = roleName;
        this.isHaveBuildingDestroyImune = isHaveBuildingDestroyImune;
        this.imageSrc = imageSrc;
    }
}

class GameActions {
    constructor(actionName, index) {
        this.actionName = actionName;
        this.index = index;
    }
}

const game = new GameEngine();