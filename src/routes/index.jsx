/*
 *  load Async component
 *  https://github.com/smooth-code/loadable-components
 *  Arguments                Description
 *  loadFn                 The function call to load the component.
 *  options                Optional options.
 *  options.fallback       Fallback displayed during the loading.
 *  options.ssr            If false, it will not be processed server-side. Default to true.
 *  options.cacheKey       Cache key function (see dynamic import)
 */
import React from 'react'
import Loadable from '@loadable/component'
import Loading from '../components/Loading'

// 图表查看
const ChartListPage = Loadable(() => import('../views/ChartPage/ChartPage'), {
  fallback: <Loading />
})
// 个人资料
const UserProfile = Loadable(() => import('../views/UserProfile/UserProfile'))
// 游玩线路
const PlayLinePage = Loadable(() => import('../views/PlayLinePage/PlayLinePage'))
// 酒店预订
const HotelPage = Loadable(() => import('../views/HotelPage/HotelPage'))
// 会员管理
const MemberPage = Loadable(() => import('../views/MemberPage/MemberPage'))
// 员工管理
const EmployeeManagementPage = Loadable(() => import('../views/EmployeeManagement/EmployeeManagement'))

// permission： 控制路由权限
const routeList = [
  {
    path: '/home/charts',
    exact: true,
    icon: 'charts',
    sidebarName: '数据统计',
    component: ChartListPage,
    permission: 4,
  },
  {
    path: '/home/profile',
    exact: true,
    icon: 'profile',
    sidebarName: '个人资料',
    component: UserProfile,
    permission: 3,
  },
  {
    path: '/home/employee',
    exact: true,
    icon: 'employee',
    sidebarName: '员工管理',
    component: EmployeeManagementPage,
    permission: 6,
  },
  {
    path: '/home/member',
    exact: true,
    icon: 'member',
    sidebarName: '会员管理',
    component: MemberPage,
    permission: 1,
  },
  {
    path: '/home/line',
    exact: true,
    icon: 'road',
    sidebarName: '路线设计',
    component: PlayLinePage,
    permission: 2,
  },
  {
    path: '/home/hotel',
    exact: true,
    icon: 'hotel',
    sidebarName: '酒店预订',
    component: HotelPage,
    permission: 1,
  },
]

export default routeList