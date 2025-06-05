import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Delivery from '../../assets/delivery-bike.png'

function Section5() {
  return (
    <>
        <section className='section5'>
            <Container>
                <Row className='justify-content-center align-item-center text-center'>
                    <Col sm={8}>
                        <h2>We Guarantee</h2>
                        <h1>30 Minutes Delivery!</h1>
                        <p>Aliquam a augue suscipit, luctus neque purus ipsum neque undo dolor primis libero tempus, blandit a cursus varius luctus neque magna</p>
                        <img src={Delivery} className='img-fluid mb-3'/>
                        <br/>
                        <Link to='/' className='btn btn_red '>
                            Call : 9898989898
                        </Link>
                        <Col className='text-center'>
                            <h1 className='pt-5'>Our Reviews</h1>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde aliquid inventore voluptate sint ad alias voluptatum sunt numquam, animi accusantium reiciendis labore quaerat. Dignissimos quibusdam tempore deleniti eaque libero eum quasi repudiandae quas obcaecati laborum.</p>
                        </Col>
                    </Col>
                </Row>
            </Container>
        </section>
    </>
  )
}

export default Section5