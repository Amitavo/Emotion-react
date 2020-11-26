import React from "react";
import YouTube from "react-youtube";

class MyYoutube extends React.Component {
  render() {
    const { opts } = this.props;
    const { videoid } = this.props;
    return (
      //   <YouTube videoId="2g811Eo7K8U" opts={opts} onReady={this._onReady} />
      <YouTube videoId={videoid} opts={opts} onReady={this._onReady} />
    );
  }

  _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }
}

export default MyYoutube;
