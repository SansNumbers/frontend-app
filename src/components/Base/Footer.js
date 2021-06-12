import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <section class='social-media'>

        <div class='social-media-wrap'>

          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
                Pink + White
              <i class='fas fa-dove' />
            </Link>
          </div>

          <div class='social-icons'>

            <Link
              class='social-icon-link github'
              href='https://github.com/SansNumbers'
              target='_blank'
              aria-label='Github'
            >
              <i class='fab fa-github' />
            </Link>
            
            <Link
              class='social-icon-link instagram'
              to='/'
              target='_blank'
              aria-label='Instagram'
            >
              <i class='fab fa-instagram' />
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
  );
}

export default Footer;