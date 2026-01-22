import React from 'react'
import { Home, User } from 'lucide-react'


export default function Navbar() {
  return (
   <nav className="bg-orange-600 px-6 py-4 flex justify-between items-center shadow-lg">
        <div className="flex items-center gap-3">
          <Home className="text-white" size={28} />
          <span className="text-white text-2xl font-bold">RunTracker</span>
        </div>
        <button className="bg-white rounded-full w-10 h-10 flex items-center justify-center hover:scale-110 transition-transform">
          <User className="text-orange-600" size={24} />
        </button>
      </nav>
  )
}
