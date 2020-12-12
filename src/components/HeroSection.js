import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function kettingen(){
  window.location = "/kettingen"
}
function armbanden(){
  window.location = "/armbanden"
}
function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='/videos/video-1.mp4' autoPlay loop muted />
      <h1>Made Bij Sjors</h1>
      <p>Discover de nieuwe sieraden</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
          onClick={kettingen}
        >
          Kettingen
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
          onClick={armbanden}
        >
          Armbanden
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
