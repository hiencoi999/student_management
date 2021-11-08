import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import NavBar from "./HomePage/Component/NavBar";
import Login from "./Login/Login";

var Auth = {
  isAuthenticated: localStorage.getItem("accessToken") != null,
};

// const PrivateRoute = ({ component: Component, ...rest }) => {
//   return (
//     <Route
//       {...rest}
//       render={(props) =>
//         Auth.isAuthenticated === true ? (
//           <Component {...props} />
//         ) : (
//           <Redirect to="/login" />
//         )
//       }
//     />
//   );
// };

class StudentManagement extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/home" component={NavBar} />

          {/* <NavBar /> */}
        </Switch>
      </Router>
      // <div> ALO</div>
    );
  }
}

export default StudentManagement;
