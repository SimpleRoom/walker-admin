/*
 *  react-loadable: load Async component
 *  Loadable(loader,loading) 
 *  loader: load component
 *  loading: default loading effect
 */
import Loadable from "react-loadable"
import Loading from "@src/components/Loading"

const CssBox = Loadable({
    loader: () => import("@src/views/CssBox"),
    loading: Loading
})
const VueBox = Loadable({
    loader: () => import("@src/views/VueBox"),
    loading: Loading
})
const ReactBox = Loadable({
    loader: () => import("@src/views/ReactBox"),
    loading: Loading
})

const routeList = [
    {
        path: "/home/dashboard",
        exact: true,
        icon: "dashboard",
        sidebarName: "Dashboard",
        component: CssBox,
    },
    {
        path: "/home/profile",
        exact: true,
        icon: "profile",
        sidebarName: "User Profile",
        component: VueBox,
    },
    {
        path: "/home/table",
        exact: true,
        icon: "table",
        sidebarName: "Table List",
        component: ReactBox,
    },
    {
        path: "/home/charts",
        exact: true,
        icon: "charts",
        sidebarName: "Charts",
        component: ReactBox,
    },
    {
        path: "/home/notice",
        exact: true,
        icon: "notice",
        sidebarName: "Notifications",
        component: ReactBox,
    },
];

export default routeList