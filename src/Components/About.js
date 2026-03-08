// const About = () => {
//   return (
//     <div>
//       <h1>This is the about us page</h1>
//       <p>I am trying to learn react!!</p>
//     </div>
//   );
// };
// export default About;
import React from "react";
import Profile from "./ProfileClass";
class About extends React.Component {
  constructor(props) {
    super(props);
    console.log("Parent Constructor : " + this.props.name);
  }
  componentDidMount() {
    console.log("parent cocomponentDidMount called.");
  }
  render() {
    console.log("Parent class render called.");

    return (
      <div>
        <h1>This is the About Us Page</h1>
        <p>Hi I am learning React!</p>
        <Profile />
      </div>
    );
  }
}
export default About;
