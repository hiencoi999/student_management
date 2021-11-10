import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import NavBar from "./HomePage/NavBar";
import Login from "./Login/Login";
import Notification from "./HomePage/Component/Notification";
import Chart from "./Chart/Chart";
import Chat from "./Chat/Chat";
import Home from "./HomePage/Component/Home";
import ListStudent from "./ListStudent/ListStudent";
//This "/" path is not used
// const InvalidPage = () => {
//   return <Redirect to="/login" />;
// };

class StudentManagement extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/home" component={NavBar} />
          <Route exact path="/login" component={Login} />
          {/* <Route path="/" component={InvalidPage} /> */}
          {/* <Route path="/home">
            <Home />
          </Route> */}
          {/* <Route path="/notification">
            <Notification />
          </Route>
          <Route path="/chat" exact>
            <Chat />
          </Route>
          <Route path="/list-students" exact>
            <ListStudent />
          </Route>
          <Route path="/chart" exact>
            <Chart />
          </Route> */}
          {/* <Route path="/list-students/add" exact>
                  <AddForm />
                </Route>
                <Route path="/list-students/sua" exact>
                  <InfoStudent />
                </Route> */}
        </Switch>
      </Router>
    );
  }
}

export default StudentManagement;
