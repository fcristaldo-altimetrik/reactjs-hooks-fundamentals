import React from "react";
import { connect } from "react-redux";

class ClassCounter extends React.Component {
  // const countValue = useSelector((state) => state.count);
  render() {
    return (
      <div>
        <p>Class Selected count value: {this.props.countValue}</p>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { count } = state;
  return { countValue: count };
}

export default connect(mapStateToProps)(ClassCounter);
