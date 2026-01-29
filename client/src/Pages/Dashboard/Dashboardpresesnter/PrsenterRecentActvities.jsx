import React from 'react'
import { User, Award,TrendingUp, Clock, MapPin, Calendar, Target, Zap } from 'lucide-react'


export default function PrsenterRecentActvities() {
  return (
     <div className="bg-white rounded-xl shadow-md p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Recent Activities</h2>
          
          <div className="space-y-4">
            {[
              { title: 'Morning Run', date: 'Today at 6:30 AM', distance: '5.2 km', time: '32:15', type: 'Run' },
              { title: 'Evening Cycle', date: 'Yesterday at 5:00 PM', distance: '12.8 km', time: '45:30', type: 'Ride' },
              { title: 'Weekend Long Run', date: 'Jan 21, 2026', distance: '10.5 km', time: '1:05:20', type: 'Run' },
            ].map((activity, index) => (
              <div key={index} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:border-orange-300 hover:shadow-sm transition-all cursor-pointer">
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 ${activity.type === 'Run' ? 'bg-orange-100' : 'bg-blue-100'} rounded-lg flex items-center justify-center`}>
                    <MapPin className={`w-6 h-6 ${activity.type === 'Run' ? 'text-orange-600' : 'text-blue-600'}`} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">{activity.title}</h3>
                    <p className="text-sm text-gray-500">{activity.date}</p>
                  </div>
                </div>
                <div className="flex gap-8 text-right">
                  <div>
                    <div className="text-lg font-bold text-gray-800">{activity.distance}</div>
                    <div className="text-xs text-gray-500">Distance</div>
                  </div>
                  <div>
                    <div className="text-lg font-bold text-gray-800">{activity.time}</div>
                    <div className="text-xs text-gray-500">Time</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
  )
}
