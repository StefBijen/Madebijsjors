import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';

function link(){
  window.location = "https://www.instagram.com/made.by.sjors/"
}
function Footer() {
  return (
   <div> 
    <div id="content">
      <img src="images/Curl.png" class="ribbon"/>
      </div>
    <div className='footer-container'>
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>About Us</h2>
            <Link to='/sign-up'>How it works</Link>
            <Link to='/'>Testimonials</Link>
            <Link to='/'>Careers</Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Social Media</h2>
            <Link onClick={link}>Instagram</Link>
            <Link to='/'>Facebook</Link>
          </div>
          <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Contact Us</h2>
            <Link to='/'>sjors.bijen@gmail.com</Link>
            <Link to='/'>0634991886</Link>
          </div>
          </div>
          <div class='footer-link-items'>
            <h2>Made By sjors</h2>
            <Link onClick={link}></Link>
            <Link to='/new_releases'>New Releases</Link>
            <Link to='/oorbellen'>Oorbellen</Link>
            <Link to='/armbanden'>Armbanden</Link>
            <Link to='/kettingen'>Kettingen</Link>
          </div>
        </div>
      </div>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <small class='website-rights'>Made By © 2020</small>
          <div class='social-icons'>
            <Link
              class='social-icon-link facebook'
              to='/'
              target='_blank'
              aria-label='Facebook'
            >
              <i class='fab fa-facebook-f' />
            </Link>
            <Link
              class='social-icon-link instagram'
              onClick={link}
              target='_blank'
              aria-label='Instagram'
            >
              <i class='fab fa-instagram' />
            </Link>
            <Link
              class='social-icon-link youtube'
              to='/'
              target='_blank'
              aria-label='Youtube'
            >
              <i class='fab fa-youtube' />
            </Link>
            <Link
             class='social-icon-link instagram'
              onClick={link}
              target='_blank'
              aria-label='Instagram'
            >
              <i class='fab fa-twitter' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <i class='fab fa-linkedin' />
            </Link>
          </div>
        </div>
      </section>
    </div>
  </div>
  );
}

export default Footer;
