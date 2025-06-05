import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Web from '../../assets/my1.webp'

function Section2() {
  return (
    <>
        <section className='section2'>
            <Container>
                <Row>
                    <Col lg={{span:8 ,offset:2}} className='text-center'>
                        <h2>WHAT YOU SEE IS YOU GET AS WE CARE ABOUT OUR CUSTOMERS</h2>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias tempore impedit eos delectus, est voluptatum perferendis ad accusamus atque ex ea ducimus dolorum odit, 
                            quibusdam optio necessitatibus laboriosam? Vel, inventore.
                        </p>
                        <Link to='/' className='btn order_now btn_red'>
                            Expolre Products
                        </Link>
                    </Col>
                </Row>
            </Container>
            <img src={Web} alt="" className='img-fluid'/>
        </section>
    </>
  )
}

export default Section2