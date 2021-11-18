import React from "react";

export class ClassCard extends React.Component {
  shouldComponentUpdate(nextProps, nextState) {
    const {
      user: { name, email },
    } = nextProps;
    const {
      user: { name: oldName, email: oldEmail },
    } = this.props;
    if (name === oldName && email === oldEmail) return false;
    return true;
  }
  render() {
    console.log("class render card", this.props.user);
    return (
      <div>
        <p>
          Name:<span>{this.props.user.name}</span>
        </p>
        <p>
          Email:<span>{this.props.user.email}</span>
        </p>
      </div>
    );
  }
}
