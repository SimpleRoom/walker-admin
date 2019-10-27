// const faker = require('faker')
import faker from 'faker'
import {
  getRandomNum
} from '../static/Util'

// faker.setLocale('zh_CN')
faker.locale = 'zh_CN'

export const getMoblieNum = () => {
  //这是目前找到的除了数据卡外的手机卡前三位，类型是字符串数组
  const numArray = ['139', '138', '137', '136', '135', '134', '159', '158', '157', '150', '151', '152', '188', '187', '182', '183', '184', '178', '130', '131', '132', '156', '155', '186', '185', '176', '133', '153', '189', '180', '181', '177']
  var numList = '' //创建一个数组用来存放10个手机号
  //获取数组长度，这样如果手机号前三位取值单位发生变化，在下一步求i的地方就不用修改随机数取值范围了
  var arraryLength = numArray.length
  for (var n = 0; n < 10; n++) {
    //注意乘以的是上面numArray数组的长度，这样就可以取出数组中的随机一个数。
    //  random的取值范围是大于等于0.0，小于1.0，相乘后得到的就是0到（数组长度-1）的值。
    var i = parseInt(Math.random() * arraryLength)
    // 取出随机的手机号前三位并赋值给num，手机号前三位是字符串类型的
    var num = numArray[i]
    for (var j = 0; j < 8; j++) {
      //num是字符串，后面的数字被当做字符串。所以变成两个字符串拼接了
      num = num + Math.floor(Math.random() * 10)
    }
    if (n === 0) {
      numList = numList + num //第一个手机号前不出现“，”
    } else {
      numList = numList + ',' + num
    } //从第一个手机号后面到最后一个之前用逗号分隔
  }
  return numList
}

const mobileNumList = getMoblieNum().split(',')
const randomMaxLength = mobileNumList.length || 10
console.log(mobileNumList)

const obj = {
  id: '10052',
  name: '李长青',
  age: 29,
  // joinTime: '2016/05/03',
  // expiredTime: '2022/10/04',
  // birthday: '1990/08/09',
  birthCity: 63,
}

export const createMockList = (count) => {
  const dataList = []
  for (let i = 0; i < count; i++) {
    const newMember = {
      ...obj,
      index: i,
      id: getRandomNum(1000, 2000),
      uuid: Math.random().toString(36).slice(2, 8),
      age: getRandomNum(18, 36),
      phone: mobileNumList[Math.floor(Math.random() * randomMaxLength)],
      name: faker.name.findName().replace(/[\r\n\sA-Za-z.]/g, ''),
      // name: faker.name.findName().replace(/^[\u4e00-\u9fa5]+$/g, ''),
      // joinTime: `${getRandomNum(2015,2019)}/${getRandomNum(1,12)}/${getRandomNum(1,28)}`,
      // expiredTime: `${getRandomNum(2019,2023)}/${getRandomNum(1,12)}/${getRandomNum(1,28)}`,
      birthday: `${getRandomNum(1988,2000)}/${getRandomNum(1,12)}/${getRandomNum(1,28)}`,
      salary: getRandomNum(1, 6),
    }
    dataList.push(newMember)
  }
  return dataList
}