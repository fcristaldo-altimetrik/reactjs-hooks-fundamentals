import React from "react";
import { Context } from "../Context";

export class ClassCard extends React.Component {
  render() {
    return (
      <Context.Consumer>
        {({ name }) => (
          <div>
            <p>Hi, {name}</p>
          </div>
        )}
      </Context.Consumer>
    );
  }
}
