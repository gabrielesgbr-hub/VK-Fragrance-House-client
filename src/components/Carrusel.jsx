import Carousel from 'react-bootstrap/Carousel'
import imagen1 from '../assets/carrusel1.jpeg' 
import imagen2 from '../assets/carrusel1.jpeg'
import imagen3 from '../assets/carrusel1.jpeg' 

function Carrusel() {
  return (
    <Carousel fade className='mb-5 carousel'>
      <Carousel.Item>
        <img 
          className="d-block w-100 carousel-img" 
          src={imagen1} 
          alt="First slide" 
        />
      </Carousel.Item>
      <Carousel.Item>
        <img 
          className="d-block w-100 carousel-img" 
          src={imagen2} 
          alt="Second slide" 
        />
      </Carousel.Item>
      <Carousel.Item>
        <img 
          className="d-block w-100 carousel-img" 
          src={imagen3} 
          alt="Third slide" 
        />
      </Carousel.Item>
    </Carousel>
  )
}

export default Carrusel