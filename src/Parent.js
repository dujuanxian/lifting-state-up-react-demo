import React from "react";
import Child from "./Child";

class Parent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>Parent</h1>
        <p>我想给我娃起名字！</p>
        <Child />
      </div>
    );
  }
}

export default Parent;
