
/**
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
        path: "/css",
        exact: true,
        sidebarName: "css",
        component: CssBox,
    },
    {
        path: "/vue",
        exact: true,
        sidebarName: "vue",
        component: VueBox,
    },
    {
        path: "/react",
        exact: true,
        sidebarName: "react",
        component: ReactBox,
    }
];

export default routeList