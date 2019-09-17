import { AreaShape } from './type'

// return random number between min and max
const getRandomNum = (min: number, max: number): number => {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

// 
const CalcArea = (areaShape: AreaShape): string => {
  const area = areaShape.width * areaShape.height
  return `I'm ${areaShape.name} with area ${area} cm squared .`
}

export { getRandomNum, CalcArea }
