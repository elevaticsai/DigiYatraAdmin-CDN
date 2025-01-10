import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import ConversationList from './components/ConversationList';
import Analytics from './components/tabs/Analytics';
import UserManagement from './components/tabs/UserManagement';
import VoiceTraining from './components/tabs/VoiceTraining';
import KnowledgeBase from './components/tabs/KnowledgeBase';
import IncidentReports from './components/tabs/IncidentReports';
import Settings from './components/tabs/Settings';

function App() {
  const [activeTab, setActiveTab] = useState('dashboard');

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <Dashboard />;
      case 'conversations':
        return <ConversationList />;
      case 'analytics':
        return <Analytics />;
      case 'users':
        return <UserManagement />;
      case 'training':
        return <VoiceTraining />;
      case 'knowledge':
        return <KnowledgeBase />;
      case 'incidents':
        return <IncidentReports />;
      case 'settings':
        return <Settings />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <Sidebar activeTab={activeTab} onTabChange={setActiveTab} />
      
      <main className="pl-64 p-8">
        <div className="max-w-7xl mx-auto">
          {renderContent()}
        </div>
      </main>
    </div>
  );
}

export default App;