export interface MenuItem {
  icon: any;
  label: string;
  id: string;
}

export interface Conversation {
  id: number;
  user: string;
  query: string;
  sentiment: 'positive' | 'neutral' | 'negative';
  time: string;
  status: 'resolved' | 'active' | 'escalated';
}

export interface TrainingData {
  id: number;
  phrase: string;
  language: string;
  category: string;
  accuracy: number;
  lastTrained: string;
}

export interface KnowledgeItem {
  id: number;
  title: string;
  category: string;
  lastUpdated: string;
  status: 'active' | 'draft' | 'archived';
}

export interface IncidentReport {
  id: number;
  type: string;
  description: string;
  status: 'open' | 'investigating' | 'resolved';
  priority: 'high' | 'medium' | 'low';
  reportedAt: string;
}

export interface UserData {
  id: number;
  name: string;
  role: string;
  status: 'active' | 'inactive';
  lastActive: string;
  department: string;
}