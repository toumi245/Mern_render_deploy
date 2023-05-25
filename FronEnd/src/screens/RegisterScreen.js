import React,{useState,useEffect} from 'react'
import {Link, useLocation, useNavigate} from 'react-router-dom'
import { Form,Button,Row,Col} from 'react-bootstrap'
import { useDispatch,useSelector } from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
import  FormContainer from '../components/FormContainer'
import  {register} from '../actions/userAction'
export default function RegisterScreen() {
   
    const dispatch=useDispatch()
    const location=useLocation()
    const navigate=useNavigate()

    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [confirmPassword,setConfirmPassword]=useState('')
    const [message,setMessage]=useState(null)

    const [name,setName]=useState('')

    const userRegister=useSelector((state)=>state.userRegister)
   
    const {loading,error,userInfo}=userRegister
    const redirect=location.search ? location.search.split('=')[1] :'/'
   
    useEffect(()=>{

        if (userInfo && navigate && redirect){
           const result= navigate(redirect)

        }
    },[navigate,redirect,userInfo])
    const submitHandler=(e)=>{
        e.preventDefault()
        if(password!==confirmPassword){
            setMessage('password do not match')
        }
        else{
            dispatch(register(name,email,password))
        }

    }
    
    return (

    <FormContainer>
        <h1>Sign up</h1>
        {message && <Message variant='danger'>{message}</Message>}
        {loading && <Loader/>}
        <Form onSubmit={submitHandler}>
        <Form.Group controlId='Name'>
                <Form.Label>
                    name
                </Form.Label>
                <Form.Control
                type='name'
                placeholder='enter name'
                value={name}
                onChange={(e)=>setName(e.target.value)}>
                </Form.Control>
            </Form.Group>
            <Form.Group controlId='email'>
                <Form.Label>
                    Email Adress
                </Form.Label>
                <Form.Control
                type='email'
                placeholder='enter Email'
                value={email}
                onChange={(e)=>setEmail(e.target.value)}>
                </Form.Control>
            </Form.Group>
            <Form.Group controlId='password'>
                <Form.Label>
                    Password 
                </Form.Label>
                <Form.Control
                type='password'
                placeholder='enter password'
                value={password}
                onChange={(e)=>setPassword(e.target.value)}>
                </Form.Control>
            </Form.Group>
            <Form.Group controlId='confirmPassword'>
                <Form.Label>
                    Password 
                </Form.Label>
                <Form.Control
                type='password'
                placeholder='Confirm password'
                value={confirmPassword}
                onChange={(e)=>setConfirmPassword(e.target.value)}>
                </Form.Control>
            </Form.Group>
            <Button type='submit'
            variant='primary'>
                Register
            </Button>
        </Form>
        <Row className='py-3'>
            <Col>
                have an customer?
                <Link to={redirect? `/login?redirect=${redirect}` : '/login'}>
                Login
                </Link>
            </Col>

        </Row>
    </FormContainer>
  )
}

