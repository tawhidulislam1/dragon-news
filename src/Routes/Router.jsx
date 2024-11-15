import { createBrowserRouter } from "react-router-dom";
import HomeLayouts from "../Layouts/HomeLayouts";


const Router = createBrowserRouter([
    {
        path:'/',
        element: <HomeLayouts></HomeLayouts>
    },
    {
        path:'/news',
        element: <h3>news</h3>
    },
    {
        path:'/auth',
        element: <h3>auth</h3>
    },
    {
        path:'*',
        element: <h3>error</h3>
    },
])

export default Router;