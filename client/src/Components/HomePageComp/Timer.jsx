import { Clock } from 'lucide-react'

import React, { use, useEffect, useRef } from 'react'

export default function Timer({start,handleclear}) {

 
    const[seconds,setseconds]=React.useState(0);
    const intevRef=useRef(null)
    
 useEffect(()=>{
    
    if(start){
        if(intevRef.current) return;
    intevRef.current=setInterval(()=>{setseconds(prv=>prv+1)},1000);
   
    }else{
        clearInterval(intevRef.current);
        intevRef.current=null;
    }
    return ()=>clearInterval(intevRef.current);

 },[start])
 
 useEffect(()=>{
 handleclear(()=>setseconds(0));
 },[handleclear])


  


  return (
      <div className="bg-gradient-to-br from-orange-50 to-white border-2 border-orange-600 rounded-2xl p-6 shadow-md hover:shadow-xl transition-shadow">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-orange-600 rounded-full p-3">
                <Clock className="text-white" size={28} />
              </div>
              <h3 className="text-xl font-semibold text-gray-700">Timer</h3>
            </div>
            <div className="text-5xl font-bold text-orange-600 font-mono">
              {`${Math.floor(seconds/3600)}:${Math.floor(seconds / 60)}:${seconds%60}`}
            </div>
            <p className="text-gray-500 mt-2 text-sm">Hours : Minutes : Seconds</p>
          </div>
  )
}
