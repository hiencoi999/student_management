/* eslint-disable react/jsx-pascal-case */
/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";
import styled from "styled-components";

const Body = styled.div`
  background-color: rgb(84, 183, 219);
`;
const Container = styled.div`
  width :100%;
  height : 100%
  background-color : rgb(84, 183, 219);
`;
const Left = styled.div`
  float: left;
`;
const NotLeft = styled.div`
  clear: left;
`;
const Logo = styled.div`
  margin-left: 15%;
`;
const Classe369 = styled.div`
  margin-left: 20%;
`;
const AppName = styled.div`
  margin-left: 0%;
  width: 600px;
`;
const _Login = styled.div`
  margin-left: 10%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(162, 199, 243);
  border: 1px solid;
  border-style: none;
  border-radius: 10px;
  width: 100%;
  max-width: 400px;
`;
const _Input = styled.div`
  border-radius: 5px;
  height: 40px;
  width: 250px;
  border-style: none;
  padding-left: 15px;
`;
const _Button = styled.div`
  margin-left: 70%;
  height: 35px;
  width: 100px;
  border-radius: 15px;
  border-style: none;
`;

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
    } else {
      return (
        <Body>
          <Container>
            <div>
              <Left>
                <img
                  src="https://i.imgur.com/naCQWfW.png"
                  width="170px"
                  height="150px"
                />
              </Left>
              <Left>
                <h2 id="school_name"> Trường Đại học Công Nghệ</h2>
              </Left>
            </div>
            <NotLeft>
              <Left>
                <Logo>
                  <Classe369>
                    <img
                      src="https://i.imgur.com/WrYiJFm.png"
                      width="250px"
                      height="200px"
                    />
                  </Classe369>
                  <AppName>
                    <h2>Hệ thống quản lí sinh viên</h2>
                  </AppName>
                </Logo>
              </Left>
              <Left>
                <_Login>
                  <NotLeft>
                    <form action="" method="post" onSubmit={this.submit}>
                      <NotLeft>
                        <h3>Đăng nhập</h3> <br />
                      </NotLeft>
                      <div>
                        <label>E-mail: </label> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <_Input>
                          <input
                            type="email"
                            required
                            name="username"
                            placeholder="Nhập email trường uet"
                            value={this.state.username}
                            onChange={this.handle}
                          />
                        </_Input>
                      </div>{" "}
                      <br />
                      <div>
                        <label>Mật khẩu:</label> &nbsp;
                        <_Input>
                          <input
                            type="password"
                            name="password"
                            placeholder="Nhập mật khẩu"
                            value={this.state.password}
                            onChange={this.handle}
                          />
                        </_Input>
                      </div>{" "}
                      <br />
                      <_Button>
                        <button className="_button" type="submit">
                          Đăng nhập
                        </button>
                      </_Button>{" "}
                      <br />
                    </form>
                  </NotLeft>
                </_Login>
              </Left>
            </NotLeft>
            <footer>
              <p>
                Sản phẩm của nhóm 3 - K64-CACLC-4 - Trường Đại học Công Nghệ
              </p>
            </footer>
          </Container>
        </Body>
      );
    }
  }
}

export default Login;
