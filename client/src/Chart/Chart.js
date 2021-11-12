import React from "react";
import {
  ComposedChart,
  Line,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const data = [
  {
    name: "Dưới 2.0",
    SV: 2,
  },
  {
    name: "2.0-2.5",
    SV: 4,
  },
  {
    name: "2.5-3.0",
    SV: 15,
  },
  {
    name: "3.0-3.2",
    SV: 20,
  },
  {
    name: "3.2-3.6",
    SV: 12,
  },
  {
    name: "3.6-4.0",
    SV: 5,
  },
];

export default function Chart() {
  return (
    <ComposedChart
      width={1000}
      height={600}
      data={data}
      margin={{
        top: 20,
        right: 20,
        bottom: 20,
        left: 20,
      }}
    >
      <CartesianGrid stroke="#f5f5f5" />
      <XAxis dataKey="name" scale="band" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="SV" barSize={50} fill="#413ea0" />
      <Line type="monotone" dataKey="SV" stroke="#ff7300" />
    </ComposedChart>
  );
}
