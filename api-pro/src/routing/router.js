import { createBrowserRouter } from "react-router-dom";
import NotFound from "../components/pages/notFound/NotFound";
import HomePage from "../components/pages/homepage/HomePage";


export const router = createBrowserRouter([
    {
        path: '*',
        element: <NotFound/>
    },
            {
                path:'/',
                element: <HomePage/>
            },


])