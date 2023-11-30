import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import axios from "axios";
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBCheckbox,
}
  from 'mdb-react-ui-kit';

function Signup() {

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [_,setCookies] = useCookies(["access_token"]);

  const navigate=useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("https://amaji-backend.onrender.com/auth/register", {
        firstName,
        lastName,
        email,
        password
      })
      setCookies("access_token", response.data.token);
      window.localStorage.setItem("userID", response.data.userID);
      navigate("/")
      alert("registration completed. Now login");
    } catch (error) {
      console.log(error);
    }

  }

  return (
    <div className="auth-container">
      <MDBContainer fluid className='p-4'>

        <MDBRow>

          <MDBCol md='6' className='text-center text-md-start d-flex flex-column justify-content-center'>

            <h1 className="my-5 display-3 fw-bold ls-tight px-3">
              To Join Us<br />
              <span className="text-primary">Sign Up</span>
            </h1>

            <p className='px-3' style={{ color: 'hsl(217, 10%, 50.8%)' }}>
            Welcome to AMAJI Official! Join our vibrant community today and unlock a world of exciting possibilities. Signing up is quick and straightforward. Fill the details and hit the Sign up button.
            </p>

          </MDBCol>

          <MDBCol md='6'>

            <MDBCard className='my-5'>
              <MDBCardBody className='p-5'>
                <h1>Sign Up</h1>

                <MDBRow className='pt-4'>
                  <MDBCol col='6'>
                    <MDBInput wrapperClass='mb-4' label='First name' type="text" id="firstname"
                      value={firstName}
                      onChange={(event) => {
                        setFirstName(event.target.value);
                      }} />
                  </MDBCol>

                  <MDBCol col='6'>
                    <MDBInput wrapperClass='mb-4' label='Last name' type="text" id="lastname"
                      value={lastName}
                      onChange={(event) => {
                        setLastName(event.target.value);
                      }} />
                  </MDBCol>
                </MDBRow>

                <MDBInput wrapperClass='mb-4' label='Email' type="text" id="email"
                  value={email}
                  onChange={(event) => {
                    setEmail(event.target.value);
                  }} />
                <MDBInput wrapperClass='mb-4' label='Password' type="password" id="password"
                  value={password}
                  onChange={(event) => {
                    setPassword(event.target.value);
                  }} />

                <div className='d-flex justify-content-center mb-4'>
                  <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Subscribe to our newsletter' />
                </div>

                <MDBBtn className='w-100 mb-4' size='md' onClick={handleSubmit}>Sign Up</MDBBtn>

                <div className="text-center">

                  <p>already have an account <button>SignIn</button></p>

                </div>

              </MDBCardBody>
            </MDBCard>

          </MDBCol>

        </MDBRow>

      </MDBContainer>

    </div>
  )
}

export default Signup;
