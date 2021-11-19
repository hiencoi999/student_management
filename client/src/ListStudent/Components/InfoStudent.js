/* eslint-disable react/jsx-pascal-case */
/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from "react";
import { Link } from "react-router-dom";
import CallApi from "../../API/CallApi";
import styled from "styled-components";

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
        this.setState({
          student: data,
        });
      });
    }
  }

  render() {
    var { student } = this.state;
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
                <input type="text" name="msv" value={student.msv} />
                <p style={{ marginTop: "10px" }}>Họ và tên: </p>
                <input type="text" name="name" value={student.name} />
                <p style={{ marginTop: "10px" }}>Ngày sinh:</p>
                <input type="date" name="birthday" value={student.birthday} />
              </Left_div>
              <Right_div>
                <p>Giới tính:</p>
                <input
                  style={{ marginBottom: "10px" }}
                  type="text"
                  name="gender"
                  value={student.gender}
                />
                <p>SĐT: </p>
                <input type="text" name="phone" value={student.phone} />
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
                  value={student.address}
                />
              </Right_div>
            </Infor>
          </Infor_site>
          <Gpa_site>
            <Title_gpa>Điểm số</Title_gpa>
            <p>Tổng số tín chỉ đã đăng ký:</p>
            <input type="number" name="tc" value={student.sum_of_credits} />
            <p style={{ marginTop: "30px" }}>Điểm trung bình :</p>
            <input type="number" name="mark" value={student.gpa} />
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
          >
            <span className="fa fa-save"></span> &nbsp; Ghi nhận
          </button>
          <button className="btn btn-danger">
            <span className="fa fa-window-close"></span> &nbsp; Hủy bỏ
          </button>
        </Btn_site>
      </div>
    );
  }
}
export default InfoStudent;
