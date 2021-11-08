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
                        <img src='https://img.lovepik.com/element/45004/4990.png_860.png'/>
                    </section>
                </fieldset> <br/> <hr/>
                <fieldset className='address'>
                    <legend>
                        <b>Điểm số</b>
                    </legend>
                    <section>

                    </section>
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