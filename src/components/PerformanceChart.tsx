import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { time: '00:00', queries: 350 },
  { time: '03:00', queries: 200 },
  { time: '06:00', queries: 400 },
  { time: '09:00', queries: 800 },
  { time: '12:00', queries: 1000 },
  { time: '15:00', queries: 900 },
  { time: '18:00', queries: 750 },
  { time: '21:00', queries: 500 },
];

export default function PerformanceChart() {
  return (
    <div className="bg-white p-4 rounded-xl shadow-sm">
      <h2 className="text-lg font-semibold mb-4">Query Volume (24h)</h2>
      <div className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="time" />
            <YAxis />
            <Tooltip />
            <Area 
              type="monotone" 
              dataKey="queries" 
              stroke="#3b82f6" 
              fill="#93c5fd" 
              fillOpacity={0.3}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}