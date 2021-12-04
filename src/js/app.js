class GameEngine {
    constructor() {
        if (!GameEngine._instance) {
            GameEngine._instance = this;
            this.roles = [];
            this.selectedHideRoles = [];
            this.selectedUnHideRoles = [];
            this.players = [];
            this.buildings = [];
            this.currentPlayerIndex = null;
            this.crownPlayerIndex = null;
            this.firstDoneBuildPlayerIndex = null;
            this.isAllRoledSelected = false;
            this.currentPlayer = null;
            this.drowHideCard = 0;
            this.drowUnHideCard = 0;
            this.phases = [];
            this.currentPhase = 0;
            this.selectedCardForDetailsShow = null;
            this.iniGame();
        }
        return GameEngine._instance;
    }

    resetAllMeta() {
        this.selectedHideRoles = [];
        this.selectedUnHideRoles = [];
        this.currentPlayerIndex = null;
        this.crownPlayerIndex = null;
        this.firstDoneBuildPlayerIndex = null;
        this.isAllRoledSelected = false;
        this.currentPlayer = null;
        this.drowHideCard = 0;
        this.drowUnHideCard = 0;
        this.roles.forEach((role, index) => {
            role.isSelected = false;
        });
        this.players.forEach((player, index) => {
            player.role = [];
        });
    }

    iniGame() {
        this.initRoles();
        this.initBuildings();
        this.initActions();
        this.initGameActions();
        //this.updateRolesView();
        console.log('iniGame - OK');
    }

    initActions() {
        // if (document.querySelector('.js-add-player')) {
        //     document.querySelector('.js-add-player').addEventListener("click", this.joinToGame);
        // }
    }

    initRoles() {
        this.roles.push(new Role('Ассасин', 1, false, 'src/img/roles/role_1.jpg'));
        this.roles.push(new Role('Вор', 2, false, 'src/img/roles/role_2.jpg'));
        this.roles.push(new Role('Чародей', 3, false, 'src/img/roles/role_3.jpg'));
        this.roles.push(new Role('Король', 4, false, 'src/img/roles/role_4.jpg'));
        this.roles.push(new Role('Епископ', 5, false, 'src/img/roles/role_5.jpg'));
        this.roles.push(new Role('Купец', 6, false, 'src/img/roles/role_6.jpg'));
        this.roles.push(new Role('Зодчий', 7, false, 'src/img/roles/role_7.jpg'));
        this.roles.push(new Role('Кондотьер', 8, false, 'src/img/roles/role_8.jpg'));
        console.log('initRoles - OK');
    }

    initBuildings() {
        for (let index = 0; index < 3; index++) {
            this.buildings.push(new Building("Лавка", 2, "green", false, "src/img/card/1.jpg", 1, false));
        }
        for (let index = 0; index < 3; index++) {
            this.buildings.push(new Building("Порт", 3, "green", false, "src/img/card/2.jpg", 2, false));
        }
        for (let index = 0; index < 4; index++) {
            this.buildings.push(new Building("Рынок", 2, "green", false, "src/img/card/3.jpg", 3, false));
        }
        for (let index = 0; index < 3; index++) {
            this.buildings.push(new Building("Гавань", 4, "green", false, "src/img/card/4.jpg", 4, false));
        }
        for (let index = 0; index < 2; index++) {
            this.buildings.push(new Building("Ратуша", 5, "green", false, "src/img/card/5.jpg", 5, false));
        }
        for (let index = 0; index < 5; index++) {
            this.buildings.push(new Building("Таверна", 1, "green", false, "src/img/card/6.jpg", 6, false));
        }
        for (let index = 0; index < 5; index++) {
            this.buildings.push(new Building("Поместье", 3, "yellow", false, "src/img/card/7.jpg", 7, false));
        }
        for (let index = 0; index < 4; index++) {
            this.buildings.push(new Building("Замок", 4, "yellow", false, "src/img/card/8.jpg", 8, false));
        }
        for (let index = 0; index < 3; index++) {
            this.buildings.push(new Building("Палаццо", 5, "yellow", false, "src/img/card/9.jpg", 9, false));
        }
        for (let index = 0; index < 3; index++) {
            this.buildings.push(new Building("Церковь", 2, "blue", false, "src/img/card/10.jpg", 10, false));
        }
        for (let index = 0; index < 3; index++) {
            this.buildings.push(new Building("Монастырь", 3, "blue", false, "src/img/card/11.jpg", 11, false));
        }
        for (let index = 0; index < 3; index++) {
            this.buildings.push(new Building("Храм", 1, "blue", false, "src/img/card/12.jpg", 12, false));
        }
        for (let index = 0; index < 2; index++) {
            this.buildings.push(new Building("Собор", 5, "blue", false, "src/img/card/13.jpg", 13, false));
        }
        for (let index = 0; index < 2; index++) {
            this.buildings.push(new Building("Крепость", 5, "red", false, "src/img/card/14.jpg", 14, false));
        }
        for (let index = 0; index < 3; index++) {
            this.buildings.push(new Building("Марсово поле", 3, "red", false, "src/img/card/15.jpg", 15, false));
        }
        for (let index = 0; index < 3; index++) {
            this.buildings.push(new Building("Дозорная башня", 1, "red", false, "src/img/card/16.jpg", 16, false));
        }
        for (let index = 0; index < 3; index++) {
            this.buildings.push(new Building("Тюрма", 2, "red", false, "src/img/card/17.jpg", 17, false));
        }
        //bonus
        for (let index = 0; index < 2; index++) {
            this.buildings.push(new Building("Форт", 3, "purple", true, "src/img/card/18.jpg", 18, true));
        }
        this.buildings.push(new Building("Имперская казна", 5, "purple", false, "src/img/card/19.jpg", 19, true));
        this.buildings.push(new Building("Собрание карт", 5, "purple", false, "src/img/card/20.jpg", 20, true));
        this.buildings.push(new Building("Библиотека", 6, "purple", false, "src/img/card/21.jpg", 21, true));
        this.buildings.push(new Building("Обсерватория", 4, "purple", false, "src/img/card/22.jpg", 22, true));
        this.buildings.push(new Building("Кладбище", 5, "purple", false, "src/img/card/23.jpg", 23, true));
        this.buildings.push(new Building("Великая стена", 6, "purple", false, "src/img/card/24.jpg", 24, true));
        this.buildings.push(new Building("Квартал призраков", 2, "purple", false, "src/img/card/25.jpg", 25, true));
        this.buildings.push(new Building("Университет", 6, "purple", false, "src/img/card/26.jpg", 26, true));
        this.buildings.push(new Building("Врата дракона", 6, "purple", false, "src/img/card/27.jpg", 27, true));
        this.buildings.push(new Building("Школа магии", 6, "purple", false, "src/img/card/28.jpg", 28, true));
        this.buildings.push(new Building("Кузня", 5, "purple", false, "src/img/card/29.jpg", 29, true));
        this.buildings.push(new Building("Лаборатория", 5, "purple", false, "src/img/card/30.jpg", 30, true));

        this.shufflingСards(this.buildings);
        console.log('initBuildings - OK');
    }

    initGameActions() {
        this.phases.push(new GameActions('Выбор класса', 1));
        this.phases.push(new GameActions('Збор ресурсов', 2));
        this.phases.push(new GameActions('Строительство', 3));
        this.phases.push(new GameActions('Особое свойство персонажа', 4));
        console.log('initGameActions - OK');
    }

    joinToGame() {
        if (document.querySelector('#pname') && this.players.length < 7) {
            let newPlayer = new Player(document.querySelector('#pname').value, 2, this.getRandomFourStartingBuildings(), this.getRandomFourStartingBuildings(), [], false);
            this.players.push(newPlayer);
            this.updatePlayerView();
        }
    }

    leftGame() {

    }

    selectStartPlayer(player) {
        this.currentPlayerIndex = player.dataset.id;
        this.crownPlayerIndex = player.dataset.id;
        this.updatePlayerView();
    }

    performNewPhase() {
        console.log(this.buildings);
        if (this.players.length < 3) {
            console.log("мало гравців");
        } else {
            if (this.currentPhase === 0) {
                this.updateRolesView();
                this.updateCurrentPlayerInfo();
                this.drowRoleAutomaticaly(this.getCountOfUnhideRole(), false);
                this.drowRoleAutomaticaly(1, true);
            } else if (this.currentPhase === 1) {

            } else if (this.currentPhase === 2) {

            } else if (this.currentPhase === 3) {

            }
        }
    }

    selectRole(role) {
        if (this.currentPhase === 0) {
            let player = this.getNextPlayerInOneTurnForRoleSelect();
            let selectedRole = this.roles[role.dataset.id];
            if (player && !selectedRole.isSelected) {
                this.currentPlayer = player;
                if (this.players.length === 2) {

                } else if (this.players.length >= 3) {
                    selectedRole.isSelected = true;
                    this.currentPlayer.role.push(selectedRole);
                } else if (this.players.length < 3) {
                    console.log("мало гравців");
                }
                if (this.players.length === 7) {
                    this.specialRuleForSeventhPlayer();
                }
            }
            if (!player || this.getUnselectedRolesCount() === 1) {
                this.currentPhase = 1;
            }
            this.updateRolesView();
            this.updatePlayerView();
            this.updateCurrentPlayerInfo();
        }
    }

    specialRuleForSeventhPlayer() {
        if (this.getUnselectedRolesCount() === 1) {
            if (this.selectedHideRoles.length > 0) {
                var hideRole = this.selectedHideRoles[0];
                var role = this.getRoleBySequenceOfMoves(hideRole.sequenceOfMoves);
                role.isSelected = false;
                this.selectedHideRoles = [];
            }
        }
    }

    drowRoleAutomaticaly(numberOfRoles, isHide) {
        for (let i = 0; i < numberOfRoles; ++i) {
            let randomRole = getRandomInt(0, 7);
            if (randomRole === 3 || this.roles[randomRole].isSelected) {
                --i;
            } else if (!this.roles[randomRole].isSelected) {
                var selectedRole = this.roles[randomRole]
                selectedRole.isSelected = true;
                if (isHide) {
                    this.selectedHideRoles.push(selectedRole);
                } else {
                    this.selectedUnHideRoles.push(selectedRole);
                }
            }
        }
        this.updateRolesView();
    }


    getCountOfUnhideRole() {
        if (this.players.length === 4) {
            return 2;
        } else if (this.players.length === 5) {
            return 1;
        }
        return 0;

    }

    resetAllRolesState() {
        this.roles.forEach((element, index) => {
            element.isSelected = false;
        });
    }

    getNextPlayerInOneTurnForRoleSelect() {
        let maxPlayerRoles = this.players.length > 3 ? 1 : 2;
        let player = this.players[this.currentPlayerIndex];
        if (!player && this.players[0].role.length !== maxPlayerRoles) {
            this.currentPlayerIndex = 1;
            return this.players[0];
        } else if (!player || player.role.length === maxPlayerRoles) {
            return null;
        }
        this.currentPlayerIndex = ++this.currentPlayerIndex;
        return player;
    }

    getNextPlayerInOneTurnByRole() {//перевірити що це взагалі, і чи воно працює
        let maxPlayerRoles = this.players.length > 3 ? 1 : 2;
        let player = this.players[this.currentPlayerIndex];
        if (!player && this.players[0].role.length !== maxPlayerRoles) {
            this.currentPlayerIndex = 1;
            return this.players[0];
        } else if (!player || player.role.length === maxPlayerRoles) {
            return null;
        }
        this.currentPlayerIndex = ++this.currentPlayerIndex;
        return player;
    }

    getUnselectedRolesCount() {
        let count = 0;
        this.roles.forEach((role, index) => {
            if (!role.isSelected) {
                count++;
            }
        });
        return count;
    }

    getRoleBySequenceOfMoves(sequence) {
        for (let i = 0; i < this.roles.length; i++) {
            if (this.roles[i].sequenceOfMoves === sequence) {
                return this.roles[i];
            }
        }
    }

    getRandomFourStartingBuildings() {
        let result = [];
        for (let index = 0; index < 4; index++) {
            result.push(this.buildings.shift());
        }
        return result;
    }

    shufflingСards(array) {
        array.sort(() => Math.random() - 0.5);
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
    discardCard() { console.log('11') }
    buildOneBuilding() { console.log('12') }
    destroyBuilding() { console.log('13') }
    checkIfPossibleToDestroyBuilding() { console.log('14') }
    killPlayer() { console.log('15') }
    stealMoney() { console.log('16') }
    exchangeHandWithPlayer() { console.log('17') }
    changeSomeCardFromHand() { console.log('18') }

    //--------engine functionality -------------
    updatePlayerView() {
        document.querySelector('.js-players-list').innerHTML = "";
        this.players.forEach((element, index) => {
            var player = document.createElement("div");
            player.className = "player-block";
            let playerRoles = "";
            element.role.forEach((role) => {
                playerRoles += role.roleName;
            });
            if (!this.crownPlayerIndex) {
                //-------------------------------------------- карти на руці
                let playerHandEl = document.createElement("div")
                playerHandEl.className = 'player-hand-cards';
                element.buildingsInHand.forEach((element, index) => {
                    let hand = document.createElement("div")
                    hand.innerHTML = `<div class='player-hand-card' style="background:url(${element.imageSrc});"></div>`;
                    this.setMousOverEvent(hand, element);
                    this.setMouseOutEvent(hand);
                    playerHandEl.appendChild(hand);
                });
                element.buildingsInHand.length > 0 ? player.appendChild(playerHandEl) : '';

                //-------------------------------------------- роль
                let playerRolesEl = document.createElement("div")
                playerRolesEl.className = 'player-roles';
                element.role.forEach((element, index) => {
                    let role = document.createElement("div")
                    role.innerHTML = `<div class='player-role' style="background:url(${element.imageSrc});"></div>`;
                    this.setMousOverEvent(role, element);
                    this.setMouseOutEvent(role);
                    playerRolesEl.appendChild(role);
                });
                element.role.length > 0 ? player.appendChild(playerRolesEl) : "";

                //-------------------------------------------- карти на на столі
                let playerBuildsEl = document.createElement("div")
                playerBuildsEl.className = 'player-builds';
                element.buildingsInTown.forEach((element, index) => {
                    let building = document.createElement("div")
                    building.innerHTML = `<div class='player-build' style="background:url(${element.imageSrc});"></div>`;
                    this.setMousOverEvent(building, element);
                    this.setMouseOutEvent(building);
                    playerBuildsEl.appendChild(building);
                });
                player.appendChild(playerBuildsEl);

                let playerCrownEl = document.createElement("div")
                playerCrownEl.className = 'player-crown-container';
                if(this.crownPlayerIndex === index){
                    playerCrownEl.innerHTML = `<div class='player-crown-active'></div>`;
                }else{
                    playerCrownEl.innerHTML = `<div class='player-crown'></div>`;
                }
                
                player.appendChild(playerCrownEl);

                //element.buildingsInTown.length > 0 ? player.appendChild(playerBuildsEl) : '';
                //--------------------------------------------
                //let playerHandEl = `<div class='player-hand-cards'>${element.buildingsInHand}</div>`;

                // let playerBuildsEl = `<div class='player-builds'>${element.buildingsInTown}</div>`;
                // let playerDetailsEl = `<div class='player-details'>${element.playerName} -> ${element.coins}</div>`;
                // let playerRolesEl = `<div class='player-roles'>${playerRoles}</div>`;
                // player.innerHTML = `<div class="player-block" onclick="game.selectStartPlayer(this)" data-id="${index}">
                // ${playerHandEl} ${playerBuildsEl} ${playerDetailsEl} ${playerRolesEl} </div>`;
            }
            this.crownPlayerIndex === '' + index ? player.style.color = "gold" : '';
            document.querySelector('.js-players-list').appendChild(player);
        });
    }

    updateRolesView() {
        console.log('----------updateRolesView------------');
        document.querySelector('.js-roles-list').innerHTML = "";
        document.querySelector('.js-hide-roles-list').innerHTML = "";
        document.querySelector('.js-unhide-roles-list').innerHTML = "";
        //ролі для вибора
        this.roles.forEach((element, index) => {
            var role = document.createElement("div");
            if (!element.isSelected && this.currentPhase === 0) {
                role.innerHTML = `<div class="role-card" style="background:url(${element.imageSrc});" onclick="game.selectRole(this);" data-id="${index}"></div>`;
            }
            // else { //
            //     role.innerHTML = `<div class="role-card" style="background:url(${element.imageSrc});" data-id="${index}"></div>`;
            // }

            document.querySelector('.js-roles-list').appendChild(role);
        });
        //скриті ролі
        this.selectedHideRoles.forEach((element, index) => {
            var role = document.createElement("div");
            role.innerHTML = `<div class="role-card" style="background:url(${element.imageSrc});" onclick="game.selectRole(this);" data-id="${index}"></div>`;
            this.setMousOverEvent(role, element);
            this.setMouseOutEvent(role);
            document.querySelector('.js-hide-roles-list').appendChild(role);
        });
        //відкрити ролі
        this.selectedUnHideRoles.forEach((element, index) => {
            var role = document.createElement("div");
            role.innerHTML = `<div class="role-card" style="background:url(${element.imageSrc});" onclick="game.selectRole(this);" data-id="${index}"></div>`;
            this.setMousOverEvent(role, element);
            this.setMouseOutEvent(role);
            document.querySelector('.js-unhide-roles-list').appendChild(role);
        });
    }

    updateCurrentPlayerInfo() {
        let player = this.players[this.currentPlayerIndex];
        document.querySelector('.js-current-player').innerHTML = player ? `Ход игрока -> ${player.playerName}` : '';
        document.querySelector('.js-current-player-action').innerHTML = `test action -> ${this.currentPlayerIndex}`
    }

    setMousOverEvent(target, object) {
        target.addEventListener("mouseover", e => {
            this.selectedCardForDetailsShow = object;
        });
    }
    setMouseOutEvent(targer) {
        targer.addEventListener("mouseout", e => {
            this.selectedCardForDetailsShow = null;
        });
    }

    static getInstance() {
        return this._instance;
    }
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //Максимум не включается, минимум включается
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
    constructor(buildName, price, color, isHaveBuildingDestroyImune, imageSrc, type, isSpecialCard) {
        this.buildName = buildName;
        this.price = price;
        this.color = color;
        this.isHaveBuildingDestroyImune = isHaveBuildingDestroyImune;
        this.imageSrc = imageSrc;
        this.type = type;
        this.isSpecialCard = isSpecialCard;
    }
}

class GameActions {
    constructor(actionName, index) {
        this.actionName = actionName;
        this.index = index;
    }
}

const game = new GameEngine();

document.addEventListener('mousemove', e => {
    if (e.altKey) {

        var positionX = (e.pageX - window.scrollX + 500 * 0.64 > window.innerWidth ? (window.innerWidth - 500 * 0.64) : e.pageX - window.scrollX);
        document.querySelector('.js-cardDetails').style.left = positionX + 10 + "px";

        var positionY = (e.pageY - window.scrollY + 500 > window.innerHeight ? (window.innerHeight - 500) : e.pageY - window.scrollY);
        document.querySelector('.js-cardDetails').style.top = positionY + 15 + "px";

        if (game.selectedCardForDetailsShow) {
            document.querySelector('.js-cardDetails').style.backgroundImage = 'url(' + game.selectedCardForDetailsShow.imageSrc + ')';
        } else {
            document.querySelector('.js-cardDetails').style.backgroundImage = '';
        }

    } else {
        document.querySelector('.js-cardDetails').style.left = "-1000px";
        document.querySelector('.js-cardDetails').style.top = "-1000px";
    }
});

