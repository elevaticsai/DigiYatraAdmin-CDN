import React from 'react';

const conversations = [
  {
    id: 1,
    user: "John Smith",
    query: "Flight rebooking assistance",
    sentiment: "positive",
    time: "2 mins ago",
    status: "resolved"
  },
  {
    id: 2,
    user: "Maria Garcia",
    query: "Baggage claim information",
    sentiment: "neutral",
    time: "5 mins ago",
    status: "active"
  },
  {
    id: 3,
    user: "David Chen",
    query: "Flight delay compensation",
    sentiment: "negative",
    time: "12 mins ago",
    status: "escalated"
  },
  {
    id: 4,
    user: "Sarah Johnson",
    query: "Seat upgrade request",
    sentiment: "positive",
    time: "15 mins ago",
    status: "resolved"
  }
];

export default function ConversationList() {
  return (
    <div className="bg-white rounded-xl shadow-sm">
      <div className="p-4 border-b border-gray-100">
        <h2 className="text-lg font-semibold">Recent Conversations</h2>
      </div>
      <div className="divide-y divide-gray-100">
        {conversations.map((conv) => (
          <div key={conv.id} className="p-4 hover:bg-gray-50 transition-colors">
            <div className="flex justify-between items-start mb-2">
              <h3 className="font-medium">{conv.user}</h3>
              <span className="text-sm text-gray-500">{conv.time}</span>
            </div>
            <p className="text-sm text-gray-600 mb-2">{conv.query}</p>
            <div className="flex gap-2">
              <span className={`px-2 py-1 rounded-full text-xs
                ${conv.status === 'resolved' ? 'bg-green-100 text-green-700' :
                  conv.status === 'active' ? 'bg-blue-100 text-blue-700' :
                  'bg-red-100 text-red-700'}`}>
                {conv.status}
              </span>
              <span className={`px-2 py-1 rounded-full text-xs
                ${conv.sentiment === 'positive' ? 'bg-green-100 text-green-700' :
                  conv.sentiment === 'neutral' ? 'bg-gray-100 text-gray-700' :
                  'bg-red-100 text-red-700'}`}>
                {conv.sentiment}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}