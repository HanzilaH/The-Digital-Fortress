import {
    createMemoryRouter,
    RouterProvider,
    createBrowserRouter
} from "react-router-dom";
import { useState, useEffect } from "react";
import MathsQuestion from "../MathsQuestion";
import FakeCaptcha from "../FakeCaptcha";
import EndingTiles from "../EndingTiles";
import ReactionTime from "../ReactionTimeTest";
import SlidingPuzzle from "../SlidingPuzzle";
import ConvolutedMaths from "../ConvolutedMaths";
import LandingPage from "../LandingPage";
import Maze from "../Maze";
import PreviousFunFact from "../PreviousFunFact";
import DeleteRandomCharacter from "../DeleteRandomCharacters";
import MobileError from "../MobileError";
import PillarCatching from "../PillarCatching";

const routes = [
    {
        path: "/",
        element: <LandingPage/>
    },
    {
        path: "/fakeCaptcha",
        element: <FakeCaptcha />
    },
    {
        path: "/maze",
        element: <Maze/>
    },
    {
        path: "/reactionTime",
        element: <ReactionTime />
    },
    {
        path: "/maths",
        element: <MathsQuestion />
    },
    {
        path: "/slidingPuzzle",
        element: <SlidingPuzzle />
    },
    {
        path: "/convolutedMaths",
        element: <ConvolutedMaths />
    },
    {
        path: "/deleteRandomCharacter",
        element: <DeleteRandomCharacter />
    },
    {
        path: "/pillarCatching",
        element: <PillarCatching />
    },
    {
        path: "/previousFunFact",
        element: <PreviousFunFact />
    },
    {
        path: "/endingTiles",
        element: <EndingTiles />
    }
]

// for final
const router = createMemoryRouter(routes);

// for testing
// const router = createBrowserRouter(routes);

const App = () => {

    // to prevent the app from running on smaller screens
    const [showMobileError, setShowMobileError] = useState(false);
    useEffect(() => {
        (window.innerHeight <= 600 || window.innerWidth <= 800)?
            setShowMobileError(true):
            setShowMobileError(false);
        
    }, []); 


    
    return (
        showMobileError ? <MobileError /> : <RouterProvider router={router} />
    );
    

}

export default App;
