/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */

import React, { Component } from "react";
import "./NavBar.css";
import "boxicons";
import { AiOutlineHome } from "react-icons/ai";
import { BsClipboardData } from "react-icons/bs";
import { IoMdNotificationsOutline } from "react-icons/io";
import { BiLogOut } from "react-icons/bi";
import { MdOutlineNightsStay } from "react-icons/md";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Redirect } from "react-router-dom";
import Home from "./Home";
import Notification from "./Notification";
import ListStudent from "../../ListStudent/ListStudent";
import Logout from "../../Login/Logout";

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      openNav: false,
      chooseHome: true,
      chooseNoti: false,
      chooseList: false,
      chooseNight: false,
      chooseLogout: false,
      isLogin: localStorage.getItem("accessToken") != null,
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
      chooseList: false,
    });
  };

  chooseNoti = () => {
    this.setState({
      chooseHome: false,
      chooseNoti: true,
      chooseList: false,
    });
  };
  chooseList = () => {
    this.setState({
      chooseHome: false,
      chooseNoti: false,
      chooseList: true,
    });
  };

  hoso = () => {
    localStorage.removeItem("accessToken");
    return <Redirect to="/login" />;
  };

  render() {
    if (this.state.isLogin === false) {
      return <Redirect to="/login" />;
    }
    var {
      openNav,
      chooseHome,
      chooseNoti,
      chooseList,
      chooseNight,
      chooseLogout,
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
                  <a>
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
                    <span className="links_name">Bảng Điểm</span>
                  </a>
                </Link>
                <span className="tooltip">Bảng Điểm</span>
              </li>
              <li className="night_mode">
                <a>
                  {/* night mode */}
                  <div className="icon">
                    <MdOutlineNightsStay />
                  </div>
                  <span className="links_name">Night mode</span>
                </a>
                <span className="tooltip">Night mode</span>
              </li>
              <li className="profile">
                <Link to="/profile">
                  <a>
                    <div className="icon">
                      <span className="fa fa-id-card"></span>{" "}
                    </div>
                    <span className="links_name">Hồ sơ</span>
                  </a>
                  <span className="tooltip">Hồ sơ</span>
                </Link>
              </li>
              <li className="logout" onClick={this.hoso}>
                <Link to="/logout">
                  <a>
                    {/* Log out */}
                    <div className="icon">
                      <BiLogOut />
                    </div>
                    <span className="links_name">Đăng Xuất</span>
                  </a>
                  <span className="tooltip">Đăng Xuất</span>
                </Link>
              </li>
            </ul>
          </div>
          <div className={openNav ? "nav_open" : "nav_close"}>
            <div>
              <Switch>
                <Route path="/home">
                  <Home />
                </Route>
                <Route path="/notification">
                  <Notification />
                </Route>
                <Route path="/list-students">
                  <ListStudent />
                </Route>
                <Route path="/logout">
                  <Logout />
                </Route>
              </Switch>
            </div>
          </div>
        </section>
      </Router>
    );
  }
}

export default NavBar;
