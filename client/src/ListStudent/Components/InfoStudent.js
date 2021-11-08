/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from "react";
import './InfoStudent.css';
import { Link } from 'react-router-dom';

class InfoStudent extends Component {
    render() {
        return (
            <div className='container'>
                <h2>Thông tin chi tiết</h2>
                <fieldset className='info'>
                    <legend>
                        <b>Thông tin cá nhân</b>
                    </legend>
                    <section>
                        <div className='left'>
                            <img className='avatar' src='https://i.imgur.com/k88evbb.png' width='150px' height='150px' />
                        </div>
                        <div className='left ml-50'>
                            <p>Mã sinh viên: _______</p>
                            <p>Họ và tên: _________</p>
                            <p>Ngày sinh: dd/mm/yyyy</p>
                            <p className='left'>Giới tính: Nam</p>
                            <p className='left ml-50'>SĐT: ___________</p>
                            <p>Địa chỉ E-mail ĐHQGHN: </p>
                            <p>Địa chỉ E-mail khác: </p>
                        </div>
                    </section>
                    <div className='address ml-20'>
                        <p className='left'>Quê quán: Phường/Xã :</p>
                        <label className='left ml-10'>Thanh Bình Thịnh</label>
                        <p className='left ml-10'>Quận/Huyện:</p>
                        <label className='left ml-10'>Đức Thọ</label>
                        <p className='left ml-10'>Tỉnh/Thành phố:</p>
                        <label className='left ml-10'>Hà Tĩnh</label>
                        <hr />
                        <p className='left'>Chỗ ở hiện nay: Số nhà :</p>
                        <label className='left ml-10'>2</label>
                        <p className='left ml-10'>Đường:</p>
                        <label className='left ml-10'>Mỹ Đình</label>
                        <p className='left ml-10'>Phường:</p>
                        <label className='left ml-10'>Mỹ Đình 1</label>
                        <p className='left ml-10'>Quận:</p>
                        <label className='left ml-10'>Nam Từ Liêm</label>
                        <p className='left ml-10'>Thành phố:</p>
                        <label className='left ml-10'>Hà Nội</label>
                    </div>
                    
                </fieldset> <br/> <hr/>
                <fieldset className='gpa'>
                    <legend>
                        <b>Điểm số</b>
                    </legend>
                    
                </fieldset> <br/>
                <Link to='/liststd' className='goback btn btn-danger'>
                    <span className="fa fa-arrow-left"></span> &nbsp; Quay lại
                </Link>
                <button type='submit' className='btn btn-primary'>
                    <span className='fa fa-save'></span> &nbsp; Ghi nhận
                </button> &nbsp;
                <button className='btn btn-danger'>
                    <span className='fa fa-window-close'></span> &nbsp; Hủy bỏ
                </button>
            </div>
        )
    }
}
export default InfoStudent;