import { Clock, MapPin, TrendingUp, Zap } from 'lucide-react'
import React from 'react'

export default function PresenterGrid() {
  return (
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
  )
}
