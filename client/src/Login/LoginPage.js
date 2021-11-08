// import axios from "axios";
// import React, { useState } from "react";

// import "./LoginPage.css";

// const LoginPage = () => {
//   //context
//   // const { loginUser } = useContext(AuthContext);

//   const [loginForm, setLoginForm] = useState({
//     username: "",
//     password: "",
//   });

//   const { username, password } = loginForm;

//   const onChangeLoginForm = (event) =>
//     setLoginForm({ ...loginForm, [event.target.name]: event.target.value });

//   const clickBtn = () => {
//     var x = document.getElementById("modalId");
//     var y = document.getElementById("loginForm");
//     x.style.display = "block";
//     y.style.display = "block";
//   };

//   const closeBtn = () => {
//     var x = document.getElementById("modalId");
//     var y = document.getElementById("loginForm_1");
//     x.style.display = "none";
//     y.style.display = "none";
//   };

//   axios
//     .post("http://localhost:5000/login", {
//       username: "19021269@vnu.edu.vn",
//       password: "12345",
//     })
//     .then(function (response) {
//       console.log(response);
//     })
//     .catch(function (error) {
//       console.log(error);
//     });

//   return (
//     <div style={{ textAlign: "center" }}>
//       <p id="welcome">
//         STUDENT <span id="welcome_1">MANAGEMENT</span>
//       </p>

//       <button onClick={clickBtn} className="loginBtn">
//         LOGIN
//       </button>

//       <p
//         style={{
//           lineHeight: "0.1rem",
//           fontSize: "0.8rem",
//           color: "#949191",
//           marginTop: "40px",
//         }}
//       >
//         Made by Gr3 - INT3306 22
//       </p>

//       <p style={{ lineHeight: "0.1rem", fontSize: "0.8rem", color: "#949191" }}>
//         University of Engineering & Technology
//       </p>

//       <div id="modalId" className="_modal">
//         <form
//           className="_loginForm"
//           id="loginForm"
//           style={{ border: "3px solid rgba(0, 0, 0, 0.2)", display: "block" }}
//         >
//           <span id="close" onClick={closeBtn}>
//             X
//           </span>
//           <div className="_formElm form">
//             <h3>LOGIN</h3>
//           </div>
//           {/* username */}
//           <div className="_formElm">
//             <label
//               className="_account"
//               style={{ lineHeight: "20px", marginLeft: "-120px" }}
//             >
//               {" "}
//               Account{" "}
//             </label>
//             <input
//               type="text"
//               id="accInput"
//               className="_account"
//               name="username"
//               placeholder="Enter your username"
//               value={username}
//               onChange={onChangeLoginForm}
//             />
//           </div>
//           <br />
//           {/* password */}
//           <div className="_formElm">
//             <label
//               className="_password"
//               style={{ lineHeight: "20px", marginLeft: "-120px" }}
//             >
//               {" "}
//               Password{" "}
//             </label>
//             <input
//               type="text"
//               id="passInput"
//               className="_password"
//               name="password"
//               placeholder="Enter your password"
//               value={password}
//               onChange={onChangeLoginForm}
//             />
//           </div>{" "}
//           <br />
//           <div className="_formElm form">
//             <button className="_button" type="submit">
//               LOGIN
//             </button>
//           </div>
//           <br />
//         </form>
//         <form
//           className="_loginForm"
//           id="loginForm_1"
//           style={{
//             border: "3px solid rgba(0, 0, 0, 0.2)",
//             display: "none",
//             height: "460px",
//             marginTop: "90px",
//           }}
//         >
//           <span id="close" onClick={closeBtn}>
//             X
//           </span>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default LoginPage;
