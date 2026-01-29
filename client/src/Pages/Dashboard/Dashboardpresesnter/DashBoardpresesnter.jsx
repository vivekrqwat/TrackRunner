import { User, Award, TrendingUp, Clock, MapPin, Calendar, Target, Zap } from 'lucide-react'

import React from 'react'
import DashProfile from './DashProfile'
import PresenterGrid from './PresenterGrid'
import PresenterStat from './PresenterStat'
import PrsenterRecentActvities from './PrsenterRecentActvities'

export default function DashBoardpresesnter({data}) {
  return (
     <div className="container mx-auto px-4 py-8">
        {/* Profile Section */}
        {/* <div className="bg-white rounded-xl shadow-md p-8 mb-8">
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
        </div> */}
        <DashProfile></DashProfile>

        {/* Stats Overview Grid */}
        <PresenterGrid></PresenterGrid>
     

        {/* Additional Stats Row */}
        <PresenterStat></PresenterStat>

        {/* Recent Activities */}
       <PrsenterRecentActvities></PrsenterRecentActvities>
      </div>
  )
}
