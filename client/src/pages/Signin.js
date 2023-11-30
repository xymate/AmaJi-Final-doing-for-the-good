import React, { useState } from 'react';
import axios from "axios";
import { useCookies } from 'react-cookie';
import login from '../../src/Assets/login.png';
import { useNavigate } from 'react-router-dom';
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
  MDBInput,
  MDBCheckbox
}
  from 'mdb-react-ui-kit';


function Signin() {


  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [_, setCookies] = useCookies(["access_token"]);

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("https://amaji-backend.onrender.com/auth/login", {
        email,
        password
      })
      setCookies("access_token", response.data.token);
      window.localStorage.setItem("userID", response.data.userID);
      navigate("/")
      alert("successfully logged in.");
    } catch (error) {
      console.log(error);
    }

  }

  return (
    <div className="auth-container">

      <MDBContainer className='my-5'>
        <MDBCard>

          <MDBRow className='g-0 d-flex align-items-center'>

            <MDBCol md='5' className='ml-5 padding-left 5'>
              <MDBCardImage src={login} alt='globe' className='' fluid />
            </MDBCol>

            <MDBCol md='5'>
              

              <MDBCardBody className='p-5'>

              <h1>Log In</h1>

                <MDBInput wrapperClass='mb-4 mt-4'  label='Email address' type="email" id="email"
                  value={email}
                  onChange={(event) => {
                    setEmail(event.target.value);
                  }} />
                <MDBInput wrapperClass='mb-4' label='Password' type="password" id="password"
                  value={password}
                  onChange={(event) => {
                    setPassword(event.target.value);
                  }} />

                <div className="d-flex justify-content-between mx-4 mb-4">
                  <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' />
                  <a href="!#">Forgot password?</a>
                </div>

                <MDBBtn className="mb-4 w-100" onClick={handleSubmit}>Sign in</MDBBtn>

              </MDBCardBody>

            </MDBCol>

          </MDBRow>

        </MDBCard>
      </MDBContainer>
    </div>
  )
}

export default Signin;
