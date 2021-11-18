/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from "react";

class Profile extends Component {
    render() {
        return (
            <div className='container'>
                <h2>Thông tin cá nhân</h2>
                <fieldset className='info'>
                    <legend>
                        <b>Thông tin cá nhân</b>
                    </legend>
                    <section>
                        <div className='left'>
                            <img className='avatar' src='https://i.imgur.com/k88evbb.png' width='150px' height='150px' />
                        </div>
                        <div className='left ml-50'>
                            <p  >Mã sinh viên: </p>
                            <input  type='text' name='msv'/>
                            <p>Họ và tên: </p>
                            <input type='text' name='name'/>
                            <p>Ngày sinh:</p>
                            <input type='date' name='msv' />
                            <p>Giới tính: Nam</p>
                            <p >SĐT: </p>
                            <input type='text' name='phone' />
                            <p>Địa chỉ E-mail khác: </p>
                            <input type='email' name='email_gg' />
                            <p>Địa chỉ: </p>
                            <input type='text' name='address' />
                        </div>
                    </section>                    
                </fieldset> <br/> <hr/>
                <fieldset className='gpa'>
                    <legend>
                        <b>Điểm số</b>
                    </legend>
                    <section>
                        <div className='ml-20'>
                            <p>Tổng số tín chỉ đã đăng ký:</p>
                            <input type='number' name='tc' />
                            <p>Điểm trung bình :</p>
                            <input type='number' name='mark' />
                        </div>
                    </section>   
                </fieldset> <br/>
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

export default Profile;