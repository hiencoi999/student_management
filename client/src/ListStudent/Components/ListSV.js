/* eslint-disable react/style-prop-object */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react'
import Sort from './Sort';
import OneRowData from './OneRowData';
import CallApi from './../../API/CallApi';

class ListSV extends Component {

  constructor(props) {
    super(props);
    this.state = {
      students: [],
      filterMsv : '',
      filterName : '',
      filterGender : '',
      filterMark : '',
      filterStatus : ''
    }
  }

  componentDidMount() {
    CallApi('students', 'GET', null).then(res => {
      this.setState({
        students : res.data 
      })
    })
  }

  findIndex = (id) => {
    var {students} = this.state;
    var result = -1;
    students.forEach((student, index) => {
      if(student.id === id) result = index
    });
    return result;
  }

  onDelete = (id) => {
    var { students } = this.state;
    CallApi(`students/${id}`, 'DELETE', null).then(res => {
      if (res.status === 200) {
        var index = this.findIndex(id);
        if (index !== -1) {
          students.splice(index, 1);
          this.setState({
            students: students
          })
        }
      }
    })
  }

  onChange = (event) => {
    var target = event.target;
    var name = target.name;
    var value = target.value;
    this.props.onFilter(
      name === 'filterMsv' ? value : this.state.filterMsv,
      name === 'filterName' ? value : this.state.filterName,
      name === 'filterGender' ? value : this.state.filterGender,
      name === 'filterMark' ? value : this.state.filterMark,
      name === 'filterStatus' ? value : this.state.filterStatus
    );
    this.setState({
      [name] : value
    })
  }
  
  render() {
    var {students, filterMsv, filterName, filterGender, filterMark, filterStatus } = this.state;
    var studentList = students.map((student, index) => {
      return <OneRowData key={student.id} index={index} student={student} onDelete={this.onDelete}/>
    })
    return (
      <div>
        <table className="table table-bordered table-hover">
          <Sort onSort={this.props.onSort} />
                    
            <tbody>
              <tr>
                <td></td>
                <td>
                  <input type='text' className='form-control' name='filterMsv' value={filterMsv} onChange= {this.onChange} />
                </td>
                <td>
                  <input type='text' className='form-control' name='filterName' value={filterName} onChange= {this.onChange}/>
                </td>
                <td></td>
                <td> 
                  <select className='form-control' name='filterGender' value={filterGender} onChange= {this.onChange}>
                            <option value='all'></option>
                            <option value="Nam">Nam</option>
                            <option value="Nữ">Nữ</option>
                  </select>
                </td>
                <td>
                  <select className='form-control' name='filterMark' value={filterMark} onChange= {this.onChange}>
                            <option value='all'></option>
                            <option value="3.6-4.0">3.6 - 4.0</option>
                            <option value="3.2-3.6">3.2 - 3.6</option>
                            <option value="3.0-3.2">3.0 - 3.2</option>
                            <option value="2.5-3.0">2.5 - 3.0</option>
                            <option value="2.0-2.5">2.0 - 2.5</option>
                            <option value="2.0">&lt; 2.0</option>
                  </select>
                </td>
                <td>
                  <select className="form-control" name="filterStatus" value={filterStatus} onChange= {this.onChange}>
                            <option value='all'></option>
                            <option value='Không'>Không </option>
                            <option value='Nguy cơ nghỉ học'>Nguy cơ nghỉ học</option>
                            <option value='Cảnh báo học vụ'>Cảnh báo học vụ</option>
                            <option value='Thiếu tín chỉ'>Thiếu tín chỉ</option>
                            <option value='Thiếu học phí'>Thiếu học phí</option>
                            <option value='Khen thưởng'>Khen thưởng</option>
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
