import React from 'react'
import { Carousel, Col, Container, Row } from 'react-bootstrap'
import Photo1 from '../../assets/blog/review-author-1.jpg'
import Photo2 from '../../assets/blog/review-author-2.jpg'
import Photo3 from '../../assets/blog/review-author-3.jpg'
import Photo4 from '../../assets/blog/review-author-5.jpg'


function Section6() {
  return (
    <>
        <section className='section6'>
            <Container>
                <Row className='reviews'>
                    <Carousel>
                        <Carousel.Item>
                            <Carousel.Caption>
                                <div className='user'>
                                    <img src={Photo1} className='img-fluid'/>
                                </div>
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa maiores accusamus unde officiis magni, hic minus qui asperiores rerum inventore laboriosam! Mollitia nostrum magnam voluptate, iste aperiam cumque?
                                </p>
                                <div className='rating mb-2'>
                                    <i className='bi bi-star-fill'></i>
                                    <i className='bi bi-star-fill'></i>
                                    <i className='bi bi-star-fill'></i>
                                    <i className='bi bi-star-fill'></i>
                                    <i className='bi bi-star-fill'></i>                                        
                                </div>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <Carousel.Caption>
                                <div className='user'>
                                    <img src={Photo2} className='img-fluid'/>
                                </div>
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa maiores accusamus unde officiis magni, hic minus qui asperiores rerum inventore laboriosam! Mollitia nostrum magnam voluptate, iste aperiam cumque?
                                </p>
                                <div className='rating mb-2'>
                                    <i className='bi bi-star-fill'></i>
                                    <i className='bi bi-star-fill'></i>
                                    <i className='bi bi-star-fill'></i>
                                    <i className='bi bi-star-fill'></i>
                                    <i className='bi bi-star-fill'></i>                                        
                                </div>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <Carousel.Caption>
                                <div className='user'>
                                    <img src={Photo3} className='img-fluid'/>
                                </div>
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa maiores accusamus unde officiis magni, hic minus qui asperiores rerum inventore laboriosam! Mollitia nostrum magnam voluptate, iste aperiam cumque?
                                </p>
                                <div className='rating mb-2'>
                                    <i className='bi bi-star-fill'></i>
                                    <i className='bi bi-star-fill'></i>
                                    <i className='bi bi-star-fill'></i>
                                    <i className='bi bi-star-fill'></i>
                                    <i className='bi bi-star-fill'></i>                                        
                                </div>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <Carousel.Caption>
                                <div className='user'>
                                    <img src={Photo4} className='img-fluid'/>
                                </div>
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa maiores accusamus unde officiis magni, hic minus qui asperiores rerum inventore laboriosam! Mollitia nostrum magnam voluptate, iste aperiam cumque?
                                </p>
                                <div className='rating mb-2'>
                                    <i className='bi bi-star-fill'></i>
                                    <i className='bi bi-star-fill'></i>
                                    <i className='bi bi-star-fill'></i>
                                    <i className='bi bi-star-fill'></i>
                                    <i className='bi bi-star-fill'></i>                                        
                                </div>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </Row>
            </Container>
        </section>    
    </>
  )
}

export default Section6