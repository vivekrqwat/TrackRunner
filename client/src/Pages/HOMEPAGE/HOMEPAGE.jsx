import React from 'react'
import MAPCONTAINER from '../../Components/Mapfolder/MAPCONTAINER'
import { Home, User, Play, Square, Clock, Route } from 'lucide-react'
import Navbar from '../../Components/Navbar/Navbar'
export default function HOMEPAGE() {
  return (
    <div className="min-h-screen flex flex-col bg-white">

        {/* navabar */}
        <Navbar></Navbar>

        {/* map */}
        <div className="w-full h-[50vh] relative">
        <MAPCONTAINER />
      </div>

  <div className="flex gap-4 px-6 py-6 bg-gray-50 justify-center">
        <button className="bg-orange-600 text-white rounded-full px-8 py-4 font-bold text-lg flex items-center gap-3 shadow-lg hover:bg-orange-700 hover:shadow-xl hover:scale-105 transition-all">
          <Play size={24} fill="white" />
          Start Tracking
        </button>
        <button className="bg-white text-orange-600 border-2 border-orange-600 rounded-full px-8 py-4 font-bold text-lg flex items-center gap-3 shadow-md hover:bg-orange-50 hover:shadow-lg hover:scale-105 transition-all">
          <Square size={24} />
          Stop Tracking
        </button>
      </div>
      {/* //distance and speed stats */}
         <div className="flex-1 px-6 py-8 bg-white">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Tracking</h2>
        
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Timer Card */}
          <div className="bg-gradient-to-br from-orange-50 to-white border-2 border-orange-600 rounded-2xl p-6 shadow-md hover:shadow-xl transition-shadow">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-orange-600 rounded-full p-3">
                <Clock className="text-white" size={28} />
              </div>
              <h3 className="text-xl font-semibold text-gray-700">Timer</h3>
            </div>
            <div className="text-5xl font-bold text-orange-600 font-mono">
              00:00:00
            </div>
            <p className="text-gray-500 mt-2 text-sm">Hours : Minutes : Seconds</p>
          </div>
          </div>
      
        </div>
    </div>
  )
}
