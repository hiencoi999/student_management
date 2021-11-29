/* eslint-disable react/style-prop-object */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import {
  ComposedChart,
  Line,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import styled from "styled-components";
import CallApi from "../API/CallApi";

//css
const Container = styled.div`
  width: 100%;
`;
const Chart1 = styled.div`
  float: left;
  width: 520px;
  padding: 0px;
  border: 1px solid black;
  border-radius: 10px;
`;
const Chart2 = styled.div`
  float: right;
  width: 520px;
  margin-right: 50px;
  border: 1px solid black;
  border-radius: 10px;
`;
class Chart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      students: [],
      lop: [],
    };
  }
  componentDidMount() {
    this.setState({
      lop: sessionStorage.getItem("lop").split(", "),
    });
    var item = sessionStorage.getItem("item");
    console.log("aloga");
    CallApi(`student/all/${item}`, "GET", null).then((res) => {
      console.log(res.data.ListStudents);
      if (res.data.ListStudents != null) {
        this.setState({
          students: res.data.ListStudents,
        });
      } else {
        this.setState({
          students: [],
        });
      }
    });
  }

  ChooseClass = (item) => {
    sessionStorage.setItem("item", item);
    CallApi(`student/all/${item}`, "GET", null).then((res) => {
      console.log(res.data.ListStudents);
      if (res.data.ListStudents != null) {
        this.setState({
          students: res.data.ListStudents,
        });
      } else {
        this.setState({
          students: [],
        });
      }
    });
  };

  render() {
    //bar-chart
    var data_bar_chart = [
      {
        name: "Dưới 2.0",
        Số_SV: 0,
      },
      {
        name: "2.0-2.5",
        Số_SV: 0,
      },
      {
        name: "2.5-3.2",
        Số_SV: 0,
      },
      {
        name: "3.2-3.6",
        Số_SV: 0,
      },
      {
        name: "3.6-4.0",
        Số_SV: 0,
      },
    ];

    //pie-chart
    var data_pie_chart = [
      { name: "Yếu", value: 0 },
      { name: "Trung bình", value: 0 },
      { name: "Khá", value: 0 },
      { name: "Giỏi", value: 0 },
      { name: "Xuất sắc", value: 0 },
    ];
    var COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#413ea0"];
    var RADIAN = Math.PI / 180;
    var renderCustom = ({
      cx,
      cy,
      midAngle,
      innerRadius,
      outerRadius,
      percent,
      index,
    }) => {
      const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
      const x = cx + radius * Math.cos(-midAngle * RADIAN);
      const y = cy + radius * Math.sin(-midAngle * RADIAN);

      return (
        <text
          x={x}
          y={y}
          fill="white"
          textAnchor={x > cx ? "start" : "end"}
          dominantBaseline="central"
        >
          {`${(percent * 100).toFixed(0)}%`}
        </text>
      );
    };

    var { students, lop } = this.state;
    for (var i = 0; i < students.length; i++) {
      if (students[i].gpa < 2.0) {
        data_bar_chart[0].Số_SV += 1;
        data_pie_chart[0].value += 1;
      }
      if (students[i].gpa >= 2.0 && students[i].gpa < 2.5) {
        data_bar_chart[1].Số_SV += 1;
        data_pie_chart[1].value += 1;
      }
      if (students[i].gpa >= 2.5 && students[i].gpa < 3.2) {
        data_bar_chart[2].Số_SV += 1;
        data_pie_chart[2].value += 1;
      }
      if (students[i].gpa >= 3.2 && students[i].gpa < 3.6) {
        data_bar_chart[3].Số_SV += 1;
        data_pie_chart[3].value += 1;
      }
      if (students[i].gpa >= 3.6 && students[i].gpa <= 4.0) {
        data_bar_chart[4].Số_SV += 1;
        data_pie_chart[4].value += 1;
      }
    }

    return (
      <Container>
        <div className="dropdown">
          <button
            type="button"
            className="btn dropdown-toggle"
            id="dropdownMsv"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="true"
          >
            Chọn lớp &nbsp; <span className="fa fa-caret-square-o-down"></span>
          </button>
          <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
            {lop.map((item) => (
              <li
                to="/home/list-students"
                key={item}
                onClick={() => this.ChooseClass(item)}
              >
                <a role="button">{item}</a>
              </li>
            ))}
          </ul>
        </div>
        <br /> <br />
        <Chart1>
          <ComposedChart width={500} height={450} data={data_bar_chart}>
            <CartesianGrid stroke="#f5f5f5" />
            <XAxis dataKey="name" scale="band" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="Số_SV" barSize={70} fill="#413ea0" />
            <Line type="monotone" dataKey="Số_SV" stroke="#ff7300" />
          </ComposedChart>
        </Chart1>
        <Chart2>
          <PieChart width={500} height={450}>
            <Pie
              data={data_pie_chart}
              isAnimationActive={true}
              cx="50%"
              cy="50%"
              label={renderCustom}
              outerRadius={80}
              fill="#8884d8"
              dataKey="value"
            >
              {data_pie_chart.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </Chart2>
      </Container>
    );
  }
}

export default Chart;
