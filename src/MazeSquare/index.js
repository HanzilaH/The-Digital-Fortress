import "./index.scss";

const MazeSquare = ({ rectangles, outerIndex, innerIndex }) => {

    return (
        <>
            <div className="rectangle-container" style={
                {
                    "borderLeftStyle": rectangles[outerIndex][innerIndex]["left"] ? "solid": "hidden",
                    "borderRightStyle": rectangles[outerIndex][innerIndex]["right"] ? "solid": "hidden",
                    "borderTopStyle": rectangles[outerIndex][innerIndex]["top"] ? "solid" : "hidden",
                    "borderBottomStyle": rectangles[outerIndex][innerIndex]["bottom"] ? "solid" : "hidden",
                    "backgroundColor": rectangles[outerIndex][innerIndex]["playerIn"] ? "red" : "white"
                }
            }>
            </div>
        </>
    )

}

export default MazeSquare;
