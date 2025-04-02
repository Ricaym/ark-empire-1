import Rules from "./components/Rules";
import Home from "./components/Home";

import {createBrowserRouter, RouterProvider} from "react-router-dom";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home/>
    },
    {
        path: '/rules',
        element:
            <div>
                <Rules/>
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