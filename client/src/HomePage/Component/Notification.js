import React from "react";
import axios from "axios";

const Notification = () => {
  axios({
    method: "post",
    url: "localhost:5000/student",
    data: {
      firstName: "Fred",
      lastName: "Flintstone",
    },
  })
    .then((result) => {
      console.log(result);
    })
    .catch((err) => {
      console.log(err);
    });

  return (
    <div>
      <p>THONG BAO</p>
      <hr></hr>
      <div className="alert">
        <span className="notiCloseBtn">x</span>
      </div>
    </div>
  );
};

export default Notification;
