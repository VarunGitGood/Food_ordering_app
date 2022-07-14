import React, { useState } from 'react'
import Login from './Login'
import Signup from './Signup'




function Auth() {
    
    const [s ,sets] = useState(false)

    const createHandler = e => {
        sets(!s)
    }

  return (
    <>
        {!s ?  <Login onCreate={createHandler}/> :  <Signup onCret={createHandler}/>}
    </>
  )
}

export default Auth