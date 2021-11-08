/* eslint-disable react/style-prop-object */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react'
import './ListStudent.css';
import AddForm from './Components/AddForm';
import ListSV from './Components/ListSV';

class ListStudent extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      students : [],
      isDisplayAddFrom : false,
      filter : {
        msv : '',
        name : '',
        gender : '',
        mark : '',
        status : ''
      },
      sort : {
        by : 'msv',
        value : 1
      }
    }
  }

  componentDidMount() {
    if(localStorage && localStorage.getItem('students')) {
      var students = JSON.parse(localStorage.getItem('students'));
      this.setState({
        students : students
      })
    }
  }

  randomId() {
    return Math.floor((1+Math.random()) * 0x10000).toString(16).substring(1);
  }

  generateId() {
    return this.randomId() + this.randomId() + '-'+ this.randomId();
  }

  onToggleAddForm = () => {
    this.setState({
      isDisplayAddFrom : !this.state.isDisplayAddFrom
    })
  }

  onCloseAddFrom = () => {
    this.setState({
      isDisplayAddFrom : false
    })
  }

  onSubmit = (data) => {
    var {students} = this.state; 
    data.id = this.generateId();
    students.push(data);
    this.setState({
      students : students
    });
    localStorage.setItem('students', JSON.stringify(students));

    //console.log(data);  
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
    var {students} = this.state;
    var index = this.findIndex(id);
    if(index !== -1) {
      students.splice(index, 1);
      this.setState({
        students : students
      });
      localStorage.setItem('students', JSON.stringify(students));
    }
    this.onCloseAddFrom();
  }

  onFilter =(filterMsv, filterName, filterGender, filterMark, filterStatus) => {
    //console.log(filterMsv + '-' + filterName);
    this.setState ({
        filter : {
          msv : filterMsv,
          name : filterName,
          gender : filterGender,
          mark : filterMark,
          status : filterStatus
        }
    }); 
  }

  onSort = (sortBy, sortValue) => {
    this.setState ({
      sort : {
        by : sortBy,
        value : sortValue
      }
    });
  } 

  render() {
      var {students, isDisplayAddFrom, filter, sort} = this.state;

      if(filter) {
        if(filter.msv) {
          students = students.filter((student) => {
            return student.msv.indexOf(filter.msv) === 0;
          })
        }
        if(filter.name) {
          students = students.filter((student) => {
            return student.name.indexOf(filter.name) !== -1;
          })
        }
        if(filter.gender) {
          students = students.filter((student) => {
            if(filter.gender === 'all') return true;
            else return student.gender === filter.gender;
          })
        }
        if(filter.mark) {
          students = students.filter((student) => {
            if(filter.mark === 'all') return true; 
            else if(filter.mark === '2.0') return student.mark < 2.0;
            else {
              var mark = filter.mark.toString().split('-');
              return (student.mark > mark[0] && student.mark <= mark[1]);
            }
            })
        }
        if(filter.status) {
          students = students.filter((student) => {
            if(filter.status === 'all') return true; 
            else return student.status === filter.status;
          })
        }
      }

      if(sort.by ==='msv') {
        students.sort((student1, student2) => {
          //console.log(typeof student1.name,'-',student2.name);
          if(student1.msv > student2.msv) return sort.value; else if(student1.msv < student2.msv) return -sort.value; else return 0;
        });
      } else if(sort.by === 'name') {
        students.sort((student1, student2) => {
          if(student1.name.localeCompare(student2.name) < 0) return sort.value; else if(student1.name.localeCompare(student2.name) > 0) return -sort.value; else return 0;
        });
      } else {
        students.sort((student1, student2) => {
          if(student1.mark > student2.mark) return sort.value; else if(student1.mark < student2.mark) return -sort.value; else return 0;
        });
      }

      var elmAddForm = isDisplayAddFrom ?  <AddForm onSubmit={this.onSubmit} onCloseAddForm= {this.onCloseAddFrom}/> : '';
      
      return (
        <div className="Container">
          <div className="text_center">
            <h1>Quản lý sinh viên</h1>
          </div>
          <div className="row">
            <div className={isDisplayAddFrom ? "col-xs-3 col-sm-3 col-md-3 col-lg-3" :''}>
              {elmAddForm}
            </div>
            
            <div className={isDisplayAddFrom ? 'col-xs-8 col-sm-8 col-md-8 col-lg-8' : 'col-xs-11 col-sm-11 col-md-11 col-lg-11'}>
              &nbsp;
              <button type="button" className="btn btn-primary" onClick={this.onToggleAddForm}>
                <span className="fa fa-plus"></span> &nbsp; Thêm sinh viên
              </button> &nbsp;
              <button type='button' className='btn btn-primary data'>
                <span className='fa fa-file-export'></span>&nbsp; Xuất file Excel
              </button>&nbsp;
              <button type='button' className='btn btn-primary data'>
                <span className='fa fa-file-import'></span>&nbsp; Nhập dữ liệu từ Excel
              </button> 
                <div className="row">
                  <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                    <ListSV student={students} onDelete={this.onDelete} onFilter={this.onFilter} onSort={this.onSort}/>
                  </div>
                </div> 
            </div>
            
          </div>
        </div>
      );
    }
}

export default ListStudent;
