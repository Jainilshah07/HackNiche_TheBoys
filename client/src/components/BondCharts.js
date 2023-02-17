import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const data = [
    { name: '2015', Stocks: 2400, Gold: 2400, FixedDeposits: 2715, Bond: 3215 },
    { name: '2016', Stocks: 3800, Gold: 2210, FixedDeposits: 2845, Bond: 3600 },
    { name: '2017', Stocks: 4800, Gold: 2290, FixedDeposits: 4987, Bond: 4852 },
    { name: '2018', Stocks: 5000, Gold: 2000, FixedDeposits: 5000, Bond: 2014 },
    { name: '2019', Stocks: 5800, Gold: 2181, FixedDeposits: 5250, Bond: 5632 },
    { name: '2020', Stocks: 4800, Gold: 2500, FixedDeposits: 5500, Bond: 6985 },
    { name: '2021', Stocks: 9600, Gold: 2100, FixedDeposits: 6000, Bond: 1254 },
    { name: '2022', Stocks: 9800, Gold: 2100, FixedDeposits: 10000, Bond: 7000 },
];

const BondChart = () => {
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
            <Line type="monotone" dataKey="Gold" stroke="#82ca9d" />
            <Line type="monotone" dataKey="FixedDeposits" stroke="#800080" />
            <Line type="monotone" dataKey="Bond" stroke="#FFCE30" />

        </LineChart>
    );
};

export default BondChart;
