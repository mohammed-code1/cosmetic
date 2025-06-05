import React, { useEffect, useState } from 'react'
import { Col, Container, Row , Card , Button } from 'react-bootstrap'
import Image1 from '../../assets/image.png'
import Image2 from '../../assets/image.png'
import Image3 from '../../assets/image.png'
import Image4 from '../../assets/image.png'
import Image5 from '../../assets/image.png'
import Image6 from '../../assets/image.png'
import Image7 from '../../assets/image.png'
import Image8 from '../../assets/image.png'
import Cards from '../../Components/Layout/Cards'
import { Link, useNavigate } from 'react-router-dom'
// import { useCart } from '../../context/Cartcontext'

const mockData = [
  {
    id: "0001",
    image: Image1,
    title: "Crispy Chicken",
    paragraph: "Chicken breast, chilli sauce, tomatoes, pickles, coleslaw",
    // rating: 5,
    price: 99.15,
  },
  {
    id: "0002",
    image: Image2,
    title: "Ultimate Bacon",
    paragraph: "House patty, cheddar cheese, bacon, onion, mustard",
    // rating: 4.5,
    price: 99.32,
  },
  {
    id: "0003",
    image: Image3,
    title: "Black Sheep",
    paragraph: "American cheese, tomato relish, avocado, lettuce, red onion",
    // rating: 4,
    price: 69.15,
  },
  {
    id: "0004",
    image: Image4,
    title: "Vegan Burger",
    paragraph: "House patty, cheddar cheese, bacon, onion, mustard",
    // rating: 3.5,
    price: 99.25,
  },
  {
    id: "0005",
    image: Image5,
    title: "Double Burger",
    paragraph: "2 patties, cheddar cheese, mustard, pickles, tomatoes",
    // rating: 3.0,
    price: 59.25,
  },
  {
    id: "0006",
    image: Image6,
    title: "Turkey Burger",
    paragraph: "Turkey, cheddar cheese, onion, lettuce, tomatoes, pickles",
    // rating: 3,
    price: 79.18,
  },
  {
    id: "0007",
    image: Image7,
    title: "Smokey House",
    paragraph: "patty, cheddar cheese, onion, lettuce, tomatoes, pickles",
    // rating: 2.5,
    price: 99.19,
  },
  {
    id: "0008",
    image: Image8,
    title: "Classic Burger",
    paragraph: "cheddar cheese, ketchup, mustard, pickles, onion",
    // rating: 2.0,
    price: 89.12,
  },
  // Add more mock data objects as needed
];

function Section3() {
    const getCartItems = () => {
        const data = localStorage.getItem('cartitems');
        return data ? JSON.parse(data) : [];
    };

    const addItemToCart = (item) => {
        const cart = getCartItems();
        cart.push(item);
        localStorage.setItem('cartitems', JSON.stringify(cart));
    };

    const navigate = useNavigate();

    const handleAddToCart = (item) => {
        addItemToCart(item);
        navigate('/cart');
    };
    
  return (
    <>
        <section className='section3'>
            <Container>
                <Row>
                    <Col lg={{span:8, offset:2}} className='text-center mb-5'>
                        <h2 className='th2'>OUR CRAZY OFFERINGS</h2>
                        <p className='tp'>Aliquam a augue suscipit, luctus neque purus ipsum neque undo dolor primis libero tempus, blandit a cursus varius magna</p>
                    </Col>
                </Row>
                <Row>
                    {/* {mockData.map((cardData,index) =>{
                        <Cards 
                            key={index}
                            image={cardData.image}
                            title={cardData.title}
                            paragraph={cardData.paragraph}
                            price={cardData.price}
                        />
                    })} */}
                    {/* <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={Image1} />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card> */}
                </Row>
                <Row className="justify-content-md-center">{mockData.map((carddata,index) => (
                    <Col sm={6} lg={4} xl={3} className='mb-4' key={index}>
                        <Card className='overflow-hidden'>
                            <Card.Img variant="top" src={carddata.image} />
                            <Card.Body>
                                <div className='d-flex align-item-center justify-content-center'>
                                    <div className='wishlist'>
                                        <i class="bi bi-heart"></i>
                                    </div>
                                </div>
                                <Card.Title>{carddata.title}</Card.Title>
                                <Card.Text>
                                {carddata.paragraph}
                                </Card.Text>
                                <div className='d-flex gap-4'>
                                    <div className='pro_price'>
                                        <h5 className='mb-0'>${carddata.price}</h5>
                                    </div>
                                    {/* <div className='add_to_cart'>
                                        <Link to="/cart" >
                                            <i class="bi bi-bag"></i>  
                                            Add To Cart 
                                        </Link>
                                    </div> */}
                                    <div className='add_to_cart'>
                                        <Button onClick={() => handleAddToCart(carddata)}>
                                            <i className="bi bi-bag"></i> Add To Cart
                                        </Button>
                                    </div>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
                </Row>


                {/* <Row className="justify-content-md-center">{mockData.map((carddata,index) => (
                    <Col md={6} lg={4} className='mb-4 mb-md-0' key={index}>
                        <div className='about_box text-center'>
                            <div className='about_icon'>
                                <img src={carddata.image} className='img-fluid' />
                            </div>
                            <h4>{carddata.title}</h4>
                            <p>{carddata.paragraph}</p>
                        </div>
                    </Col>
                ))} 
                </Row>*/}
            </Container>
        </section>
    </>
  )
}

export default Section3