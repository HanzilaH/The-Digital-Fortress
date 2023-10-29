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
import SlidingPuzzle from "../SlidingPuzzle";
import ConvolutedMaths from "../ConvolutedMaths";
import LandingPage from "../LandingPage";
import Maze from "../Maze";
import PreviousFunFact from "../PreviousFunFact";
import RickRollVideo from "../RickRollVideo";
import DeleteRandomCharacter from "../DeleteRandomCharacters";

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
    },
    {
        path: "/SlidingPuzzle",
        element: <SlidingPuzzle />
    },
    {
        path: "/ConvolutedMaths",
        element: <ConvolutedMaths />
    },
    {
        path: "/landingPage",
        element: <LandingPage/>
    },
    {
        path: "/maze",
        element: <Maze/>
    },
    {
        path: "/PreviousFunFact",
        element: <PreviousFunFact />
    },
    {
        path: "/RickRollVideo",
        element: <RickRollVideo />
    },
    {
        path: "/DeleteRandomCharacter",
        element: <DeleteRandomCharacter />
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
