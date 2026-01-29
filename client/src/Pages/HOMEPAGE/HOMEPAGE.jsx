import React, { useRef, useState } from 'react'
import MAPCONTAINER from '../../Components/Mapfolder/MAPCONTAINER'
import { Home, User, Play, Square, Clock, Route } from 'lucide-react'
import Navbar from '../../Components/Navbar/Navbar'
import Timer from '../../Components/HomePageComp/Timer'


export default function HOMEPAGE() {
  const [starttimer,setstarttimer]=useState(false);
  const resetTimerRef=useRef(null);
const handleclear=()=>{
  setstarttimer(false);
  if(resetTimerRef.current){
    resetTimerRef.current();}


  return;

}
// }

  
  return (
    <div className="min-h-screen flex flex-col bg-white">

        {/* navabar */}
        <Navbar></Navbar>

        {/* map */}
        <div className="w-full h-[50vh] relative">
        <MAPCONTAINER />
      </div>

  <div className="flex gap-4 px-6 py-6 bg-gray-50 justify-center">
        <button 
        className="bg-orange-600 text-white rounded-full px-8 py-4 font-bold text-lg flex items-center gap-3 shadow-lg hover:bg-orange-700 hover:shadow-xl hover:scale-105 transition-all"
        onClick={()=>setstarttimer(!starttimer)}
        >
          <Play size={24} fill="white" />
          {starttimer?"Start Tracking":"stop Tracking"}
        </button>
        <button onClick={()=>handleclear()} 
        className="bg-white text-orange-600 border-2 border-orange-600 rounded-full px-8 py-4 font-bold text-lg flex items-center gap-3 shadow-md hover:bg-orange-50 hover:shadow-lg hover:scale-105 transition-all">
          <Square size={24} />
          clear
        </button>
      </div>
      {/* //distance and speed stats */}
         <div className="flex-1 px-6 py-8 bg-white">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Tracking</h2>
        
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Timer Card */}
        <Timer start={starttimer} handleclear={(resetFn)=>{resetTimerRef.current=resetFn;}} ></Timer>
          </div>
      
        </div>
    </div>
  )
}
