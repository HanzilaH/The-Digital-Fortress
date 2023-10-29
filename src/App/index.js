import {
    createMemoryRouter,
    RouterProvider,
    createBrowserRouter
} from "react-router-dom";
import MathsQuestion from "../MathsQuestion";
import PuzzleTemplate from "../PuzzleTemplate";
import FakeCaptcha from "../FakeCaptcha";
import EndingTiles from "../EndingTiles";
import ReactionTime from "../ReactionTimeTest";

const routes = [
    {
        path: "/test",
        element: <PuzzleTemplate title="test" nextStage="/test" alwaysShowButtons={false} isSolved={true} puzzle={<div>testtest</div>} />
    },
    {
        path: "/fakeCaptcha",
        element: <FakeCaptcha />
    },
    {
        path: "/math",
        element: <MathsQuestion />
    },
    {
        path: "/EndingTiles",
        element: <EndingTiles />
    },
    {
        path: "/reactionTime",
        element: <ReactionTime />
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
