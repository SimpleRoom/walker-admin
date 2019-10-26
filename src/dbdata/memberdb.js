// const faker = require('faker')
import faker from 'faker'
import {
  getRandomNum
} from '../static/Util'

// faker.setLocale("zh_CN")
faker.locale = 'zh_CN'


const obj = {
  id: '10052',
  name: '李长青',
  age: 29,
  joinTime: '2016/05/03',
  expiredTime: '2022/10/04',
  birthday: '1990/08/09',
  birthCity: 63,
}

export const getMockMembers = (count) => {
  const dataList = []
  for (let i = 0; i < count; i++) {
    const newMember = {
      ...obj,
      index: i,
      id: getRandomNum(1000, 2000),
      age: getRandomNum(18, 36),
      // name: faker.name.findName().replace(/^[\u4e00-\u9fa5]+$/g, ''),
      name: faker.name.findName().replace(/[\r\n\sA-Za-z]/g, ''),
      joinTime: `${getRandomNum(2015,2019)}/${getRandomNum(1,12)}/${getRandomNum(1,28)}`,
      expiredTime: `${getRandomNum(2019,2023)}/${getRandomNum(1,12)}/${getRandomNum(1,28)}`,
      birthday: `${getRandomNum(1988,2000)}/${getRandomNum(1,12)}/${getRandomNum(1,28)}`,
      birthCity: getRandomNum(1, 6),
    }
    dataList.push(newMember)
  }
  return dataList
}