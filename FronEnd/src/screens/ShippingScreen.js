import React,{useState} from 'react'
import { Form,Button } from 'react-bootstrap'
import { useDispatch,useSelector } from 'react-redux'
import FormContainer from '../components/FormContainer'
import {saveShippingAdress} from '../actions/cartActions'
import { useNavigate } from 'react-router-dom'
import CheckoutSteps from '../components/CheckoutSteps'
function ShippingScreen() {

const navigate=useNavigate()
const dispatch=useDispatch();
const cart=useSelector((state)=>state.cart)
const {shippingAdress} =cart   
const [adress,setAdress]=useState(shippingAdress.adress)
    const [city,setCity]=useState(shippingAdress.city)
    const [postalCode,setPostalCode]=useState(shippingAdress.postalCode)
    const [country,setCountry]=useState(shippingAdress.country)

    const submitHandler=(e)=>{
    e.preventDefault()
    console.log("submit")
    dispatch(saveShippingAdress({adress,city,postalCode,country}))
    navigate('/payment ')
}
    return (
    <FormContainer>
        <CheckoutSteps step1 step2/>
        <h1>Shipping</h1>
        <Form onSubmit={submitHandler}>
            <Form.Group controlId='adress'>
                <Form.Label>Adress</Form.Label>
                <Form.Control type='text'
                placeholder='Enter adress'
                value={adress}
                required
                onChange={(e)=>setAdress(e.target.value)}>
                </Form.Control>
            </Form.Group>
            <Form.Group controlId='city'>
                <Form.Label>City</Form.Label>
                <Form.Control type='text'
                placeholder='Enter City'
                value={city}
                required
                onChange={(e)=>setCity(e.target.value)}>
                </Form.Control>
            </Form.Group>

            <Form.Group controlId='postalCode'>
                <Form.Label>Postal Code</Form.Label>
                <Form.Control type='text'
                placeholder='Enter Postal Code'
                value={postalCode}
                required
                onChange={(e)=>setPostalCode(e.target.value)}>
                </Form.Control>
            </Form.Group>

            <Form.Group controlId='country'>
                <Form.Label>country</Form.Label>
                <Form.Control type='text'
                placeholder='Enter country'
                value={country}
                required
                onChange={(e)=>setCountry(e.target.value)}>
                </Form.Control>
            </Form.Group>

            <Button type='submit' variant='primary'>
                continue
            </Button>
        </Form>
    </FormContainer>
  )
}

export default ShippingScreen