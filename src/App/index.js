import {
    createMemoryRouter,
    RouterProvider,
    createBrowserRouter
} from "react-router-dom";
import MathsQuestion from "../MathsQuestion";

const routes = [
    {
        path: "/test",
        element: <div>Test</div>
    },
    {
        path: "/math",
        element: <MathsQuestion />
    }
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
