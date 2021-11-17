import React from "react";
import { connect } from "react-redux";

class ClassButtons extends React.Component {
  onIncrement = () => {
    this.props.increment();
  };
  onDecrement = () => {
    this.props.decrement();
  };
  render() {
    return (
      <>
        <p>Class</p>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <button onClick={this.onDecrement}>Decrement</button>
          <button onClick={this.onIncrement}>Increment</button>
        </div>
      </>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    increment: () => dispatch({ type: "increment" }),
    decrement: () => dispatch({ type: "decrement" }),
    dispatch,
  };
};
export default connect(null, mapDispatchToProps)(ClassButtons);
