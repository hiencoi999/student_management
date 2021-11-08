/* eslint-disable no-restricted-globals */
/* eslint-disable react/style-prop-object */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class OneRowData extends Component {
  
  dateTransform = (value) => {
    var s = value.toString().split('-');
    if(s[0] <=31 && s[0] >=1) {return [s[0],s[1],s[2]].join('/');}
    else return [s[2],s[1],s[0]].join('/');
  }

  onDelete = (id) => {
    if (confirm('Bạn chắc chắn muốn xóa sinh viên này ?')) {
      this.props.onDelete(id);
    }
  }

  render() {

      //var day = this.dateTransform(student.date);
    var { student, index } = this.props;
    //console.log(student.ngaysinh);
      return (
            <tr height='30px'>
              <td className='text_center'>{index+1}</td>
              <td className='text_center'>{student.msv}</td>
              <td className='text_center'>{student.name}</td>
              <td className='text_center'>{this.dateTransform(student.date)}</td>
              <td className='text_center'>{student.gender}</td>
              <td className='text_center'>{student.mark}</td>
              <td className='text_center'>{student.status}</td>
              <td className='text_center'>
              <Link to='/liststd/sua' className='btn btn-warning'>
                  <span className='fa fa-pencil'></span> &nbsp;Sửa
              </Link> &nbsp;
              <button className='btn btn-danger' type='button' onClick={() => this.onDelete(student.id)}>
                  <span className='fa fa-trash'></span> &nbsp;Xóa
              </button> &nbsp;
              </td>
            </tr>
      );
    }
}

export default OneRowData;
