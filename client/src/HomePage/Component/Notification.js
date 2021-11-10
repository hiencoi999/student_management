import React from "react";
import axios from "axios";
import { Redirect } from "react-router";

const Notification = () => {
  // let isAuth = localStorage.getItem("accessToken") != null;

  // if (!isAuth) {
  //   return <Redirect to="/login" />;
  // } else {
  return (
    <div>
      <p>THONG BAO</p>
      <hr></hr>
      <div className="alert">
        <span className="notiCloseBtn">x</span>
      </div>
    </div>
  );
  // }
};

export default Notification;
