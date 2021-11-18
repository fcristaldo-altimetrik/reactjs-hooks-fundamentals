import React from "react";

export class ClassButton extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick.bind(this);
  }
  handleClick = () => {
    console.alert("clicked");
  };
  render() {
    return <button onClick={this.handleClick}>Click me</button>;
  }
}
