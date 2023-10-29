import { useState, useEffect} from "react";
import "./index.scss";
import PuzzleTemplate from "../PuzzleTemplate";
import { useNavigate } from "react-router-dom";

const MathsQuestion = () => {
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const correctAnswer = '2';
    const [flickering, setFlickering] = useState(false);

    const navigate = useNavigate();

    const handleAnswerSelection = (event) =>{
        setSelectedAnswer(event.target.value);
    };

    useEffect(() => {
        const flickerInterval = setInterval(() => {
            const shouldFlicker = Math.random() < 0.3;
            setFlickering(shouldFlicker);
          }, 400);

        return () => clearInterval(flickerInterval);
      }, []);

    return(
        <div className={flickering ? 'flicker' : ''}>
        <PuzzleTemplate title="Quick Math" puzzle={

                <div className="maths-question">
                    <div>
                        <h2>
                            What is{' '}
                            <span style={{ textDecoration: 'none', cursor: 'pointer' }} onClick={ () => { navigate("/test"); } }>
                                1 + 1
                            </span>
                            ?
                        </h2>
                        <form>
                            <label className="label-style">
                                <input type="radio" value="1" checked={selectedAnswer === '1'} onChange={handleAnswerSelection} />
                                <div className="label-text">1</div>
                            </label>
                            <label className="label-style">
                                <input type="radio" value="2" checked={selectedAnswer === '2'} onChange={handleAnswerSelection} />
                                <div className="label-text">2</div>
                            </label>

                            <label className="label-style">
                                <input type="radio" value="3" checked={selectedAnswer === '3'} onChange={handleAnswerSelection } />
                                <div className="label-text">3</div>
                            </label>
                            <label className="label-style">
                                <input type="radio" value="4" checked={selectedAnswer === '4'} onChange={handleAnswerSelection} />
                                <div className="label-text">4</div>
                            </label>

                        </form>
                        {selectedAnswer && (
                            <div>
                                <button className="button-style" onClick={ () => { navigate("/"); } }><span>Next</span></button>
                                {selectedAnswer === correctAnswer && (
                                    <p>Hint: It is not that simple! Look at the question closely!</p>
                                )}
                            </div>
                        )}
                    </div>

                </div>


            }/>
        </div>


    );
};

export default MathsQuestion;