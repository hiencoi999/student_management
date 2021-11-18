/* eslint-disable array-callback-return */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import "./NavBar.css";
import "boxicons";
import { AiOutlineHome } from "react-icons/ai";
import { BsClipboardData } from "react-icons/bs";
import { IoMdNotificationsOutline } from "react-icons/io";
import { BiLogOut } from "react-icons/bi";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import routes from "../router";

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      openNav: false,
      chooseHome: true,
      chooseNoti: false,
      chooseChat: false,
      chooseList: false,
      chooseChart: false,
      chooseProfile: false,
    };
  }

  open = () => {
    this.setState({
      openNav: !this.state.openNav,
    });
  };

  chooseHome = () => {
    this.setState({
      chooseHome: true,
      chooseNoti: false,
      chooseChat: false,
      chooseList: false,
      chooseChart: false,
      chooseProfile: false,
    });
  };

  chooseNoti = () => {
    this.setState({
      chooseHome: false,
      chooseNoti: true,
      chooseChat: false,
      chooseList: false,
      chooseChart: false,
      chooseProfile: false,
    });
  };

  chooseChat = () => {
    this.setState({
      chooseHome: false,
      chooseNoti: false,
      chooseChat: true,
      chooseList: false,
      chooseChart: false,
      chooseProfile: false,
    });
  };

  chooseList = () => {
    this.setState({
      chooseHome: false,
      chooseNoti: false,
      chooseChat: false,
      chooseList: true,
      chooseChart: false,
      chooseProfile: false,
    });
  };

  chooseChart = () => {
    this.setState({
      chooseHome: false,
      chooseNoti: false,
      chooseChat: false,
      chooseList: false,
      chooseChart: true,
      chooseProfile: false,
    });
  };

  chooseProfile = () => {
    this.setState({
      chooseHome: false,
      chooseNoti: false,
      chooseChat: false,
      chooseList: false,
      chooseChart: false,
      chooseProfile: true,
    });
  };

  logout = () => {
    localStorage.removeItem("accessToken");
  };

  logOut = (e) => {
    dispatchEvent({ type: "LOG_OUT" });
  };

  render() {
    var {
      openNav,
      chooseHome,
      chooseNoti,
      chooseChat,
      chooseList,
      chooseChart,
      chooseProfile,
    } = this.state;
    return (
      <Router>
        <section className="body">
          <div className={openNav ? "sidebar open" : "sidebar"}>
            <div className="logo-details">
              {/* cai 3 gach */}
              <div className="logo_name">MENU</div>
              <div id="btn" onClick={this.open}>
                <box-icon name="menu" color="#ffffff"></box-icon>
              </div>
            </div>
            <ul className="nav-list">
              <li>
                <Link to="/home">
                  <a
                    className={chooseHome ? "home" : ""}
                    onClick={this.chooseHome}
                  >
                    {/* ve Home */}
                    <div className="icon">
                      <AiOutlineHome />
                    </div>
                    <span className="links_name">Trang chủ</span>
                  </a>
                </Link>
                <span className="tooltip">Trang chủ</span>
              </li>
              <li>
                <Link to="/notification">
                  <a
                    className={chooseNoti ? "home" : ""}
                    onClick={this.chooseNoti}
                  >
                    {/* thong bao */}
                    <div className="icon">
                      <IoMdNotificationsOutline />
                    </div>
                    <span className="links_name">Thông Báo</span>
                  </a>
                </Link>
                <span className="tooltip">Thông Báo</span>
              </li>
              <li>
                <Link to="/chat">
                  <a
                    className={chooseChat ? "home" : ""}
                    onClick={this.chooseChat}
                  >
                    <div className="icon">
                      <span className="fa fa-comment-dots"></span>
                    </div>
                    <span className="links_name">Chat</span>
                  </a>
                  <span className="tooltip">Chat</span>
                </Link>
              </li>
              <li id="bangdiem">
                <Link to="/list-students">
                  <a
                    className={chooseList ? "home" : ""}
                    onClick={this.chooseList}
                  >
                    {/* danh sach sinh vien */}
                    <div className="icon">
                      <BsClipboardData />
                    </div>
                    <span className="links_name">DS Sinh viên</span>
                  </a>
                </Link>
                <span className="tooltip">DS Sinh viên</span>
              </li>
              <li className="chart">
                <Link to="/chart">
                  <a
                    className={chooseChart ? "home" : ""}
                    onClick={this.chooseChart}
                  >
                    <div className="icon">
                      <span className="fa fa-chart-bar"></span>
                    </div>
                    <span className="links_name">Biểu đồ điểm</span>
                  </a>
                </Link>
                <span className="tooltip">Biểu đồ điểm</span>
              </li>
              <li className="profile">
                <Link to="/profile">
                  <a
                    className={chooseProfile ? "home" : ""}
                    onClick={this.chooseProfile}
                  >
                    <div className="icon">
                      <span className="fa fa-id-card"></span>{" "}
                    </div>
                    <span className="links_name">Hồ sơ</span>
                  </a>
                  <span className="tooltip">Hồ sơ</span>
                </Link>
              </li>
              <li className="logout" onClick={this.logout}>
                <Link to="/notification">
                  {/* Log out */}
                  <div className="icon">
                    <BiLogOut />
                  </div>
                  <span className="links_name">Đăng Xuất</span>
                </Link>
                <span className="tooltip">Đăng Xuất</span>
              </li>
            </ul>
          </div>
          <div className={openNav ? "nav_open" : "nav_close"}>
            <div>{this.show(routes)}</div>
          </div>
        </section>
      </Router>
    );
  }

  show = (routes) => {
    var result = null;
    if (routes.length > 0) {
      result = routes.map((route, index) => {
        return (
          <Route
            key={index}
            path={route.path}
            exact={route.exact}
            component={route.main}
          />
        );
      });
    }
    return <Switch>{result}</Switch>;
  };
}

export default NavBar;
