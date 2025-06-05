import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    
    <>
      <footer className='foot'>
        <Container>
          <Row>
            <Col sm={6} lg={3}>
            <div className='text-center'>
              <h2>Location</h2>
              <p>302 Nanpura</p>
              <p>Surat 395009</p>
              <p>Gujrat,India</p>
            </div>
            </Col>
            <Col sm={6} lg={3}>
            <div className='text-center'>
              <h2>Working hours</h2>
              <p>Mon-Fri: 9:00AM - 10:00PM</p>
              <p>Saturday: 10:00AM - 8:30PM</p>
              <p>Sunday: 12:00PM - 5:00PM</p>
            </div>
            </Col>
            <Col sm={6} lg={3}>
            <div className='text-center'>
              <h2>Order Now</h2>
              <p>Lorem ipsum dolor sit.</p>
              <p>9898989898</p>
            </div>
            </Col>
            <Col sm={6} lg={3} className='text-center'>
              <h2>Follow Us</h2>
              <p>Lorem ipsum dolor sit.</p>
              <ul className='list-unstyled text-center'>
                <li>
                  <Link to='/'>
                    <i class="bi bi-facebook"></i>                    
                  </Link>
                </li>
                <li>
                  <Link to='/'>
                    <i class="bi bi-instagram"></i>                 
                  </Link>
                </li>
                <li>
                  <Link to='/'>
                    <i class="bi bi-twitter-x"></i>                  
                  </Link>
                </li>
                <li>
                  <Link to='/'>
                    <i class="bi bi-whatsapp"></i>                   
                  </Link>
                </li>                
              </ul>
            </Col>
          </Row>
          <Row>
            <Col className='text-center'>
              <p>Copyright All Rights Reserved</p>
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  )
}

export default Footer