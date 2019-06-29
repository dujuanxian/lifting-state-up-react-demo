import React from "react";

class Child extends React.Component {
  constructor(props) {
    super(props);
    this.generateName = this.generateName.bind(this);
    this.state = {
      name: "Hello"
    };
  }

  generateName() {
    this.setState(state => ({
      name: state.name + "1"
    }));
  }

  render() {
    const styles = {
      border: "2px solid red"
    };

    return (
      <div style={styles}>
        <h2>Child {this.state.name}</h2>
        <button
          style={{ width: "100px", height: "30px" }}
          onClick={this.generateName}
        >
          起个名
        </button>
      </div>
    );
  }
}

export default Child;
