export default class GameController {
  constructor(gamePlay, stateService) {
    this.gamePlay = gamePlay;
    this.stateService = stateService;
  }

  init() {
    console.log('start');
    this.gamePlay.drawUi('prairie')
    this.listeners()
    // TODO: add event listeners to gamePlay events
    // TODO: load saved stated from stateService
  }

  listeners(){
    this.gamePlay.addCellEnterListener(this.onCellEnter.bind(this))
    this.gamePlay.addCellLeaveListener(this.onCellLeave.bind(this))
  }

  
  onCellEnter(index) {
    // TODO: react to mouse enter
  const characterBlock = this.gamePlay.cells[index].querySelector('.character') //ищем по селетору наличие персонажа в ячейке
    if(characterBlock){ //проверяем наличие персонажа
      const className = characterBlock.classList[1] //извлекаем класс из ячейки с персонажем
      const {character} = this.gamePlay.characters.find (({character}) => character.type === className )
      const message =  `\u{1F396} ${character.level} \u{2694} ${character.attack} \u{1F6E1} ${character.defence} \u{2764} ${character.health}`
      this.gamePlay.showCellTooltip(message, index)
    }
  }
  
  onCellClick(index) {
    // TODO: react to click
  }
  onCellLeave(index) {
    // TODO: react to mouse leave
    this.gamePlay.hideCellTooltip(index)
  }
}
