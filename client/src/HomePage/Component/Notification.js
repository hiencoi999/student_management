import React from "react";
import axios from "axios";
import "../NavBar.css";

const Notification = () => {
  // let isAuth = localStorage.getItem("accessToken") != null;

  // if (!isAuth) {
  //   return <Redirect to="/login" />;
  // } else {
  return (
    <div>
      <p className="elements">
        THÔNG<span id="noti"> BÁO</span>
      </p>
      <div className="notiManagement">
        <div>
          <p id="add-noti-title">THÊM THÔNG BÁO</p>
          <textarea id="notiText" placeholder="Thêm thông báo..."></textarea>
          <br />
          <button id="add-noti-btn">THÊM</button>
        </div>
      </div>
      <div className="alert">
        <div className="hiddenNotiDetailBtn" id="notiHiddenBtn">
          <span>?</span>
        </div>
        <div style={{ marginLeft: "30px" }}>Danh sách thông báo</div>
        <span id="notiCloseBtn">
          <span>!</span>
        </span>
      </div>
      <div className="notiDetail" id="hiddenNotiDetail">
        an huy 123
      </div>
    </div>
  );
  // }
};

export default Notification;
