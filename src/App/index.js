import {
    createMemoryRouter,
    RouterProvider,
    createBrowserRouter
} from "react-router-dom";
import PuzzleTemplate from "../PuzzleTemplate";

const routes = [
    {
        path: "/test",
        element: <PuzzleTemplate title="test" nextStage="/test" alwaysShowButtons={false} isSolved={true} puzzle={<div>testtest</div>} />
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
