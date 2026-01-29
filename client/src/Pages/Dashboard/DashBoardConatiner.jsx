import React from 'react'
import DashBoardpresesnter from './Dashboardpresesnter/DashBoardpresesnter'
import Navbar from '../../Components/Navbar/Navbar';

export default function DashBoardConatiner() {
    const data="sam";
  return (
   <>
    <div className="min-h-screen bg-gray-50">
      <Navbar/>
      
          <DashBoardpresesnter data={data}></DashBoardpresesnter>
    </div>

  </>
  )
}
