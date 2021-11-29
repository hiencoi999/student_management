import React from "react";
import "../NavBar.css";
import NotiList from "./Noti/NotiList";

class Notification extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      role: "",
    };
  }

  componentDidMount() {
    this.setState({
      role: sessionStorage.getItem("role"),
    });
  }

  render() {
    var { role } = this.state;
    return (
      <div className="todo-app">
        <NotiList role={role} />
      </div>
    );
  }
}

export default Notification;
