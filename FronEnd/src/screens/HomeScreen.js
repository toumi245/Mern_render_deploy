import React,{useEffect,useState} from 'react'
import { useDispatch,useSelector} from 'react-redux'
// import Products from  '../products'
import Product from '../components/product'
import {Row,Col} from 'react-bootstrap'
import {listProducts } from '../actions/productActions'
import Message from '../components/Message'
import Loader from '../components/Loader'
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Carrousel from '../components/Carrousel'
export default function HomeScreen() {
  const dispatch=useDispatch()
  const productList=useSelector((state)=> state.productList)
  const {loading,error,products}=productList
console.log(products)
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(()=>{
      dispatch(listProducts())
    },[dispatch])
    const searchResults = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
 
  );

  
  return (
    <div >

<header>
        
        <InputGroup className="mb-3">
    <Form.Control
      placeholder="SearchProduct"
      aria-label="SearchProduct"
      aria-describedby="basic-addon2"
      value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
      />
    
  </InputGroup>
        <Carrousel/>
      </header>
        {loading ? (
          <Loader/>
          )
          :error ? (
            <Message variant='danger'>{error}</Message>
            )
            :(
              <Row>
        {searchResults.map((product,indx)=>{
            return(
                <Col key={indx} sm={12} md={6} lg={4} xl={3}>
                  <div>product {indx}</div>
            <Product singleItem={product}/>
        </Col>
            )
        })}
        </Row>
            )
          
        }
    </div>
  )
}

