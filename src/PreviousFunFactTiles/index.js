import './index.scss';

const PreviousFunFactTile = ({ funFact, onTileClick, isCorrect }) => {
    const tileClass = isCorrect ? 'correct-answer' : '';
    return (<button className={`fun-fact-tile ${tileClass}`} onClick={onTileClick}>
                {funFact}
            </button>
)};

export default PreviousFunFactTile;