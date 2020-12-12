import React from 'react';
import { Slide } from 'react-slideshow-image';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css';
import './slideshow.css'
import 'react-slideshow-image/dist/styles.css'

const slideImages = [
  'images/armbanden/Rood_hardjes.jpg',
  'images/armbanden/Rood_hardjes.jpg',
  'images/armbanden/Rood_hardjes.jpg',

];

const Slideshow = () => {
    return (
      <div>
        <br></br>
        <h1> Hearth bracelet </h1>
          <div class="slides">
        <Slide easing="ease">
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[0]})`}}>
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[1]})`}}>
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[2]})`}}>
            </div>
          </div>
  
        </Slide>
        </div>
        <div class="Card">
          <Card style={{ width: '18rem' }}>
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                yeeeee
              </Card.Text>
              <Button variant="primary">add to shopping card</Button>
            </Card.Body>
          </Card>
        </div>
      </div>
    )
};
export default Slideshow;