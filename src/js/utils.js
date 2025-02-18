/**
 * @todo
 * @param index - индекс поля
 * @param boardSize - размер квадратного поля (в длину или ширину)
 * @returns строка - тип ячейки на поле:
 *
 * top-left
 * top-right
 * top
 * bottom-left
 * bottom-right
 * bottom
 * right
 * left
 * center
 *
 * @example
 * ```js
 * calcTileType(0, 8); // 'top-left'
 * calcTileType(1, 8); // 'top'
 * calcTileType(63, 8); // 'bottom-right'
 * calcTileType(7, 7); // 'left'
 * ```
 * */


export function calcTileType(index, boardSize) {
  if(boardSize !==  8) return
  if(index === 0){
    return 'top-left'
  } else if(index === 7 ){
    return 'top-right'
  } else if(index === 56){
    return 'bottom-left'
  } else if(index === 63){
    return 'bottom-right'
  } else if([1,2,3,4,5,6].includes(index)){
    return 'top'
  } else if ([8,16,24,32,40,48,].includes(index)){
    return 'left'
  } else if ([57,58,59,60,61,62].includes(index)){
    return 'bottom'
  } else if ([15,23,31,39,47,55].includes(index)){
    return 'right'
  } else {
    return 'center';
  }
}

export function calcHealthLevel(health) {
  if (health < 15) {
    return 'critical';
  }

  if (health < 50) {
    return 'normal';
  }

  return 'high';
}
