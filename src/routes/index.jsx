/*
 *  react-loadable: load Async component
 *  Loadable(loader,loading) 
 *  loader: load component
 *  loading: default loading effect
 */
import Loadable from "react-loadable"
import Loading from "@src/components/Loading"

const DashboardHome = Loadable({
    loader: () => import("@src/views/dashboard"),
    loading: Loading,
})

const ProfileHome = Loadable({
    loader: () => import("@src/views/profile"),
    loading: Loading,
})

const TableHome = Loadable({
    loader: () => import("@src/views/table"),
    loading: Loading,
})

const ChartsHome = Loadable({
    loader: () => import("@src/views/charts"),
    loading: Loading,
})

const NoticeHome = Loadable({
    loader: () => import("@src/views/notice"),
    loading: Loading,
})
const routeList = [
    {
        path: "/home/dashboard",
        exact: true,
        icon: "dashboard",
        sidebarName: "Dashboard",
        component: DashboardHome,
        permission: 1,
    },
    {
        path: "/home/profile",
        exact: true,
        icon: "profile",
        sidebarName: "User Profile",
        component: ProfileHome,
        permission: 2,
    },
    {
        path: "/home/table",
        exact: true,
        icon: "table",
        sidebarName: "Table List",
        component: TableHome,
        permission: 1,
    },
    {
        path: "/home/charts",
        exact: true,
        icon: "charts",
        sidebarName: "Charts",
        component: ChartsHome,
        permission: 1,
    },
    {
        path: "/home/notice",
        exact: true,
        icon: "notice",
        sidebarName: "Notifications",
        component: NoticeHome,
        permission: 1,
    },
]

export default routeList