import './index.scss';

const SlidingPuzzleTile = ({ value, onTileClick }) => {
    return (<button className="tile" onClick={onTileClick}>
            {value}
            </button>
)};

export default SlidingPuzzleTile;