/* eslint-disable react/style-prop-object */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import Sort from "./Sort";
import OneRowData from "./OneRowData";
import CallApi from "./../../API/CallApi";

class ListSV extends Component {
  constructor(props) {
    super(props);
    this.state = {
      students: [],
      filter: {
        msv: "",
        name: "",
        gender: "",
        gpa: "",
        status: "",
      },
      sort: {
        by: "msv",
        value: 1,
      },
    };
  }

  componentDidMount() {
    CallApi("student", "GET", null).then((res) => {
      this.setState({
        students: res.data.ListStudents,
      });
    });
  }

  findIndex = (_id) => {
    var { students } = this.state;
    var result = -1;
    students.forEach((student, index) => {
      if (student._id === _id) result = index;
    });
    return result;
  };

  onDelete = (_id) => {
    var { students } = this.state;
    CallApi(`student/delete/${_id}`, "DELETE", null).then((res) => {
      if (res.status === 200) {
        var index = this.findIndex(_id);
        if (index !== -1) {
          students.splice(index, 1);
          this.setState({
            students: students,
          });
        }
      }
    });
  };

  onChange = (event) => {
    var target = event.target;
    var name = target.name;
    var value = target.value;
    this.setState({
      filter: {
        [name]: value,
      },
    });
  };

  onSort = (sortBy, sortValue) => {
    this.setState({
      sort: {
        by: sortBy,
        value: sortValue,
      },
    });
  };

  render() {
    var { students, filter, sort } = this.state;
    if (filter) {
      if (filter.msv) {
        students = students.filter((student) => {
          return student.msv.indexOf(filter.msv) === 0;
        });
      }
      if (filter.name) {
        students = students.filter((student) => {
          return student.name.indexOf(filter.name) !== -1;
        });
      }
      if (filter.gender) {
        students = students.filter((student) => {
          if (filter.gender === "all") return true;
          else return student.gender === filter.gender;
        });
      }
      if (filter.gpa) {
        students = students.filter((student) => {
          if (filter.gpa === "all") return true;
          else if (filter.gpa === "2.0") return student.gpa < 2.0;
          else {
            var gpa = filter.gpa.toString().split("-");
            return student.gpa > gpa[0] && student.gpa <= gpa[1];
          }
        });
      }
      if (filter.status) {
        students = students.filter((student) => {
          if (filter.status === "all") return true;
          else return student.status === filter.status;
        });
      }
    }

    if (sort) {
      if (sort.by === "msv") {
        students.sort((student1, student2) => {
          //console.log(typeof student1.name,'-',student2.name);
          if (student1.msv > student2.msv) return sort.value;
          else if (student1.msv < student2.msv) return -sort.value;
          else return 0;
        });
      } else if (sort.by === "name") {
        students.sort((student1, student2) => {
          if (student1.name.localeCompare(student2.name) < 0) return sort.value;
          else if (student1.name.localeCompare(student2.name) > 0)
            return -sort.value;
          else return 0;
        });
      } else {
        students.sort((student1, student2) => {
          if (student1.mark > student2.mark) return sort.value;
          else if (student1.mark < student2.mark) return -sort.value;
          else return 0;
        });
      }
    }
    var studentList = students.map((student, index) => {
      return (
        <OneRowData
          key={student.id}
          index={index}
          student={student}
          onDelete={this.onDelete}
        />
      );
    });
    return (
      <div>
        <table className="table table-bordered table-hover">
          <Sort onSort={this.onSort} />

          <tbody>
            <tr>
              <td></td>
              <td>
                <input
                  type="text"
                  className="form-control"
                  name="msv"
                  value={filter.msv}
                  onChange={this.onChange}
                />
              </td>
              <td>
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  value={filter.name}
                  onChange={this.onChange}
                />
              </td>
              <td></td>
              <td>
                <select
                  className="form-control"
                  name="gender"
                  value={filter.gender}
                  onChange={this.onChange}
                >
                  <option value="all"></option>
                  <option value="Nam">Nam</option>
                  <option value="Nữ">Nữ</option>
                </select>
              </td>
              <td>
                <select
                  className="form-control"
                  name="gpa"
                  value={filter.gpa}
                  onChange={this.onChange}
                >
                  <option value="all"></option>
                  <option value="3.6-4.0">3.6 - 4.0</option>
                  <option value="3.2-3.6">3.2 - 3.6</option>
                  <option value="2.5-3.0">2.5 - 3.2</option>
                  <option value="2.0-2.5">2.0 - 2.5</option>
                  <option value="2.0">&lt; 2.0</option>
                </select>
              </td>
              <td>
                <select
                  className="form-control"
                  name="status"
                  value={filter.status}
                  onChange={this.onChange}
                >
                  <option value="all"></option>
                  <option value="Không">Không </option>
                  <option value="Nguy cơ nghỉ học">Nguy cơ nghỉ học</option>
                  <option value="Cảnh báo học vụ">Cảnh báo học vụ</option>
                  <option value="Thiếu tín chỉ">Thiếu tín chỉ</option>
                  <option value="Thiếu học phí">Thiếu học phí</option>
                  <option value="Khen thưởng">Khen thưởng</option>
                </select>
              </td>
              <td></td>
            </tr>
            {studentList}
          </tbody>
        </table>
      </div>
    );
  }
}

export default ListSV;
