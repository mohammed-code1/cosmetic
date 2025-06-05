
import { Button, Col, Container, Row } from 'react-bootstrap'
import Image1 from '../../assets/image.png'
import { useLocation } from 'react-router-dom';
import { useState,useEffect } from 'react';


function Cartsecone() {
  const [cartitems, setCartItems] = useState([]);


  useEffect(() => {
    const data = localStorage.getItem('cartitems');
    if (data) {
      setCartItems(JSON.parse(data));
    }
    
  }, []);

  function clearcart(){
    localStorage.clear();
    setCartItems([]); 
  }
  

  // const location = useLocation();
  // const cartitems = location.state?.cartItems || [];
  // console.log(cartitems)


  return (
    <>
    <section className='cartsec1'>
        <Container>
            <Row>
                <Col lg={{span:6, offset:3}} className='text-center'>
                    <h1>Welcome To Your Cart</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                </Col>
            </Row>
        </Container>
    </section>
    <section className='cartsec2'>
      {/* <Container>
        <Row>
          <Col sm={12} xs={12} className='data1'>
            <div className='d-flex position-relative'>
              <img src={Image1}  className='img-fluid'/>
              <h2 className='title'>Lipstick</h2>
              <p className='description'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore.</p>
              <h3 className='price'>Price: ₹199</h3>
            </div>            
          </Col>
        </Row>
      </Container> */}
      <Container>
        <Row>
          {cartitems.length > 0 ? (
            cartitems.map((item, index) => (
              <Row className='pt-4 '>
              <Col sm={12} key={index} className='data1 '>
                <div className='d-flex align-items-center'>
                  <img src={item.image} className='img-fluid' width={100} />
                  <div className='ms-3'>
                    <h2>{item.title}</h2>
                    <p>{item.paragraph}</p>
                    <h4>₹{item.price}</h4>
                  </div>
                </div>
              </Col>
              </Row>
            ))
          ) : (
            <Col><p>Your cart is empty.</p></Col>
          )}
        </Row>
        <Row className='mt-5'>
          <Col>
            <Button onClick={() => clearcart()}>Clear</Button>
          </Col>
        </Row>
      </Container>
    </section>

    </>
  )
}

export default Cartsecone