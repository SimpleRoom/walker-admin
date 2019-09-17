import * as uuidv4 from 'uuid/v4'
import { ReadonlyObjectArray } from './type'
import { getRandomNum } from './Util'

export const RankList: ReadonlyObjectArray = [
  {
    id: uuidv4(),
    name: 'Kurry',
    score: getRandomNum(60, 100),
    width: getRandomNum(5, 10),
    height: getRandomNum(4, 10),
    count: 10,
    color: 'blue'
  },
  {
    id: uuidv4(),
    name: 'Durrent',
    score: getRandomNum(60, 100),
    width: getRandomNum(8, 10),
    height: getRandomNum(4, 8),
    count: 10,
    color: 'purple'
  },
  {
    id: uuidv4(),
    name: 'Thomphson',
    score: getRandomNum(60, 100),
    width: getRandomNum(5, 6),
    height: getRandomNum(7, 10),
    count: 10,
    color: 'yellow'
  },
  {
    id: uuidv4(),
    name: 'Green',
    score: getRandomNum(60, 100),
    width: getRandomNum(7, 10),
    height: getRandomNum(5, 10),
    count: 10,
    color: 'black'
  },
  {
    id: uuidv4(),
    name: 'Iguodala',
    score: getRandomNum(60, 100),
    width: getRandomNum(5, 10),
    height: getRandomNum(8, 10),
    count: 10
  }
]
