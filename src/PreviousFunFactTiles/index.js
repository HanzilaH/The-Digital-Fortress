import './index.scss';

const PreviousFunFactTile = ({ funFact, onTileClick }) => {
    return (<button className="fun-fact-tile" onClick={onTileClick}>
                {funFact}
            </button>
)};

export default PreviousFunFactTile;