import React from 'react'
import { useEffect } from 'react'
import LOginPresenter from './LOginPresenter'

export default function LoginConatiner() {
 
    const getLoginData=(values)=>{}
  return (
    <div>
    
     <LOginPresenter onSubmit={getLoginData}></LOginPresenter>
    </div>
  )
}





