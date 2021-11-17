import React from "react";
import { getUser } from "../services";

export class ClassUserCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = { user: undefined };
  }
  componentDidMount() {
    // fetch information from API with userId
    getUser(this.props.userId).then((res) => {
      this.setState({ user: res });
    });
  }

  render() {
    const { user } = this.state;
    if (!user) return <p>Loading...</p>;
    return (
      <div>
        <p>{user.name}</p>
        <p>{user.email}</p>
      </div>
    );
  }
}
