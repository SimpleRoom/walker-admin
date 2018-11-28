import * as uuidv4 from "uuid/v4"
import { ReadonlyObjectArray, } from "./type"
import { getRandomNum } from "./Util"

export const RankList: ReadonlyObjectArray = [
    {
        id: uuidv4(),
        name: "Kurry",
        score: getRandomNum(60, 100),
    },
    {
        id: uuidv4(),
        name: "Durrent",
        score: getRandomNum(60, 100),
    },
    {
        id: uuidv4(),
        name: "Thomphson",
        score: getRandomNum(60, 100),
    },
    {
        id: uuidv4(),
        name: "Green",
        score: getRandomNum(60, 100),
    },
    {
        id: uuidv4(),
        name: "Iguodala",
        score: getRandomNum(60, 100),
    },
]
