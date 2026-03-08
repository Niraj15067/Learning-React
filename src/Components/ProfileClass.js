import React from "react";
import Child from "./Child";
class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      count2: 2,
    };
    console.log("First Child Constructor : " + this.props.name);
  }
  componentDidMount() {
    console.log("First child component did mount is called.");
  }
  componentDidUpdate() {
    console.log(this.state.count);
  }

  render() {
    const { count } = this.state;

    console.log("First child render called");

    return (
      <div>
        <h1>The count is : {this.state.count}</h1>
        <button onClick={this.handleClick}>Increase </button>
        <Child />
      </div>
    );
  }
  handleClick = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };
}

export default Profile;
