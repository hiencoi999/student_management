import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import NavBar from "./HomePage/NavBar";
import Login from "./Login/Login";

const Invalid = () => {
  return <Redirect to="/login" />;
};

class StudentManagement extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/home" component={NavBar} />
          <Route exact path="/login" component={Login} />
          <Route path="/" component={Invalid} />
        </Switch>
      </Router>
    );
  }
}

export default StudentManagement;
