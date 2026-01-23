import React from 'react'
import { User, Award, TrendingUp, Clock, MapPin, Calendar, Target, Zap } from 'lucide-react'
import Navbar from '../../Components/Navbar/Navbar'



export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="container mx-auto px-4 py-8">
        {/* Profile Section */}
        <div className="bg-white rounded-xl shadow-md p-8 mb-8">
          <div className="flex items-center gap-6">
            <div className="w-24 h-24 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center text-white text-3xl font-bold shadow-lg">
              <User className="w-12 h-12" />
            </div>
            <div className="flex-1">
              <h1 className="text-3xl font-bold text-gray-800 mb-2">John Athlete</h1>
              <p className="text-gray-600 flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                Delhi, India
              </p>
            </div>
            <div className="text-right">
              <div className="text-sm text-gray-500 mb-1">Member since</div>
              <div className="text-lg font-semibold text-gray-700">January 2024</div>
            </div>
          </div>
        </div>

        {/* Stats Overview Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {/* Total Distance */}
          <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl shadow-lg p-6 text-white transform hover:scale-105 transition-transform">
            <div className="flex items-center justify-between mb-4">
              <div className="bg-white bg-opacity-20 p-3 rounded-lg">
                <MapPin className="w-8 h-8" />
              </div>
              <TrendingUp className="w-6 h-6 opacity-80" />
            </div>
            <div className="text-4xl font-bold mb-2">247.5</div>
            <div className="text-orange-100 text-sm uppercase tracking-wide">Total Distance (km)</div>
            <div className="mt-4 pt-4 border-t border-orange-400 border-opacity-30">
              <span className="text-sm">+12.3 km this week</span>
            </div>
          </div>

          {/* Average Speed */}
          <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl shadow-lg p-6 text-white transform hover:scale-105 transition-transform">
            <div className="flex items-center justify-between mb-4">
              <div className="bg-white bg-opacity-20 p-3 rounded-lg">
                <Zap className="w-8 h-8" />
              </div>
              <TrendingUp className="w-6 h-6 opacity-80" />
            </div>
            <div className="text-4xl font-bold mb-2">8.5</div>
            <div className="text-blue-100 text-sm uppercase tracking-wide">Average Speed (km/h)</div>
            <div className="mt-4 pt-4 border-t border-blue-400 border-opacity-30">
              <span className="text-sm">+0.3 km/h from last month</span>
            </div>
          </div>

          {/* Total Time */}
          <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl shadow-lg p-6 text-white transform hover:scale-105 transition-transform">
            <div className="flex items-center justify-between mb-4">
              <div className="bg-white bg-opacity-20 p-3 rounded-lg">
                <Clock className="w-8 h-8" />
              </div>
              <TrendingUp className="w-6 h-6 opacity-80" />
            </div>
            <div className="text-4xl font-bold mb-2">29:15</div>
            <div className="text-purple-100 text-sm uppercase tracking-wide">Total Time (hours)</div>
            <div className="mt-4 pt-4 border-t border-purple-400 border-opacity-30">
              <span className="text-sm">+2:30 hrs this week</span>
            </div>
          </div>
        </div>

        {/* Additional Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-white rounded-lg shadow p-4 hover:shadow-md transition-shadow">
            <div className="flex items-center gap-3">
              <div className="bg-green-100 p-2 rounded-lg">
                <Target className="w-5 h-5 text-green-600" />
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-800">15</div>
                <div className="text-xs text-gray-500 uppercase">Activities</div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-4 hover:shadow-md transition-shadow">
            <div className="flex items-center gap-3">
              <div className="bg-yellow-100 p-2 rounded-lg">
                <Award className="w-5 h-5 text-yellow-600" />
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-800">7</div>
                <div className="text-xs text-gray-500 uppercase">Achievements</div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-4 hover:shadow-md transition-shadow">
            <div className="flex items-center gap-3">
              <div className="bg-red-100 p-2 rounded-lg">
                <TrendingUp className="w-5 h-5 text-red-600" />
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-800">523</div>
                <div className="text-xs text-gray-500 uppercase">Calories</div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-4 hover:shadow-md transition-shadow">
            <div className="flex items-center gap-3">
              <div className="bg-indigo-100 p-2 rounded-lg">
                <Calendar className="w-5 h-5 text-indigo-600" />
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-800">12</div>
                <div className="text-xs text-gray-500 uppercase">Days Active</div>
              </div>
            </div>
          </div>
        </div>

        {/* Recent Activities */}
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
      </div>
    </div>
  )
}