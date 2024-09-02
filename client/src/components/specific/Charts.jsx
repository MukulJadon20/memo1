/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';
import { Line, Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, Tooltip, Filler, CategoryScale, LinearScale, PointElement, LineElement, ArcElement, Legend } from 'chart.js';
import { getLast7Days } from '../../lib/features';
import { orangeLight, purpleLight } from '../../constants/colors';
import { orange, purple } from '@mui/material/colors';

ChartJS.register(Tooltip, Filler, CategoryScale, LinearScale, PointElement, LineElement, ArcElement, Legend);

const labels = getLast7Days();

const lineChartOptions = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: false,
    },
  },
  scales: {
    x: {
      grid: {
        display: false,
      },
    },
    y: {
      beginAtZero: true,
      grid: {
        display: false,
      },
    },
  },
};

const LineChart = ({ value = [] }) => {
  const data = {
    labels,
    datasets: [
      {
        data: value,
        label: "Revenue",
        fill: true,
        backgroundColor: "rgba(75,192,192,0.2)",
        borderColor: "rgba(75,192,192,1)",
      },
    ],
  };

  return <Line data={data} options={lineChartOptions} />;
};

const doughnutChartOptions = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
  },
  cutout: 120,
};

const DoughnutChart = ({ value = [], labels = [] }) => {
  const data = {
    labels,
    datasets: [
      {
        data: value,
        label: "Total chats vs Groups chats",
        fill: true,
         backgroundColor: purpleLight ,orangeLight,
          borderColor: purple,orange,
        offset: 40,
      },
    ],
  };

  return <Doughnut style={{ zIndex: 10 }} data={data} options={doughnutChartOptions} />;
};

export { LineChart, DoughnutChart };







// import React from "react";
// import { Line, Doughnut } from "react-chartjs-2";
// import {Chart as Chartjs, Tooltip,Filler,CategoryScale,LinearScale,PointElement,LineElement,ArcElement,Legend, scales} from "chart.js";
// import { plugins } from "chart.js";
// import { Dataset } from "@mui/icons-material";
// import { getLast7Days } from "../../lib/features";
// import zIndex from "@mui/material/styles/zIndex";

// ChartjS.register(Tooltip,Filler,CategoryScale,LinearScale,PointElement,LineElement,ArcElement,Legend);

// const labels=getLast7Days();

// const lineChartOptions={
// responsive:true,
// plugins:{
//     legend:{
//         display:false,
//     },
//     title:{
//         display:false,
//     },
// },
// scales:{
//     x:{
//        grid:{
//         display:false,
//        },
//     },
//     y:{
//         beginAtZero:true,
//         grid:{
//             display:false,
//            },
//     },
// },
// };

// const LineChart = ({value=[]}) => {
//  const data =()=>{
//     labels,
//     datasets:[
//         {data:value,
//             label:"Revenue",
//             fill:true,
//             backgroundColor:"rgba(75,192,192,0.2)",
//             borderColor:"rgba(75,192,192,1)",

//     },
   
// ],
//  };

//  return <Line data={data} options={lineChartOptions}/>
// };

// const doughnutChartOptions={
//     responsive:true,
//     plugins:{
//         legend:{
//             display:false,
//         },
//     },
//     cutout:120,
// },

//  const DoughnutChart= ({value=[].labels=[]}) => {
//     const data =()=>{
//         labels,
//         dataset:[
//             {data:value,
//                 label:"Revenue",
//                 fill:true,
//                 backgroundColor:"rgba(75,192,192,0.2)",
//                 borderColor:"rgba(75,192,192,1)",
//                 offset:40,
//             },
       
//     ],
//      };
    
//     return <Doughnut style={{zIndex:10}} data={data} options={doughnutChartOptions}/>
//   };

// export{LineChart,DoughnutChart} ;
