import React from 'react'
import { useEffect } from 'react'
import LOginPresenter from './LOginPresenter'

export default function LoginConatiner() {
 
  const getLoginData = (values) => {
    console.log("Login data:", values);
  };

  return (
    <div>
      <LOginPresenter onSubmit={getLoginData} />
    </div>
  );
}





