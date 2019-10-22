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
import Loadable from '@loadable/component'
// import Loading from '../components/Loading'

const DashboardHome = Loadable(() => import('../views/dashboard'))

const ProfileHome = Loadable(() => import('../views/profile'))

const TableHome = Loadable(() => import('../views/table'))

const ChartsHome = Loadable(() => import('../views/charts'))

const NoticeHome = Loadable(() => import('../views/notice'))

const routeList = [
    {
        path: '/home/dashboard',
        exact: true,
        icon: 'dashboard',
        sidebarName: 'Dashboard',
        component: DashboardHome,
        permission: 4,
    },
    {
        path: '/home/profile',
        exact: true,
        icon: 'profile',
        sidebarName: 'User Profile',
        component: ProfileHome,
        permission: 3,
    },
    {
        path: '/home/table',
        exact: true,
        icon: 'table',
        sidebarName: 'Table List',
        component: TableHome,
        permission: 2,
    },
    {
        path: '/home/charts',
        exact: true,
        icon: 'charts',
        sidebarName: 'Charts',
        component: ChartsHome,
        permission: 1,
    },
    {
        path: '/home/notice',
        exact: true,
        icon: 'notice',
        sidebarName: 'Notifications',
        component: NoticeHome,
        permission: 1,
    },
]

export default routeList