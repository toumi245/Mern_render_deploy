import React from 'react'
import {Card} from 'react-bootstrap'
import Rating from './Rating'
import { Link } from 'react-router-dom'

export default function Product({singleItem}) {


  return (
    <div>
      
        <Card style={{ width: '18rem' }}>
            <Link to={`/product/${singleItem._id}`}>
      <Card.Img variant="top" src={singleItem.image} />
      </Link>
      <Card.Body>
      <Link to={`/product/${singleItem._id}`}>
        <Card.Text>{singleItem.name}   </Card.Text>
        </Link>
        <Card.Text>
            <Rating 
             value={singleItem.rating}
             text={singleItem.numReviews}
             color='yellow'/>
        </Card.Text>
        <div><Card.Text>{singleItem.description}   </Card.Text></div>
        <Card.Text>{singleItem.brand}   </Card.Text>
        <Card.Text>{singleItem.category}   </Card.Text>
        <Card.Text>{singleItem.price}   </Card.Text>
      </Card.Body>
    </Card>
    </div>
  )
}
