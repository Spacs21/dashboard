import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  plugins: {
    title: {
      display: true,
      text: 'Chart.js Bar Chart - Stacked',
    },
  },
  responsive: true,
  scales: {
    x: {
      stacked: true,
    },
    y: {
      stacked: true,
    },
  },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const data = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: [40, 100, 100, 200, 300, 400],
      backgroundColor: 'rgb(99, 132, 255)',
    },
    {
      label: 'Dataset 2',
      data: [],
      backgroundColor: 'rgb(75, 192, 192)',
    },
    {
      label: 'Dataset 3',
      data: [],
      backgroundColor: 'rgb(53, 162, 235)',
    },
  ],
};

const Tables = () => {
  return (
    <div className='text-center flex items-center justify-center text-white'>
      <div className='w-[800px]'>
        <Bar options={options} data={data} className='w-full'/>
        <h2>asdasd</h2>
      </div>
    </div>
  )
}

export default Tables