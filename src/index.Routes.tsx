import Detail from "./Pages/Client/Detail";
import Error from "./Pages/Error/Error";
import Home from "./Pages/Client/Home";
import MainRoot from "./Pages/Client/MainRoot";
import Product from "./Pages/Client/Product";
import Wish from "./Pages/Client/Wish";
import HomeAdmin from "./Pages/Admin/Home"
import AdminRoot from "./Pages/Admin/AdminRoot";
import Dashboard from "./Pages/Admin/Dashboard";
import Add from "./Pages/Admin/Add";
import Errorpage from "./Pages/ErrorPage/Errorpage";
const ROUTES=[
    {
        path:"/",
        element:<MainRoot/>,
        children:[
            {
                path:"",
                index:true,
                element:<Home/>
            },
            {
                path:"Wish",
                element:<Wish/>
            },
            {
                path:"Product",
                element:<Product/>
            },
            {
                path:"item/:id",
                element:<Detail/>
            },
        ]
    },
    {
        path:"/admin",
        element:<AdminRoot/>,
        children:[
            {
                index:true,
                element:<HomeAdmin/>
            },
            {
                path:"add",
                element:<Add/>
            },
            {
                path:"dashboard",
                element:<Dashboard/>
            }
        ]
    },

    {
        path:"*",
        element:<Errorpage/>
    }
    
]
export default ROUTES