import { useEffect,useState } from 'react';
import {Form} from 'react-bootstrap'
import {  Link, useParams,useNavigate, Navigate } from 'react-router-dom';

import {useDispatch,useSelector} from 'react-redux'
import { Row, Col, ListGroup, Card, Button, Image } from 'react-bootstrap';
import Rating from '../components/Rating';
import { listProductDetails } from '../actions/productActions';

function ProductScreen() {
  
  const navigate=useNavigate();
  
  const [qty,setQty]=useState(1)
  const { id } = useParams();

  
  const addToCartHandler=()=>{
  navigate(`/cart/${id}?qty=${qty}`)
  }

  const dispatch=useDispatch()
  
  const productDetails=useSelector((state)=> state.productDetails)
  
  const {loading,error,product}=productDetails
  

  useEffect(()=>{
    dispatch(listProductDetails(id))
  },[dispatch,id])

  return (
    <>
      <Link className='btn btn-light my-3' to='/'>
        Go Back
      </Link>
      <Row>
        <Col md={6}>
          {product?.image && <Image src={product.image} alt={product.name} fluid />}
        </Col>
        <Col md={3}>
          <ListGroup variant='flush'>
            <ListGroup.Item>
              <h3>{product.name}</h3>
            </ListGroup.Item>
            <ListGroup.Item>
              <Rating value={product.rating} text={`${product.numReviews} reviews`} />
            </ListGroup.Item>
            <ListGroup.Item>Price: ${product.price}</ListGroup.Item>
            <ListGroup.Item>Description: {product.description}</ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={3}>
          <Card>
            <ListGroup variant='flush'>
              <ListGroup.Item>
                <Row>
                  <Col>Status:</Col>
                  <Col>{product.CountInStock > 0 ? 'In Stock' : 'Out of Stock'}</Col>
                </Row>
              </ListGroup.Item>
              {product.CountInStock > 0 && (
                <ListGroup.Item>
                  <Row>
                    <Col>Qty</Col>
                    <Col>
                      <Form.Control as="select" value={qty} onChange={(e)=>setQty(e.target.value)}>
                        {[...Array(product.CountInStock).keys()].map((x)=>(
                          <option key={x+1} value={x+1}>
                            {x+1}
                          </option>
                        ))}
                      </Form.Control>
                    </Col>
                  </Row>
                </ListGroup.Item>
              )}
              <ListGroup.Item>
                <Button className='btn-block' type='button' disabled={product.CountInStock === 0}
                onClick={addToCartHandler}>
                  Add to Cart
                </Button>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </>
  );
}

export default ProductScreen;
