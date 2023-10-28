import {
    createMemoryRouter,
    RouterProvider,
    createBrowserRouter
} from "react-router-dom";

import LandingPage from "../LandingPage";
import Maze from "../Maze";

const routes = [
    {
        path: "/test",
        element: <div>Test</div>
    },
    {
        path: "/landingPage",
        element: <LandingPage/>
    },
    {
        path: "/maze",
        element: <Maze/>
    },

]


// for final
// const router = createMemoryRouter(routes);

// for testing
const router = createBrowserRouter(routes);

const App = () => {

    return (

        <RouterProvider router={router} />

    );

}

export default App;
