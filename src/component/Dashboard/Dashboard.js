import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Dashboard = () => {
  const studentsArray = [
    {
      id: 1, name: 'Student1',
      physics: 85,
      chemistry: 80,
      math: 90,
      biology: 70
    },
    {
      id: 2, name: 'Student2',
      physics: 75,
      chemistry: 90,
      math: 95,
      biology: 80
    },
    {
      id: 3, name: 'Student3',
      physics: 80,
      chemistry: 85,
      math: 75,
      biology: 95
    },
    {
      id: 4, name: 'Student4',
      physics: 70,
      chemistry: 75,
      math: 80,
      biology: 90
    },
    {
      id: 5, name: 'Student5',
      physics: 85,
      chemistry: 90,
      math: 70,
      biology: 80
    },
    {
      id: 6, name: 'Student6',
      physics: 90,
      chemistry: 75,
      math: 85,
      biology: 70
    },
    {
      id: 7, name: 'Student7',
      physics: 80,
      chemistry: 80,
      math: 90,
      biology: 75
    },
    {
      id: 8, name: 'Student8',
      physics: 75,
      chemistry: 85,
      math: 70,
      biology: 80
    },
    {
      id: 9, name: 'Student9',
      physics: 90,
      chemistry: 75,
      math: 85,
      biology: 70
    },
    {
      id: 10,
      name: 'Student10',
      physics: 70,
      chemistry: 90,
      math: 80,
      biology: 75
    },
    {
      id: 11,
      name: 'Student11',
      physics: 85,
      chemistry: 80,
      math: 90,
      biology: 70
    },
    {
      id: 12,
      name: 'Student12',
      physics: 75,
      chemistry: 90,
      math: 85,
      biology: 80
    }
  ];


  return (
    <div className='mt-5'>
      <LineChart width={1400} height={300} data={studentsArray}>
        <Line dataKey="physics" />
        <Line dataKey="chemistry" />
        <Line dataKey="math" />
        <Line dataKey="biology" />
        <XAxis dataKey="name" />
        <YAxis />
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />
        <Legend />
      </LineChart>
    </div>
  );
};

export default Dashboard;
