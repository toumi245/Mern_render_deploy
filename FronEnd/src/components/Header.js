import React ,{useState}from 'react'
import { useDispatch,useSelector } from 'react-redux';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {LinkContainer} from 'react-router-bootstrap'
import DropDown from './DropDown';
import { NavDropdown } from 'react-bootstrap';
import {logout} from '../actions/userAction'
import './style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAddressBook } from '@fortawesome/free-solid-svg-icons'

// Inside your component's render method:
<FontAwesomeIcon icon={faAddressBook} />

export default function Header() {
  const dispatch=useDispatch()
  
  const userLogin=useSelector((state)=>state.userLogin)
  const {userInfo}=userLogin
  const logoutHandler=()=>{
    dispatch(logout())
  }
  const productList=useSelector((state)=> state.productList)
  const {loading,error,products}=productList

  const [localSearchTerm, setLocalSearchTerm] = useState('');

  const handleSearch=(e)=>{
    const term = e.target.value;

    setLocalSearchTerm(term);
  }

  return (
    <div>
      
        <Navbar collapseOnSelect className='col-nav' expand="lg" bg="primary" variant="dark">
        <DropDown/>
        <Container>
        <LinkContainer to='/'>
        <Navbar.Brand >Hi-TECH</Navbar.Brand>
        </LinkContainer>
        
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <LinkContainer to='/cart'>
            <Nav.Link ><i className='fas fa-shopping-cart'></i>Cart</Nav.Link>
            </LinkContainer>
            <LinkContainer to='/contact'><Nav.Link><FontAwesomeIcon icon={faAddressBook} />
Contact us</Nav.Link></LinkContainer>

            {userInfo ?(
              <NavDropdown title={userInfo.name} id='username'>
              <LinkContainer to='/profile'>
              <NavDropdown.Item>
                Profile
              </NavDropdown.Item >
              </LinkContainer>
              <NavDropdown.Item onClick={logoutHandler}>
                LogOut
              </NavDropdown.Item >
            </NavDropdown>
            ):(
              <LinkContainer to='/login'>
                <Nav.Link>
                  <i className='fas fa-user'></i>SignIn
                </Nav.Link>
              </LinkContainer>
              
            )}
  
          </Nav>
          
          
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
    </div>
  )
}
