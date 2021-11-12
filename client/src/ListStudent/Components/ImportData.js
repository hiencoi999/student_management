/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from "react";
import { Link } from "react-router-dom";
import './ImportData.css';

class ImportData extends Component {
    
    onSubmit = () => {
        console.log('submit');
    }



    render() {
    return (
        <div className='container'>
            <h1 className='title'>Nhập sinh viên từ file Excel</h1> <br /> <br />
            <div className='import'>
                <label> Xin hãy chọn file Excel đúng như định dạng bên dưới: </label>
                <img />
                <input type='file' className='form-control' name='file' onChange={(e) => this.onChange()}/>
            </div> <br/>
            <div>
                <Link to='/list-students' className='btn btn-danger'>
                    <span className='fa fa-arrow-left'></span> &nbsp; Quay lại
                </Link> 
                <button type='submit' className='btn btn-primary mg-20' onClick={this.onSubmit}>
                    <span className='fa fa-save'></span> &nbsp; Ghi nhận
                </button> &nbsp;
                <button type='reset' className='btn btn-warning'>
                    <span className='fa fa-window-close'></span> &nbsp; Hủy bỏ
                </button>
            </div>
        </div>
    )
    }
}

export default ImportData;