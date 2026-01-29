import React from 'react'
import { User, Award, TrendingUp, Clock, MapPin, Calendar, Target, Zap } from 'lucide-react'

export default function PresenterStat() {
  return (
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
  )
}
