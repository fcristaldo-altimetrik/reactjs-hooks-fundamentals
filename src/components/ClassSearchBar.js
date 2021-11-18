import React from "react";

export class ClassSearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.inputEl = React.createRef();
  }
  onButtonClick = () => {
    // `current` points to the mounted text input element
    if (!this.inputEl.current.value) {
      this.inputEl.current.focus();
    }
  };
  render() {
    return (
      <div>
        <input ref={this.inputEl} type="text" />
        <button onClick={this.onButtonClick}>Search</button>
      </div>
    );
  }
}
