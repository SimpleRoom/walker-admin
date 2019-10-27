/**
 * 用于创建符合格式的数据
 * 使用：
 * import { createMockList } from '../../dbdata/create'
 * const list  = createMockList(32)
 * console.log(JSON.stringify(list))
 * console.log(list)
 * 
 **/
import faker from 'faker'
import {
  getRandomNum
} from '../static/Util'

// faker.setLocale('zh_CN')
faker.locale = 'zh_CN'

// 随机生成10个手机号码：array
export const getMoblieNum = () => {
  const numArray = ['139', '138', '137', '136', '135', '134', '159', '158', '157', '150', '151', '152', '188', '187', '182', '183', '184', '178', '130', '131', '132', '156', '155', '186', '185', '176', '133', '153', '189', '180', '181', '177']
  var numList = ''
  var arraryLength = numArray.length
  for (var n = 0; n < 10; n++) {
    var i = parseInt(Math.random() * arraryLength)
    var num = numArray[i]
    for (var j = 0; j < 8; j++) {
      num = num + Math.floor(Math.random() * 10)
    }
    if (n === 0) {
      numList = numList + num
    } else {
      numList = numList + ',' + num
    }
  }
  return numList.split(',')
}

const mobileNumList = getMoblieNum()
const randomMaxLength = mobileNumList.length || 10

const user = {
  id: '10052',
  name: '李长青',
  age: 29,
  // joinTime: '2016/05/03',
  // expiredTime: '2022/10/04',
  // birthday: '1990/08/09',
  // birthCity: 63,
}

export const createMockList = (count) => {
  const dataList = []
  for (let i = 0; i < count; i++) {
    const newMember = {
      ...user,
      index: i, // 一般用不到
      id: getRandomNum(1000, 2000),
      uuid: Math.random().toString(36).slice(2, 8), // 用户编辑，添加，删除比对码
      age: getRandomNum(18, 36),
      phone: mobileNumList[Math.floor(Math.random() * randomMaxLength)],
      name: faker.name.findName().replace(/[\r\n\sA-Za-z.]/g, ''),
      // name: faker.name.findName().replace(/^[\u4e00-\u9fa5]+$/g, ''),
      // joinTime: `${getRandomNum(2015,2019)}/${getRandomNum(1,12)}/${getRandomNum(1,28)}`,
      // expiredTime: `${getRandomNum(2019,2023)}/${getRandomNum(1,12)}/${getRandomNum(1,28)}`,
      birthday: `${getRandomNum(1988,2000)}/${getRandomNum(1,12)}/${getRandomNum(1,28)}`,
      salary: getRandomNum(1, 6),
      // birthCity: getRandomNum(1, 6),
    }
    dataList.push(newMember)
  }
  return dataList
}