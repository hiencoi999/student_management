/* eslint-disable react/style-prop-object */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react'
import './ListStudent.css';
import ListSV from './Components/ListSV';
import { Link } from 'react-router-dom';
class ListStudent extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  render() {
      return (
        <div className="Container">
          <div className="text_center">
            <h1>Quản lý sinh viên</h1>
          </div>            
            <div className='col-xs-12 col-sm-12 col-md-12 col-lg-12'>
              &nbsp;
              <Link to='/list-students/add' className="btn btn-primary">
                <span className="fa fa-plus"></span> &nbsp; Thêm sinh viên
              </Link> &nbsp;
              <Link to='/list-students/export-data' className='btn btn-primary data'>
                <span className='fa fa-file-export'></span>&nbsp; Xuất file Excel
              </Link>&nbsp;
              <Link to='/list-students/import-data' className='btn btn-primary data'>
                <span className='fa fa-file-import'></span>&nbsp; Nhập dữ liệu từ Excel
              </Link> 
                <div className="row">
                  <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                    <ListSV />
                  </div>
                </div> 
            </div>
        </div>
      );
    }
}

export default ListStudent;
