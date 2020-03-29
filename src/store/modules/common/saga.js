import axios from 'axios'
import { fork, put, takeEvery } from 'redux-saga/effects'

import {
  // 模板
  tempGetInfo,
  tempSetInfo,
  // github 个人信息
  fetchGitInfo,
  setGithubInfo,
} from './action'

function* getTemp() {
  const result = 'temp'
  yield put(tempSetInfo(result))
}

// 请求github
function* getGithubInfo(action) {
  const { username } = action.payload
  try {
    const result = yield axios.get(`https://api.github.com/users/${username}`)
    // console.log(action, result, 'saga.....')
    yield put(setGithubInfo(result.data))
  } catch (error) {
    console.log(error, 'Github info load error')
  }
}

function* watchCommon() {
  yield takeEvery(tempGetInfo, getTemp)
  // 请求接口
  yield takeEvery(fetchGitInfo, getGithubInfo)
}

export default [fork(watchCommon)]

