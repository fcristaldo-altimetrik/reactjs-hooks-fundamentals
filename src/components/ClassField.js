import React from "react";

export class ClassField extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: this.props.defaultValue || "",
    };
  }

  render() {
    const { id, label, onBlur } = this.props;
    const { value } = this.state;

    return (
      <div>
        <label htmlFor={id}>{label}</label>
        <input
          id={id}
          value={value}
          onBlur={onBlur}
          onChange={(e) => this.setState({ value: e.currentTarget.value })}
        />
      </div>
    );
  }
}
