import { useState } from 'react';
import videoSource from '../assets/rickRolled.mp4';

const RickRollVideo = () => {
    const [play, setPlay] = useState(false);

    const handlePlay = () => {
        setPlay(true);
    };

    return (
        <div>
            {!play ? (
                <button onClick={handlePlay}>Play Video</button>
            ) : (
                <video
                    controls
                    autoPlay
                    src={videoSource}
                    style={{ width: '100%', height: '100vh', objectFit: 'cover' }}
                />
            )}
        </div>
    );
};

export default RickRollVideo;
