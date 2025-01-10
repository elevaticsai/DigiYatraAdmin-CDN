import React from 'react';
import { 
  LayoutDashboard, 
  MessageSquare, 
  Settings, 
  BarChart2, 
  Users, 
  Headphones,
  BookOpen,
  AlertCircle,
  Circle,
  CircleFadingPlusIcon,
  CuboidIcon,
  CircleEllipsis
} from 'lucide-react';
import { MenuItem } from '../types';
import Dashboard from './Dashboard';

export const menuItems: MenuItem[] = [
  { icon: LayoutDashboard, label: 'Dashboard', id: 'dashboard' },
  { icon: MessageSquare, label: 'Conversations', id: 'conversations' },
  { icon: BarChart2, label: 'Analytics', id: 'analytics' },
  { icon: Users, label: 'User Management', id: 'users' },
  { icon: Headphones, label: 'Voice Training', id: 'training' },
  { icon: BookOpen, label: 'Knowledge Base', id: 'knowledge' },
  { icon: AlertCircle, label: 'Incident Reports', id: 'incidents' },
  { icon: Settings, label: 'Settings', id: 'settings' },
];

interface SidebarProps {
  activeTab: string;
  onTabChange: (tabId: string) => void;
}

export default function Sidebar({ activeTab, onTabChange }: SidebarProps) {
  return (
    <div className="w-64 bg-slate-800 h-screen fixed left-0 top-0 text-white p-4">
      <div className="flex items-center gap-3 mb-8 px-2">
        <CircleEllipsis className="w-8 h-8 text-blue-400" />
        
        <h1 className="text-xl font-bold">DigiYatra Admin</h1>
      </div>
      
      <nav>
        {menuItems.map((item) => (
          <div
            key={item.id}
            onClick={() => onTabChange(item.id)}
            className={`flex items-center gap-3 p-3 rounded-lg mb-2 cursor-pointer transition-colors
              ${activeTab === item.id
                ? 'bg-blue-600 text-white' 
                : 'hover:bg-slate-700'}`}
          >
            <item.icon className="w-5 h-5" />
            <span>{item.label}</span>
          </div>
        ))}
      </nav>
    </div>
  );
}