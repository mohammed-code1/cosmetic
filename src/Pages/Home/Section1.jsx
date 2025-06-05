import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Lip from '../../assets/cap2.JPG'
import Burger from '../../assets/hero-2.png'
import { Link } from 'react-router-dom'

function Section1() {
  return (
    <>
      <section className='first'>
        <Container>
          <Row>
            <Col lg={5} className='mb-lg-0'>
              <div className='position-relative'>
                <img src={Lip} className='img-fluid'/>
                <div className='pricetag'>
                  <div className='pricetext'>
                    <h4 className='h4one'>Only</h4>
                    <h4 className='h4two'><i class="bi bi-currency-rupee"></i>199</h4>
                  </div>
                </div>
              </div>              
            </Col>
            <Col>
              <div className='first_text text-center'>
                  <h1 className='firsth1'>Big Offer</h1>
                  <h2 className='sech2'>With Quality</h2>
                  <p className='firstp pt-2 pb-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque dignissimos ipsam earum saepe numquam architecto dicta fuga?</p>
                  <Link to="/" className='btn order_now'>
                    Order Now
                  </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}

export default Section1