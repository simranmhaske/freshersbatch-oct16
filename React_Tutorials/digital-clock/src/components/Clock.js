import React, { Component } from "react";
import "./ClockStyle.css";
class Clock extends Component {
  constructor() {
    super();

    this.state = {
      time: new Date()
    }; // initialise the state
  }

  componentDidMount() {
    // create the interval once component is mounted
    this.update = setInterval(() => {
      this.setState({ time: new Date() });
    }, 1 * 1000); // every 1 seconds
  }

  setDate() {
    var today = new Date();
    this.setState({
      date:
        today.getFullYear() +
        "-" +
        (today.getMonth() + 1) +
        "-" +
        today.getDate()
    });
  }

  render() {
    const { time } = this.state;
    return (
      <div>
        <div className="header">
          <h1>Digital Clock</h1>
        </div>
        <h3>Calender</h3>
        <label className="switch">
          <input type="checkbox" onChange={() => this.setDate()} />
          <span className="slider round" />
        </label>
        <h2>
          {" "}
          {time.toLocaleTimeString()} {this.state.date}
        </h2>
        ;
      </div>
    );
  }
}

export default Clock;
