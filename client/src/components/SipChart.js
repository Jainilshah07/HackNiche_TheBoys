import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const data = [
    { name: '2015', Stocks: 2400,  },
    { name: '2016', Stocks: 3800 },
    { name: '2017', Stocks: 4800 },
    { name: '2018', Stocks: 5000 },
    { name: '2019', Stocks: 5800 },
    { name: '2020', Stocks: 4800 },
    { name: '2021', Stocks: 9600 },
    { name: '2022', Stocks: 9800 },
];

const SipChart = () => {
    return (
        <LineChart
            width={500}
            height={300}
            data={data}
            margin={{
                top: 5, right: 30, left: 20, bottom: 5,
            }}
        >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="Stocks" stroke="#8884d8" activeDot={{ r: 8 }} />

        </LineChart>
    );
};

export default SipChart;
