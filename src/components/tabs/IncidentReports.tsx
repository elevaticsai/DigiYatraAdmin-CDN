import React from 'react';
import { IncidentReport } from '../../types';

const incidents: IncidentReport[] = [
  { id: 1, type: "System Outage", description: "Voice recognition service temporary downtime", status: "resolved", priority: "high", reportedAt: "2024-03-10 14:30" },
  { id: 2, type: "Performance Issue", description: "Slow response times in Asian region", status: "investigating", priority: "medium", reportedAt: "2024-03-10 15:45" },
  { id: 3, type: "Integration Error", description: "Booking system sync failure", status: "open", priority: "high", reportedAt: "2024-03-10 16:20" },
  { id: 4, type: "Data Inconsistency", description: "Flight information mismatch", status: "investigating", priority: "low", reportedAt: "2024-03-10 16:55" },
];

export default function IncidentReports() {
  return (
    <div className="bg-white rounded-xl shadow-sm">
      <div className="p-4 border-b border-gray-100 flex justify-between items-center">
        <h2 className="text-lg font-semibold">Incident Reports</h2>
        <button className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600">
          Report Incident
        </button>
      </div>
      <div className="p-4">
        <div className="space-y-4">
          {incidents.map((incident) => (
            <div key={incident.id} className="border rounded-lg p-4">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="font-medium">{incident.type}</h3>
                  <p className="text-sm text-gray-600 mt-1">{incident.description}</p>
                </div>
                <div className="flex gap-2">
                  <span className={`px-2 py-1 rounded-full text-xs ${
                    incident.priority === 'high' ? 'bg-red-100 text-red-700' :
                    incident.priority === 'medium' ? 'bg-yellow-100 text-yellow-700' :
                    'bg-blue-100 text-blue-700'
                  }`}>
                    {incident.priority}
                  </span>
                  <span className={`px-2 py-1 rounded-full text-xs ${
                    incident.status === 'resolved' ? 'bg-green-100 text-green-700' :
                    incident.status === 'investigating' ? 'bg-yellow-100 text-yellow-700' :
                    'bg-red-100 text-red-700'
                  }`}>
                    {incident.status}
                  </span>
                </div>
              </div>
              <p className="text-xs text-gray-400 mt-2">Reported: {incident.reportedAt}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}