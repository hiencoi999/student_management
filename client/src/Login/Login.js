import React, { Component } from "react";
import "./Login.css";
import axios from "axios";
import { Redirect } from "react-router-dom";

// export default Login;

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "",
      isLogin: false,
    };
    this.handle = this.handle.bind(this);
    this.submit = this.submit.bind(this);
  }

  handle = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({
      [name]: value,
    });
  };

  submit = async (event) => {
    event.preventDefault();

    await axios
      .post("http://localhost:5000/login", {
        username: this.state.username,
        password: this.state.password,
      })
      .then(function (response) {
        localStorage.setItem("accessToken", response.data.accessToken);

        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });

    this.setState({
      isLogin: localStorage.getItem("accessToken") != null,
    });
  };

  render() {
    if (this.state.isLogin === true) {
      return <Redirect to="/home" />;
    }
    return (
      <form
        className="_loginForm"
        id="loginForm"
        style={{ border: "3px solid rgba(0, 0, 0, 0.2)", display: "block" }}
        action=""
        method="post"
        onSubmit={this.submit}
      >
        <div>
          <label
            className="_account"
            style={{ lineHeight: "20px", marginLeft: "-120px" }}
          >
            Username
          </label>
          <input
            type="text"
            required
            name="username"
            id="accInput"
            className="_account"
            placeholder="Enter your username"
            value={this.state.username}
            onChange={this.handle}
          />
        </div>
        <div>
          <label
            className="_password"
            style={{ lineHeight: "20px", marginLeft: "-120px" }}
            htmlFor="password"
          >
            {" "}
            Password{" "}
          </label>
          <input
            type="password"
            name="password"
            id="passInput"
            className="_password"
            placeholder="Enter your password"
            value={this.state.password}
            onChange={this.handle}
          />
        </div>

        <div className="_formElm form">
          <button className="_button" type="submit">
            LOGIN
          </button>
        </div>
      </form>
    );
  }
}

export default Login;
