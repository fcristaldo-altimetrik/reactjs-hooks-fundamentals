import React from "react";

export class ClassMemoParagraph extends React.Component {
  state = { number: 1, inc: 0 };

  onChange = (event) => {
    this.setState((prevState) => ({
      ...prevState,
      number: Number(event.target.value),
    }));
  };
  onClick = () =>
    this.setState((prevState) => ({ ...prevState, inc: prevState.inc + 1 }));

  factorial = React.memo(
    () => factorialOf(this.state.number),
    [this.state.number]
  );
  render() {
    return (
      <div>
        Factorial of
        <input
          type="number"
          value={this.state.number}
          onChange={this.onChange}
        />
        is {this.factorial}
        <button onClick={this.onClick}>Re-render</button>
      </div>
    );
  }
}
function factorialOf(n) {
  console.log("class factorialOf(n) called!");
  return n <= 0 ? 1 : n * factorialOf(n - 1);
}
