import React from "react";
import YouTube from "react-youtube";

class MyYoutube extends React.Component {
  render() {
    const { opts } = this.props;
    const { videoid } = this.props;
    return <YouTube videoId={videoid} opts={opts} onReady={this._onReady} />;
  }

  _onReady(event) {
    event.target.pauseVideo();
  }
}

export default MyYoutube;
