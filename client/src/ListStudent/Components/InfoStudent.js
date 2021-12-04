/* eslint-disable react/jsx-pascal-case */
/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import CallApi from "../../API/CallApi";
import styled from "styled-components";
import moment from "moment";

const Title = styled.h2`
  text-align: center;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-size: 4rem;
  font-weight: bolder;
  margin-top: 5%;
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
  max-width: 35%;
`;
const Right_div = styled.div`
  padding-right: 10px;
  padding-left: 10px;
  max-width: 35%;
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
  height: 45vh;
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
  margin-top: 10%;
  text-align: center;
`;
class InfoStudent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      student: [],
    };
  }

  componentDidMount() {
    var { match } = this.props;
    if (match) {
      var id = match.params.id;
      CallApi(`student/${id}`, "GET", null).then((res) => {
        var data = res.data.StudentDetail[0];
        console.log(data);
        this.setState({
          student: data,
        });
      });
    }
  }

  onChange = () => {
    console.log("chua lam j ca");
  };

  render() {
    var { student } = this.state;
    console.log(student);
    return (
      <div className="container">
        <Title>Thông tin chi tiết</Title>
        <Site>
          <Infor_site>
            <Title_infor>Thông tin cá nhân</Title_infor>
            <Infor>
              <Image_div>
                <img
                  className="avatar"
                  src="https://i.imgur.com/k88evbb.png"
                  width="150px"
                  height="150px"
                />
              </Image_div>
              <Left_div>
                <p>Mã sinh viên: </p>
                <label>{student.msv}</label>
                <p style={{ marginTop: "10px" }}>Họ và tên: </p>
                <label>{student.name}</label>
                <p style={{ marginTop: "10px" }}>Ngày sinh:</p>
                <label>{moment(student.birthday).format("DD/MM/YYYY")}</label>
                <p>Giới tính:</p>
                <label>{student.gender}</label>
              </Left_div>
              <Right_div>
                <p>Lớp:</p>
                <label>{student.lop}</label>
                <p>SĐT: </p>
                <input
                  type="text"
                  name="phone"
                  placeholder={student.phone}
                  onChange={this.onChange}
                />
                {/* <p style={{ marginTop: "10px" }}>Địa chỉ E-mail khác: </p>
                <input type='email' name='email_gg' value={student.email} /> */}
                <p style={{ marginTop: "10px" }}>Địa chỉ: </p>
                <textarea
                  style={{
                    resize: "vertical",
                    width: "175px",
                    minHeight: "50px",
                    maxHeight: "65px",
                  }}
                  type="text"
                  name="address"
                  placeholder={student.address}
                  onChange={this.onChange}
                />
              </Right_div>
            </Infor>
          </Infor_site>
          <Gpa_site>
            <Title_gpa>Điểm số</Title_gpa>
            <p>Tổng số tín chỉ đã đăng ký:</p>
            <label>{student.sum_of_credits}/153</label> <br />
            <progress
              min="0"
              max="158"
              value={student.sum_of_credits}
            ></progress>
            <p style={{ marginTop: "30px" }}>Điểm trung bình :</p>
            <label>{student.gpa}</label>
            <p>Trạng thái: </p>
            <label style={{ color: "red" }}>{student.status}</label>
          </Gpa_site>
        </Site>
        <Btn_site>
          <Link
            to="/home/list-students"
            className="goback btn btn-danger"
            style={{ marginRight: "20px" }}
          >
            <span className="fa fa-arrow-left"></span> &nbsp; Quay lại
          </Link>
          <button
            type="submit"
            className="btn btn-primary"
            style={{ marginRight: "20px" }}
            onClick={this.onSubmit}
          >
            <span className="fa fa-save"></span> &nbsp; Ghi nhận
          </button>
        </Btn_site>
      </div>
    );
  }
}
export default InfoStudent;
