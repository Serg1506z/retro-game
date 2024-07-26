/**
 * Entry point of app: don't change this
 */
import GamePlay from './GamePlay';
import GameController from './GameController';
import GameStateService from './GameStateService';
import { playerTypes, generateTeam, EvilTeamTypes } from './generators';
import Team from './Team';
import PositionedCharacter from './PositionedCharacter'

const gamePlay = new GamePlay();
gamePlay.bindToDOM(document.querySelector('#game-container'));

const stateService = new GameStateService(localStorage);
const gameCtrl = new GameController(gamePlay, stateService);
gameCtrl.init();

// отрисовка вкоманды игрока
const characters = generateTeam(playerTypes, 3, 4) 
const playerTeam = new Team(characters)
const positions = playerTeam.characters.map((element, index) => new PositionedCharacter(element, (index + 1) * 8));



// отрисовка команды противникаЫ

const EvilTeamCharacters = generateTeam(EvilTeamTypes, 3, 4) 
const EvilTeam = new Team(EvilTeamCharacters)
const EvilTeamPositions = EvilTeam.characters.map((element, index) => new PositionedCharacter(element, (index + 1)*8 +7));


gamePlay.redrawPositions([...positions, ...EvilTeamPositions])


