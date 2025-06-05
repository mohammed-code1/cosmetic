import React, {useState} from 'react'
import { Container, Nav , Navbar ,NavDropdown   } from 'react-bootstrap';
import '../../styles/headerstyle.css'
import { Link } from 'react-router-dom';
import Logo from '../../assets/Capture1.JPG'

function Header() {
    const [nav,setNav] = useState(false);

    const changeValueOnScroll = () => {
        const scrollvalue=document?.documentElement?.scrollTop;
        scrollvalue > 100 ? setNav(true) : setNav(false);
    };

    window.addEventListener("scroll",changeValueOnScroll)


  return (
    <>
    <header>
    <Navbar expand="lg" className={`${nav=== true ? "sticky" : ""}`}>
        <Container>
            <Navbar.Brand href="#home">
                <Link to="/" className='logo'>
                    <img src={Logo} className='img-fluid ' />
                </Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
                <Nav.Link as={Link} to="/">Home</Nav.Link>
                <Nav.Link as={Link} to="/product">Products</Nav.Link>
                <Nav.Link as={Link} to="/aboutus">AboutUs</Nav.Link>
                <Nav.Link as={Link} to="/contactus">Contact Us</Nav.Link>            
                <Nav.Link as={Link} to="/cart" >
                    <div className='cart'>
                        <i class="bi bi-cart"></i>
                        <em className='round'>2</em>
                    </div>
                </Nav.Link>  
            </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
    </header>
    </>
  )
}


export default Header