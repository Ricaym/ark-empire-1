import './App.css';
import Start from "./components/start";
import Loading from "./components/loading";
import Home from "./components/home";
import logo from "./assets/logo.png"

import {createBrowserRouter, RouterProvider} from "react-router-dom";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Start logo={logo}/>
    },
    {
        path: '/loading',
        element:
            <div>
                <Loading/>
            </div>
    },
    {
        path: '/home',
        element:
            <div>
                <Home/>
            </div>
    }
])

function App() {
    return <RouterProvider router={router}/>
}

export default App;