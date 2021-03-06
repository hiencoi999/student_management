/* eslint-disable react/jsx-pascal-case */
/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from "react";
import { Link } from "react-router-dom";
import CallApi from "../API/CallApi";
import styled from "styled-components";
import moment from "moment";
import "../index.css";
import avatar from "./avatar.png";

const Title = styled.h2`
  text-align: center;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  text-shadow: 2px 7px 5px rgba(0, 0, 0, 0.3);
  font-size: 5rem;
  font-weight: bolder;
  margin-top: 5%;
  color: #0b5592;
`;
const Infor_site = styled.div`
  background-color: white;
  padding: 2rem 3rem;
  width: 60%;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  border-radius: 10px;
  background-color: whitesmoke;
`;
const Infor = styled.div`
  display: flex;
`;
const Left_div = styled.div`
  padding-right: 10px;
  padding-left: 10px;
`;
const Right_div = styled.div`
  padding-right: 10px;
  padding-left: 10px;
`;
const Image_div = styled.div`
  padding-top: 30px;
`;
const Title_infor = styled.p`
  font-size: 2.5rem;
  width: 60%;
  margin: auto;
  padding-bottom: 20px;
  text-align: center;
  font-weight: bold;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  text-shadow: 2px 7px 5px rgba(0, 0, 0, 0.3),
    0px -4px 10px rgba(255, 255, 255, 0.3);
`;
const Title_gpa = styled.p`
  font-size: 2.5rem;
  // width: 50%;
  // margin: auto;
  padding-bottom: 20px;
  font-weight: bold;
  //text-align: center;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  text-shadow: 2px 7px 5px rgba(0, 0, 0, 0.3),
    0px -4px 10px rgba(255, 255, 255, 0.3);
`;
const Gpa_site = styled.div`
  // border: 1px solid black;
  background-color: whitesmoke;
  border-radius: 10px;
  width: 30%;
  padding: 2rem 3rem;
  margin-left: 5%;
  height: 50vh;
  align-items: center;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  text-align: center;
`;
const Site = styled.div`
  display: flex;
  margin-top: 10%;
`;
const Btn_site = styled.div`
  position: static;
  margin-top: 5vh;
  text-align: center;
`;

class InfoStudent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      msv: "",
      name: "",
      birthday: "",
      gender: "",
      phone: "",
      address: "",
      sum_of_credits: 0,
      gpa: 0,
      status: "",
      lop: "",
    };
  }

  componentDidMount() {
    var { match } = this.props;
    if (match) {
      var id = sessionStorage.getItem("userId");
      CallApi(`student/${id}`, "GET", null).then((res) => {
        var data = res.data.StudentDetail[0];
        this.setState({
          msv: data.msv,
          name: data.name,
          birthday: data.birthday,
          gender: data.gender,
          phone: data.phone,
          address: data.address,
          sum_of_credits: data.sum_of_credits,
          gpa: data.gpa,
          status: data.status,
          lop: data.lop,
        });
      });
    }
  }

  onChange = (event) => {
    var target = event.target;
    var name = target.name;
    var value = target.value;
    this.setState({
      [name]: value,
    });
  };

  onSubmit = (event) => {
    event.preventDefault();
    var id = sessionStorage.getItem("userId");
    CallApi(`student/update/${id}`, "PATCH", {
      name: this.state.name,
      birthday: this.state.birthday,
      gender: this.state.gender,
      phone: this.state.phone,
      address: this.state.address,
    }).then((res) => {
      alert("C???p nh???t th??nh c??ng");
    });
  };

  render() {
    var {
      msv,
      name,
      birthday,
      gender,
      phone,
      address,
      sum_of_credits,
      gpa,
      status,
      lop,
    } = this.state;
    return (
      <div className="container">
        <Title>Th??ng tin c?? nh??n</Title>
        <Site>
          <Infor_site>
            <Title_infor>Th??ng tin c?? nh??n</Title_infor>
            <Infor>
              <Image_div>
                <img
                  className="avatar"
                  src={avatar}
                  width="150px"
                  height="150px"
                />
              </Image_div>
              <Left_div>
                <p>M?? sinh vi??n: </p>
                <label>{msv}</label>
                <p>Gi???i t??nh:</p>
                <label>{gender}</label>
                <p style={{ marginTop: "10px" }}>H??? v?? t??n: </p>
                <input
                  style={{ width: "90%" }}
                  type="text"
                  name="name"
                  placeholder={name}
                  onChange={this.onChange}
                />
                <p style={{ marginTop: "10px" }}>Ng??y sinh:</p>
                <input
                  style={{ width: "90%" }}
                  type="text"
                  name="birthday"
                  placeholder={moment(birthday).format("DD/MM/YYYY")}
                  onChange={this.onChange}
                />
              </Left_div>
              <Right_div>
                <p>L???p: </p>
                <label> {lop} </label>
                <p>S??T: </p>
                <input
                  style={{ width: "90%" }}
                  type="text"
                  name="phone"
                  placeholder={phone}
                  onChange={this.onChange}
                />
                <p style={{ marginTop: "10px" }}>?????a ch???: </p>
                <textarea
                  style={{
                    width: "90%",
                    resize: "none",
                    minHeight: "9rem",
                  }}
                  name="address"
                  placeholder={address}
                  onChange={this.onChange}
                />
              </Right_div>
            </Infor>
          </Infor_site>
          <Gpa_site>
            <Title_gpa>??i???m s???</Title_gpa>
            <p>T???ng s??? t??n ch??? ???? ????ng k??:</p>
            <label>{sum_of_credits}/158</label>
            <br />
            <progress min="0" max="158" value={sum_of_credits}></progress>
            <p style={{ marginTop: "30px" }}>??i???m trung b??nh :</p>
            <label>{gpa}</label>
            <p>Tr???ng th??i: </p>
            <label
              className={
                status === "Khen th?????ng"
                  ? "change_status_green"
                  : status === "Thi???u t??n ch???" || status === "Thi???u h???c ph??"
                  ? "change_status_yellow"
                  : status === "Nguy c?? ngh??? h???c" ||
                    status === "C???nh b??o h???c v???"
                  ? "change_status_red"
                  : ""
              }
            >
              {status}
            </label>
          </Gpa_site>
        </Site>
        <Btn_site>
          {/* <Link
            to='/home/list-students'
            className='goback btn btn-danger'
            style={{ marginRight: "20px" }}>
            <span className='fa fa-arrow-left'></span> &nbsp; Quay l???i
          </Link> */}
          <button
            type="submit"
            className="btn btn-primary"
            style={{ marginRight: "20px" }}
            onClick={this.onSubmit}
          >
            <span className="fa fa-save"></span> &nbsp; Ghi nh???n
          </button>
          <Link
            to="/home/change-password"
            className="btn btn-primary"
            style={{ marginRight: "20px" }}
          >
            <span className="fa fa-key"></span> &nbsp; ?????i m???t kh???u
          </Link>
        </Btn_site>
      </div>
    );
  }
}
export default InfoStudent;
