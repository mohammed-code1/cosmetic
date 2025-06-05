import React from 'react'
import { Col,Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Cards({image,title,paragraph,price}) {
  return (
    <>
        <Col sm={6} lg={4} xl={3} className='mb-4'>
            <Card className='overflow-hidden'>
                <Card.Img variant="top" src={image} />
                <Card.Body>
                    <div className='d-flex align-item-center justify-content-center'>
                        <div className='wishlist'>
                            <i class="bi bi-heart"></i>
                        </div>
                    </div>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                    {paragraph}
                    </Card.Text>
                    <div className='d-flex align-item-center justify-content-center'>
                        <div className='pro_price'>
                            <h5 className='mb-0'>${price}</h5>
                        </div>
                        <div className='add_to_cart'>
                            <Link to="/">
                                <i class="bi bi-bag"></i>
                                Add To Cart
                            </Link>
                        </div>
                    </div>
                </Card.Body>
            </Card>
        </Col>
    </>
  )
}

export default Cards