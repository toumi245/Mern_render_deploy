import React,{useState,useEffect} from 'react'
import { useNavigate} from 'react-router-dom'
import { Form,Button,Row,Col} from 'react-bootstrap'
import { useDispatch,useSelector } from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
import  {getUserDetails,updateUserProfile} from '../actions/userAction'
export default function ProfileScreen() {
   
    const dispatch=useDispatch()
    const navigate=useNavigate()

    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [confirmPassword,setConfirmPassword]=useState('')
    const [message,setMessage]=useState(null)

    const [name,setName]=useState('')

    const userDetails=useSelector((state)=>state.userDetails)
    const {loading,error,user}=userDetails
    
    const userLogin=useSelector((state)=>state.userLogin)
    const {userInfo}=userLogin
    
    const userUpdateProfile=useSelector((state)=>state.userUpdateProfile)
    const {success}= userUpdateProfile



    useEffect(()=>{

        if (!userInfo ){
            navigate('/login')

        }else{
            if(!user.name){
                dispatch(getUserDetails('profile'))
            }else{
                setName(user.name)
                setEmail(user.email)
            }
        }
    },[navigate,userInfo,dispatch,user])
    const submitHandler=(e)=>{
        e.preventDefault()
        if(password!==confirmPassword){
            setMessage('password do not match')
        }
        else{
            dispatch(updateUserProfile({id:user._id,name,email,password}))
        }

    }
    
    return (
    <Row>
        <Col md={3}>
        <h1>user Profile</h1>
        {message && <Message variant='danger'>{message}</Message>}
        {success&& <Message variant='sucess'>Profile updated successfuly</Message>}

        {/* {loading && <Loader/>} */}
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
                    Confirm Password 
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
                update
            </Button>
        </Form>
        </Col>
        <Col md={9}>
            <h2>my ordrers</h2>
        </Col>
    </Row>
        
       
  )
}

