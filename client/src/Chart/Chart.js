import React, {Component} from "react";
import {
  ComposedChart,
  Line,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";
import CallApi from "../API/CallApi";

class Chart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      students: []
    }
  }
  componentDidMount() {
    CallApi('students', 'GET', null).then(res => {
      this.setState({
        students : res.data
      })
    })
  }

  render() {
    var data = [
      {
        name: "Dưới 2.0",
        SV : 0
      },
      {
        name: "2.0-2.5",
        SV: 0
      },
      {
        name: "2.5-3.0",
        SV: 0
      },
      {
        name: "3.0-3.2",
        SV: 0
      },
      {
        name: "3.2-3.6",
        SV: 0
      },
      {
        name: "3.6-4.0",
        SV: 0
      }
    ];
    var { students } = this.state;
    for (var i = 0; i < students.length; i++) {
      if (students[i].mark < 2.0) data[0].SV += 1;
      if (students[i].mark >= 2.0 && students[i].mark < 2.5) data[1].SV += 1;
      if (students[i].mark >= 2.5 && students[i].mark < 3.0) data[2].SV += 1;
      if (students[i].mark >= 3.0 && students[i].mark < 3.2) data[3].SV += 1;
      if (students[i].mark >= 3.2 && students[i].mark < 3.6) data[4].SV += 1;
      if (students[i].mark >= 3.6 && students[i].mark <= 4.0) data[5].SV += 1;
    }
    
    console.log(data);

    return (
      <ComposedChart
        width={1000}
        height={600}
        data={data}
        margin={{
          top: 20,
          right: 20,
          bottom: 20,
          left: 20
        }}
      >
        <CartesianGrid stroke="#f5f5f5" />
        <XAxis dataKey="name" scale="band" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="SV" barSize={70} fill="#413ea0" />
        <Line type="monotone" dataKey="SV" stroke="#ff7300" />
      </ComposedChart>
    );
  }
}

export default Chart;
