import React, { Component } from "react";

class RightAd extends Component {
  state = {};
  render() {
    const leftNavStyle = {
      width: "100%"
    };
    const imgStyle = {
      width: "100%",

      backgroundColor: "red"
    };

    return (
      <div className="mt-4 " style={leftNavStyle}>
        <div className="row m-2">
          <div className="col border btn">
            <img src="./img/profiles/adv.JPG" />
          </div>
        </div>
      </div>
    );
  }
}

export default RightAd;
