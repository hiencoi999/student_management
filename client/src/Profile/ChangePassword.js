import React, { Component } from "react";
import { Link } from "react-router-dom";
import CallApi from "../API/CallApi";

class ChangePassword extends Component {
  constructor(props) {
    super(props);
    this.state = {
      old_pass: "",
      new_pass: "",
      cf_new_pass: "",
    };
  }
  onChange = (event) => {
    var target = event.target;
    var name = target.name;
    var value = target.value;
    this.setState({
      [name]: value,
    });
  };

  onSubmit = () => {
    var { old_pass, new_pass, cf_new_pass } = this.state;
    var username = sessionStorage.getItem("msv");

    if (new_pass !== cf_new_pass) {
      alert("Xác nhận mật khẩu không khớp");
    } else if (old_pass === new_pass) {
      alert("Mật khẩu mới không được trùng mật khẩu cũ");
    } else {
      CallApi("change-password", "PATCH", {
        username,
        old_pass,
        new_pass,
      }).then((res) => {
        alert(res.data.message);
      });
    }
  };
  render() {
    return (
      <div>
        <form>
          <label>Nhập mật khẩu cũ</label> &nbsp;
          <input
            type="password"
            name="old_pass"
            onChange={this.onChange}
            required
          />{" "}
          <br />
          <label>Nhập mật khẩu mới</label> &nbsp;
          <input
            type="password"
            name="new_pass"
            onChange={this.onChange}
            required
            id="password"
          />{" "}
          <br />
          <label>Xác nhận mật khẩu mới</label> &nbsp;
          <input
            type="password"
            name="cf_new_pass"
            onChange={this.onChange}
            id="cf_password"
          />
        </form>
        <button
          type="submit"
          className="btn btn-primary"
          onClick={this.onSubmit}
        >
          <span className="fa fa-save">&nbsp;</span> Ghi nhận
        </button>
        <Link to="/home/profile" className="btn btn-danger">
          <span className="fa fa-close">&nbsp; Hủy bỏ</span>
        </Link>
      </div>
    );
  }
}

export default ChangePassword;
