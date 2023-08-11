import React from 'react'
import Header from '../components/Header/Header'
import Signup from './Signup';
import Signin from './Signin';




function Auth() {
  return (
    <div>
      <Header/>
      <div className="auth display-flex" >
        <Signup/>
        <Signin/>
      </div>
    </div>
  );
}



export default Auth