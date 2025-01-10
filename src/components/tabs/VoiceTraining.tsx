import React from 'react';
import { TrainingData } from '../../types';

const trainingData: TrainingData[] = [
  { id: 1, phrase: "Flight booking assistance", language: "English", category: "Booking", accuracy: 98.5, lastTrained: "2024-03-10" },
  { id: 2, phrase: "Baggage tracking inquiry", language: "Spanish", category: "Support", accuracy: 95.2, lastTrained: "2024-03-09" },
  { id: 3, phrase: "Schedule modification", language: "French", category: "Booking", accuracy: 92.8, lastTrained: "2024-03-08" },
  { id: 4, phrase: "Meal preference update", language: "English", category: "Service", accuracy: 97.1, lastTrained: "2024-03-10" },
];

export default function VoiceTraining() {
  return (
    <div className="space-y-6">
      <div className="bg-white rounded-xl shadow-sm p-6">
        <h2 className="text-lg font-semibold mb-4">Voice Training Models</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {trainingData.map((item) => (
            <div key={item.id} className="border rounded-lg p-4">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-medium">{item.phrase}</h3>
                <span className={`px-2 py-1 rounded-full text-xs ${
                  item.accuracy > 95 ? 'bg-green-100 text-green-700' :
                  item.accuracy > 90 ? 'bg-yellow-100 text-yellow-700' :
                  'bg-red-100 text-red-700'
                }`}>
                  {item.accuracy}%
                </span>
              </div>
              <p className="text-sm text-gray-500">{item.language}</p>
              <p className="text-sm text-gray-500">Category: {item.category}</p>
              <p className="text-xs text-gray-400 mt-2">Last trained: {item.lastTrained}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}