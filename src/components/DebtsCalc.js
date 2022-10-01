import React from "react";
import { Bubble, Line } from "react-chartjs-2";
import { Chart as ChartJS, registerables } from "chart.js";
ChartJS.register(...registerables);

const DebtsCalc = () => {
  const fakeData = [
    {
      timeStamp: "Jul 22",
      debts: [
        { type: "Credit Card", amt: 10000 },
        { type: "Auto Loan", amt: 15000 },
        { type: "Student Loan", amt: 30000 },
      ],
    },
    {
      timeStamp: "Aug 22",
      debts: [
        { type: "Credit Card", amt: 9000 },
        { type: "Auto Loan", amt: 12000 },
        { type: "Student Loan", amt: 27000 },
      ],
    },
    {
      timeStamp: "Sep 22",
      debts: [
        { type: "Credit Card", amt: 7500 },
        { type: "Auto Loan", amt: 10000 },
        { type: "Student Loan", amt: 25000 },
      ],
    },
  ];

  return (
    <>
      <h1>Debts</h1>
      <Line
        color="#fffff"
        datasetIdKey="id"
        data={{
          labels: fakeData.map((item) => {
            return item.timeStamp;
          }),

          datasets: fakeData.map((data, idx) => {
            return {
              backgroundColor: "limegreen",
              id: idx + 1,
              label: data.debts[idx].type,
              data: fakeData.map((itm) => {
                return itm.debts[idx].amt;
              }),
            };
          }),
        }}
      />
    </>
  );
};

export default DebtsCalc;
