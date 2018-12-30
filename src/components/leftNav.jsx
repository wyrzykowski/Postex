import React, { Component } from "react";

class LeftNav extends Component {
  state = {};
  render() {
    const leftNavStyle = {
      width: "100%"
    };

    var optionStyle = {
      fontSize: "3vh"
    };
    return (
      <div className="mt-4 ml-2" style={leftNavStyle}>
        <div className="row">
          <div className="col border btn">
            <h4 style={optionStyle}>Options:</h4>
          </div>
        </div>
        <div className="row">
          <div className="col border-left border-right btn ">
            <h4>Option 1</h4>
          </div>
        </div>
        <div className="row">
          <div className="col border btn">
            <h4>Option 1</h4>
          </div>
        </div>
        <div className="row">
          <div className="col border-left border-right btn">
            <h4>Option 1</h4>
          </div>
        </div>
        <div className="row">
          <div className="col border btn">
            <h4>Option 1</h4>
          </div>
        </div>
        <div className="row">
          <div className="col border-left border-right btn">
            <h4>Option 1</h4>
          </div>
        </div>
        <div className="row">
          <div className="col border btn">
            <h4>Option 1</h4>
          </div>
        </div>
      </div>
    );
  }
}

export default LeftNav;
