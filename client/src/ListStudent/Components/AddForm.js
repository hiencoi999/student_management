import React, { Component } from 'react'



class AddForm extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            msv : '',
            name : '',
            date : '',
            gender : '',
            mark : '',
            status : ''
        }
    }
    
    onChange = (event) => {
        var target = event.target;
        var name = target.name;
        var value = target.value;
        this.setState({
            [name] : value
        })
    }

    onSubmit = (event) => {
        event.preventDefault();
        this.props.onSubmit(this.state);
        this.onClear();
        this.onCloseAddForm();
    }

    onCloseAddForm = () => {
        this.props.onCloseAddForm();
    }

    onClear = () => {
        this.setState({
            msv : '',
            name : '',
            date : '',
            gender : '',
            mark : '',
            status : ''
        })
        this.onCloseAddForm();
    }

    render() {
      return (
        <div className="panel panel-warning">
            <div className="panel-heading">
                <h3 className="panel-title">Thêm sinh viên
                <span className="fa fa-times-circle text_right" onClick={this.onCloseAddForm}></span></h3>
            </div>  
            <div className="panel-body">
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>MSV: </label>
                        <input type="text" className="form-control" name="msv" value={this.state.msv} onChange={this.onChange}/>
                        <label>Họ và tên: </label>
                        <input type="text" className="form-control" name="name" value={this.state.name} onChange={this.onChange}/>
                        <label>Ngày sinh: </label>
                        <input type="date" className="form-control" name="date" value={this.state.date} onChange={this.onChange}/>
                        <label>Giới tính:</label>
                        <select className="form-control" name="gender" value={this.state.gender} onChange={this.onChange}>
                            <option>--Select--</option>
                            <option value="Nam">Nam</option>
                            <option value="Nữ">Nữ</option>
                        </select>
                        <label>GPA: </label>
                        <input type="text" className='form-control' name="mark" value={this.state.mark} onChange={this.onChange}/>
                        <label>Trạng thái: </label>
                        <select className="form-control" name="status" value={this.state.status} onChange={this.onChange}>
                            <option>--Select--</option>
                            <option value='Không'>Không </option>
                            <option value='Nguy cơ nghỉ học'>Nguy cơ nghỉ học</option>
                            <option value='Cảnh báo học vụ'>Cảnh báo học vụ</option>
                            <option value='Thiếu tín chỉ'>Thiếu tín chỉ</option>
                            <option value='Thiếu học phí'>Thiếu học phí</option>
                            <option value='Khen thưởng'>Khen thưởng</option>
                        </select> <br/>
                        <div className="text_center">
                            <button type="submit" className="button submit">
                                <span className="fa fa-plus"></span>Lưu lại
                            </button> &nbsp;
                            <button type="button" className="button cancle" onClick={this.onClear}>
                                <span className="fa fa-close"></span>Hủy bỏ
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
      );
    }
}

export default AddForm;
