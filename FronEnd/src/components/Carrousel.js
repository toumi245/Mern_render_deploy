import Carousel from 'react-bootstrap/Carousel';
import { Link } from 'react-router-dom';

function Carrousel() {
  return (
    <Carousel>
      <Carousel.Item interval={1000}>
        <Link to='/product/64595b95aceb5f5ee815e008'>
        <img
          className="d-block w-100"
          src="https://www.scoop.com.tn/modules/sphomeslider/images/072a72151f5a3d17195720bc1fe82a271960e480_ASUS-ZENSCREEN-MB165B%20(1).png"
          alt="First slide"
        />
        </Link>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <Link to='/product/64595b95aceb5f5ee815e006'>
        <img
          className="d-block w-100"
          src="https://www.scoop.com.tn/modules/sphomeslider/images/933b64507d4ea940efa542cfad97a97570cdd651_Kaspersky.png"
          alt="Second slide"
        />
        </Link>
      
      </Carousel.Item>
      <Carousel.Item>
        <Link to='/product/64595b95aceb5f5ee815e007'>
        <img
          className="d-block w-100"
          src="https://www.scoop.com.tn/modules/sphomeslider/images/2d0859f1ac357d1d4a47dbf8225cb616ab9f655a_MSI-Raider-Pulse.png"
          alt="Third slide"
        />
        </Link>
      </Carousel.Item>
    </Carousel>
  );
}

export default Carrousel;