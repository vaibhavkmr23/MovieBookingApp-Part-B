import React from 'react';
import YouTube from 'react-youtube';

function TrailerComponent(props) {
    const opts = {
        height: '390',
        width: '900',
        playerVars: {
            // https://developers.google.com/youtube/player_parameters
            autoplay: 1,
        },
    };

    return <YouTube videoId={props.id} opts={opts} onReady={_onReady} />;
}

function _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
}
export default TrailerComponent;