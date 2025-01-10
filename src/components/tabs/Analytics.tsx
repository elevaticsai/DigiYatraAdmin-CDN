import React from 'react';
import PerformanceChart from '../PerformanceChart';

export default function Analytics() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <PerformanceChart />
        <div className="bg-white p-4 rounded-xl shadow-sm">
          <h2 className="text-lg font-semibold mb-4">Response Time Distribution</h2>
          <div className="space-y-4">
            {['< 1s', '1-2s', '2-3s', '3-5s', '> 5s'].map((range) => (
              <div key={range} className="flex items-center">
                <span className="w-24 text-sm text-gray-600">{range}</span>
                <div className="flex-1 h-4 bg-gray-100 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-blue-500 rounded-full"
                    style={{ width: `${Math.random() * 100}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}