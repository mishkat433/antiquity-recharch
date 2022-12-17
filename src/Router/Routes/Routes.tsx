import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../../Layout/HomeLayout";
import Home from "../../Pages/Home/Home/Home"

const routes = createBrowserRouter([
    {
        path: '/',
        element: <HomeLayout />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/home',
                element: <Home />
            }
        ]

    }
])

export default routes