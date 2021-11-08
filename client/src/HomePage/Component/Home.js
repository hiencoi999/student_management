import axios from "axios";
import React, { Component } from "react";
import { Redirect } from "react-router-dom";

export default class Home extends Component {
  // async componentDidMount() {
  //   const config = {
  //     headers: {
  //       Authorization: "Bearer " + localStorage.getItem("accessToken"),
  //     },
  //   };

  // await axios
  //   .get("user", config)
  //   .then(function (response) {
  //     console.log(response);
  //   })
  //   .catch(function (error) {
  //     console.log(error);
  //   });
  // }

  render() {
    if (localStorage.getItem("accessToken") == null) {
      return <Redirect to="/auth" />;
    }
    return <h1>HOMEPAGE</h1>;
  }
}
