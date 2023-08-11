import React from 'react'
import '../../pages/style.css';
import { Container, Row, Col } from 'react-bootstrap'
import Text from '../Homepage/Text'
import {
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";

function Home() {
  return (
    <div className='homepagebackground'>
      <Container>
        <Row>
          <Col md={7}>
            <h2 className='headtext'>Welcome<span className='wave'>🙏 </span></h2>
            <h2 className='nametext'>AMA JI aims at</h2>
            <span></span>
            <Text />
            <button onClick={() => {
              window.open("#");
            }}
              className='socailmediabtn'><AiOutlineTwitter className='icon' /></button>
            <button onClick={() => {
              window.open("https://instagram.com/ama_ji_?igshid=MzRlODBiNWFlZA==");
            }}
              className='socailmediabtn'><AiFillInstagram className='icon' /></button>
          </Col>

          <Col md={5}>
            <div className="imagedeveloper">
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Home