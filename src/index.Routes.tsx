import Home from "./Pages/Home";
import MainRoot from "./Pages/MainRoot";
import Product from "./Pages/Product";
import Wish from "./Pages/Wish";

const ROUTES=[
    {
        path:"/",
        element:<MainRoot/>,
        children:[
            {
                path:"",
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
        ]
    }
]
export default ROUTES