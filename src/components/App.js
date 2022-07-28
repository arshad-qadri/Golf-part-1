import React, { Component, useState } from "react";
import "../styles/App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      renderBall: false,
      ballPosition: 0,
    };
    this.renderChoice = this.renderBallOrButton.bind(this);
    this.buttonClickHandler = this.buttonClickHandler.bind(this);
  }

  buttonClickHandler() {
    this.setState({ renderBall: true });
  }
  renderBallOrButton() {
    if (this.state.renderBall) {
      return (
        <div
          className="ball"
          style={{ left: `${this.state.ballPosition}px` }}
        ></div>
      );
    } else {
      return <button onClick={this.buttonClickHandler}>Start</button>;
    }
  }

  // bind ArrowRight keydown event
  componentDidMount() {
    window.onkeydown = function (e) {
      if (this.state.renderBall) {
        if (e.keyCode === 39) {
          this.setState({ ballPosition: this.state.ballPosition + 10 });
        }
      }
    }.bind(this);
  }

  render() {
    return <div className="playground">{this.renderBallOrButton()}</div>;
  }
}

export default App;
