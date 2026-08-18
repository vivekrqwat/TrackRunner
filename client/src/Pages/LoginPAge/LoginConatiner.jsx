import React, { use } from 'react'
import { useEffect } from 'react'
import LOginPresenter from './LOginPresenter'

export default function LoginConatiner() {
 
  const getLoginData = (values) => {
    console.log("Login data:", values);
  };

    useEffect(()=>{
      console.log("container loaded")
    },[])
  return (
    <div>
      
      <LOginPresenter onSubmit={getLoginData} />
    </div>
  );
}





