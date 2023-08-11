import React from 'react'
import '../../pages/style.css';
import { Container, Row, Col } from 'react-bootstrap'


function Aboutpage() {
    return (
        <div className='aboutpagebackground'>
            <Container>
                <Row className='textbackground'>
                    <Col md={7} >
                        <h3 className='aboutmetext'>About <span>Us</span></h3>
                        <p className='aboutdetails'>AMA JI is an NGO committed to creating a brighter future for vulnerable communities worldwide. Our organization strives to tackle pressing social issues such as poverty, education, healthcare, and environmental sustainability. Through collaborative partnerships and innovative solutions, we empower individuals, families, and communities to overcome adversity and realize their full potential. With a strong focus on inclusivity, compassion, and sustainable development, we work tirelessly to break the cycle of poverty, provide access to quality education and healthcare, and promote environmental stewardship. Our dedicated team of volunteers, donors, and supporters share a common goal of transforming lives and building resilient communities. Join us in spreading hope, igniting change, and shaping a better tomorrow for all.
                        </p>
                    </Col>
                    <Col md={5}>
                        <div className="webimage"></div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Aboutpage