import { Component } from "react";
import { Redirect, Link } from "react-router-dom";

export default class Logout extends Component {
  render() {
    if (localStorage.getItem("accessToken") == null) {
      return <Redirect to="login" />;
    }
    return (
      <div>
        <h1>Đăng xuất thành công!</h1>
        <Link to="/login">Đăng nhập</Link>
      </div>
    );
  }
}
