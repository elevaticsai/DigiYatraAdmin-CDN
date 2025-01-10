import React from 'react';
import StatCard from './StatCard';
import ConversationList from './ConversationList';
import PerformanceChart from './PerformanceChart';
import { 
  Users, 
  MessageSquare, 
  AlertCircle, 
  Zap
} from 'lucide-react';

export default function Dashboard() {
  return (
    <>
      <header className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Dashboard Overview</h1>
        <p className="text-gray-500">Monitor and manage your AI voice assistance system</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <StatCard
          title="Active Users"
          value="1,234"
          change="+12.3% from last hour"
          icon={Users}
          trend="up"
        />
        <StatCard
          title="Total Conversations"
          value="8,567"
          change="+5.7% from yesterday"
          icon={MessageSquare}
          trend="up"
        />
        <StatCard
          title="Response Time"
          value="1.2s"
          change="-0.3s from average"
          icon={Zap}
          trend="up"
        />
        <StatCard
          title="Critical Issues"
          value="2"
          change="-50% from yesterday"
          icon={AlertCircle}
          trend="down"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <PerformanceChart />
        </div>
        <div className="lg:col-span-1">
          <ConversationList />
        </div>
      </div>
    </>
  );
}