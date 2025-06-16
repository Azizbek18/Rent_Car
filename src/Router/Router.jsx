import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Pages/Home/Home";
import CardInfo from "../Pages/CardInfo/CardInfo";
import CardsInfo from "../Pages/CardsInfo/CardsInfo";

export const Router = createBrowserRouter([
    {
        path:'/',
        element:<App/>,
        children:[
            {
            path:"",
            element:<Home/>
            },
            {
                path:"cardinfo/:id",
                element:<CardInfo/>
            },
            {
                path:'cardsinfo/:id',
                element:<CardsInfo/>
            }
        ]
    } 
])