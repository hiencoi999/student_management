/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from "react";
import { BsClipboardData } from "react-icons/bs";
import { IoMdNotificationsOutline } from "react-icons/io";
import '../NavBar.css';
export default class Home extends Component {
  render() {
    return (
      <div id='main'>
        <div className='homepage'>
          <p className='elements' id='title'>
            Classe <span id='student'>369</span>
          </p>
          <hr className='elements' id='homehr' />
          <div className='introduction'>
            <h1 className='manage'>
              Everything
              <div id='_manage'>you need to manage your</div> educational
              institution
            </h1>
            <div className='manage_1'>Classe 369</div>
            <p id='_intro1'>
              Classe369 là 1 phần mềm tiện ích giúp quản lý sinh viên một cách
              ngắn gọn và đầy đủ nhất thông qua những thống kê xác thực nhất và
              nhanh nhất
            </p>
            <img className='homewallpaper' src='https://i.pinimg.com/originals/a5/f4/fb/a5f4fb117b65e2a5b624ef09395c4228.png'/>
            <div className='footer1'>
              <h1 id='_footer1'>
                No More Data Silos - Just Unified School Management Software
              </h1>
              <p id='_footer2'>
                Hàng ngàn tổ chức giáo dục ngày nay sử dụng hệ thống quản lý
                trường học phân mảnh và nền tảng phần mềm để quản lý các hoạt
                động hành chính và học tập của họ. Classe369 cung cấp một giải
                pháp hợp nhất tất cả trong một nền tảng đơn giản và đẹp mắt.
              </p>
            </div>

            {/* FOOTER CHUC NANG */}

            <div className='footer2'>
              <h1 id='_footer1'>Classe 369 features</h1>
              <hr className='elements' id='homehr' />
              <div className='footer_icons'>
                <span className='fa fa-comment-dots'></span>
              </div>
              <div className='footer_icons'>
                <span className='fa fa-chart-bar'></span>
              </div>
              <div className='footer_icons'>
                <BsClipboardData />
              </div>
              <div className='footer_icons'>
                <IoMdNotificationsOutline />
              </div>
              <br />

              <div className='footer_fn' id='footer_fn1'>
                Chat
              </div>
              <div className='footer_fn' id='footer_fn2'>
                Biểu đồ điểm
              </div>
              <div className='footer_fn' id='footer_fn3'>
                Danh sách sinh viên
              </div>
              <div className='footer_fn' id='footer_fn4'>
                Thông báo
              </div>
            </div>
          </div>
        </div>

      </div>
    )
  }
}
