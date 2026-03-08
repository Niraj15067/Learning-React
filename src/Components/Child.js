import React from "react";
class Child extends React.Component {
  constructor(props) {
    super(props);
    console.log("Second child constructor called");
  }
  componentDidMount() {
    console.log("Second child componentDidMount called");
  }
  render() {
    console.log("Second child render called.");
    return <div>This is the child class render!!</div>;
  }
}
export default Child;
