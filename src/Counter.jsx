import React, { Component } from "react";
import "./App.css";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  handleIncrement = () => {
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  };

  handleDecrement = () => {
    this.setState((prevState) => ({
      count: prevState.count - 1,
    }));
  };

  render() {
    const { count } = this.state;
    return (
      <div className="counter-container">
        <h2 className="count-text">Count: {count}</h2>
        <div className="button-group">
          <button className="btn increment" onClick={this.handleIncrement}>
            Increment
          </button>
          <button className="btn decrement" onClick={this.handleDecrement}>
            Decrement
          </button>
        </div>
      </div>
    );
  }
}

export default Counter;
