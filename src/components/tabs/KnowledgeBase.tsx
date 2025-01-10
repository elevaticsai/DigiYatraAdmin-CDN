import React from 'react';
import { KnowledgeItem } from '../../types';
import { Search } from 'lucide-react';

const knowledgeItems: KnowledgeItem[] = [
  { id: 1, title: "Baggage Policy Guidelines", category: "Policies", lastUpdated: "2024-03-10", status: "active" },
  { id: 2, title: "Flight Change Procedures", category: "Procedures", lastUpdated: "2024-03-09", status: "active" },
  { id: 3, title: "Meal Service Options", category: "Services", lastUpdated: "2024-03-08", status: "draft" },
  { id: 4, title: "Emergency Protocols", category: "Safety", lastUpdated: "2024-03-07", status: "archived" },
];

export default function KnowledgeBase() {
  return (
    <div className="space-y-6">
      <div className="bg-white rounded-xl shadow-sm p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-lg font-semibold">Knowledge Base</h2>
          <div className="relative">
            <input
              type="text"
              placeholder="Search knowledge base..."
              className="pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <Search className="w-5 h-5 text-gray-400 absolute left-3 top-2.5" />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {knowledgeItems.map((item) => (
            <div key={item.id} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-medium">{item.title}</h3>
                <span className={`px-2 py-1 rounded-full text-xs ${
                  item.status === 'active' ? 'bg-green-100 text-green-700' :
                  item.status === 'draft' ? 'bg-yellow-100 text-yellow-700' :
                  'bg-gray-100 text-gray-700'
                }`}>
                  {item.status}
                </span>
              </div>
              <p className="text-sm text-gray-500">Category: {item.category}</p>
              <p className="text-xs text-gray-400 mt-2">Last updated: {item.lastUpdated}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}