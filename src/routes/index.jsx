/*
 *  react-loadable 拆分组件为异步组件，提高首屏加载速度
 *  Loadable(loader,loading) loader 组件路径
 *  loading: 默认过度的Loading组件
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
        path: "/home/curry",
        exact: true,
        sidebarName: "Stephen-Curry",
        component: CssBox,
    },
    {
        path: "/home/thompson",
        exact: true,
        sidebarName: "Klay-Thompson",
        component: VueBox,
    },
    {
        path: "/home/durant",
        exact: true,
        sidebarName: "Kevin-Durant",
        component: ReactBox,
    },
    {
        path: "/home/green",
        exact: true,
        sidebarName: "Draymond-Green",
        component: ReactBox,
    },
    {
        path: "/home/iguodala",
        exact: true,
        sidebarName: "Andre-Iguodala",
        component: ReactBox,
    },
];

export default routeList