/* eslint-disable react/style-prop-object */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react'
import Sort from './Sort';
import OneRowData from './OneRowData';

class ListSV extends Component {

  constructor(props) {
    super(props);
    this.state = {
      filterMsv : '',
      filterName : '',
      filterGender : '',
      filterMark : '',
      filterStatus : ''
    }
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
        var students = this.props.student;
        var {filterMsv, filterName, filterGender, filterMark, filterStatus} = this.state;
        var studentList = students.map((student, index) => {
            return < OneRowData key={student.id} index ={index} student={student} onDelete={this.props.onDelete} />
        });
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
                            <option value='all'>Tất cả</option>
                            <option value="Nam">Nam</option>
                            <option value="Nữ">Nữ</option>
                          </select>
                        </td>
                        <td>
                          <select className='form-control' name='filterMark' value={filterMark} onChange= {this.onChange}>
                            <option value='all'>Tất cả</option>
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
                            <option value='all'>Tất cả</option>
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
