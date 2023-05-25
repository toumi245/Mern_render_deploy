import React,{useState} from 'react'
import { Form,Button,Col } from 'react-bootstrap'
import { useDispatch,useSelector } from 'react-redux'
import FormContainer from '../components/FormContainer'
import {savePaymentMethod} from '../actions/cartActions'
import { useNavigate } from 'react-router-dom'
import CheckoutSteps from '../components/CheckoutSteps'
function PaymentScreen() {

const navigate=useNavigate()
const dispatch=useDispatch();
const cart=useSelector((state)=>state.cart)
const {shippingAdress} =cart   
if(!shippingAdress){
    navigate('/shipping')
}
     const [paymentMethod,setPaymentMethod]=useState('paypal')

    const submitHandler=(e)=>{
    e.preventDefault()
    console.log("submit")
    dispatch(savePaymentMethod(paymentMethod))
    navigate('/placeorder ')
}
    return (
    <FormContainer>
        <CheckoutSteps step1 step2 step3/>
        <h1>payment methods</h1>
        <Form onSubmit={submitHandler}>
            <Form.Group>
                <Form.Label as='legend'>Select Method</Form.Label>
              <Col>
              <Form.Check
              type='radio'
              label='Paypal or credit card'
              id='Paypal'
              name='paymentMethod'
              value='Paypal'
              checked
              onChange={(e)=>setPaymentMethod(e.target.value)}>

              </Form.Check>
              <Form.Check
              type='radio'
              label='stripe'
              id='Stripe'
              name='paymentMethod'
              value='Stripe'
              onChange={(e)=>setPaymentMethod(e.target.value)}>
              </Form.Check>
              </Col>
            </Form.Group>
            
          
 
            <Button type='submit' variant='primary'>
                continue
            </Button>
        </Form>
    </FormContainer>
  )
}

export default PaymentScreen