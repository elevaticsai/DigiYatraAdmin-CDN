import React from 'react';

const settingSections = [
  {
    title: 'Voice Assistant Configuration',
    settings: [
      { id: 'language', label: 'Primary Language', value: 'English' },
      { id: 'voice', label: 'Voice Type', value: 'Female (Emma)' },
      { id: 'speed', label: 'Speech Rate', value: '1.0x' },
    ]
  },
  {
    title: 'System Preferences',
    settings: [
      { id: 'timezone', label: 'Timezone', value: 'UTC-5 (Eastern Time)' },
      { id: 'notifications', label: 'Email Notifications', value: 'Enabled' },
      { id: 'retention', label: 'Data Retention', value: '30 days' },
    ]
  },
  {
    title: 'Integration Settings',
    settings: [
      { id: 'booking', label: 'Booking System', value: 'Connected' },
      { id: 'crm', label: 'CRM Integration', value: 'Connected' },
      { id: 'analytics', label: 'Analytics Platform', value: 'Connected' },
    ]
  }
];

export default function Settings() {
  return (
    <div className="space-y-6">
      {settingSections.map((section) => (
        <div key={section.title} className="bg-white rounded-xl shadow-sm p-6">
          <h2 className="text-lg font-semibold mb-4">{section.title}</h2>
          <div className="space-y-4">
            {section.settings.map((setting) => (
              <div key={setting.id} className="flex items-center justify-between p-4 hover:bg-gray-50 rounded-lg">
                <div>
                  <h3 className="font-medium">{setting.label}</h3>
                  <p className="text-sm text-gray-500">{setting.value}</p>
                </div>
                <button className="text-blue-500 hover:text-blue-600">
                  Edit
                </button>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}