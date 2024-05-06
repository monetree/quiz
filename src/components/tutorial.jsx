import React from "react";

class Tutorial extends React.Component {
  render() {
    return (
      <div className="border rounded border-gray-50">
        <iframe
          title="tutorial"
          src={"https://www.loom.com/embed/cbf2553613544c5489a1cd8e6d84241c"}
          frameborder="0"
          webkitallowfullscreen
          mozallowfullscreen
          allowfullscreen
          style={{
            top: 0,
            left: 0,
            width: "700px",
            height: "400px",
          }}
        />
      </div>
    );
  }

  _onReady(event) {
    event.target.pauseVideo();
  }
}

export default Tutorial;
