import { Bowman } from "./character/bowman";
import { Swordsman } from "./character/swordman";
import { Mag } from "./character/mag";
import { Daemon } from "./character/daemon";
import { Undead } from "./character/undead";
import { Vampire } from "./character/vampire";


/**
 * Формирует экземпляр персонажа из массива allowedTypes со
 * случайным уровнем от 1 до maxLevel
 *
 * @param allowedTypes массив классов
 * @param maxLevel максимальный возможный уровень персонажа
 * @returns генератор, который при каждом вызове
 * возвращает новый экземпляр класса персонажа
 *
 */
export const playerTypes = [Bowman, Swordsman, Mag]; // доступные классы игрока
export const EvilTeamTypes = [Daemon, Undead, Vampire]


export function* characterGenerator(allowedTypes, maxLevel) {
    yield new allowedTypes[Math.floor(0 + Math.random() * (2 + 1 - 0))](Math.floor(1 + Math.random() * (maxLevel + 1 - 1)))
    yield new allowedTypes[Math.floor(0 + Math.random() * (2 + 1 - 0))](Math.floor(1 + Math.random() * (maxLevel + 1 - 1)))
    yield new allowedTypes[Math.floor(0 + Math.random() * (2 + 1 - 0))](Math.floor(1 + Math.random() * (maxLevel + 1 - 1)))
    yield new allowedTypes[Math.floor(0 + Math.random() * (2 + 1 - 0))](Math.floor(1 + Math.random() * (maxLevel + 1 - 1)))

  // TODO: write logic here
}


/**
 * Формирует массив персонажей на основе characterGenerator
 * @param allowedTypes массив классов
 * @param maxLevel максимальный возможный уровень персонажа
 * @param characterCount количество персонажей, которое нужно сформировать
 * @returns экземпляр Team, хранящий экземпляры персонажей. Количество персонажей в команде - characterCount
 * */
export function generateTeam(allowedTypes, maxLevel, characterCount) {
  const character = characterGenerator(allowedTypes, maxLevel)
  const characters = []
  for(let i = 0; i < characterCount; i++){
     characters.push(character.next().value)
  }
  return characters
  // TODO: write logic here

}
