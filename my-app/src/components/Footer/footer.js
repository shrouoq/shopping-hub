import React from 'react'
import './styls/style.css'
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <div className='Footer'>
      <div className='container'>

            <div className='box'>
                <div className='box-name'>
                    <p>Links</p>
                </div>

                <div className='box-links'>
                    <Link to='/' className='link'>About Us</Link>
                    <Link to='/' className='link'>Contact Us</Link>
                    <Link to='/' className='link'>Blog</Link>
                    <Link to='/' className='link'>FAQ's</Link>
                </div>
            </div>

            <div className='box'>
                <div className='box-name'>
                    <p>Policies</p>
                </div>

                <div className='box-links'>
                    <Link to='/' className='link'>Terms & Conditions</Link>
                    <Link to='/' className='link'>Cookies Policy</Link>
                    <Link to='/' className='link'>Data Policy</Link>
                </div>
            </div>

            <div className='box'>
                <div className='box-name'>
                    <p>About Shopping Hub</p>
                </div>

                <div className='box-links'>
                    <Link to='/' className='link'>Company Info</Link>
                    <Link to='/' className='link'>Branches</Link>
                    <Link to='/' className='link'>Store</Link>
                </div>
            </div>

            <div className='box'>
                <div className='box-name'>
                    <p>Contact</p>
                </div>

                <div className='box-links'>
                    <Link to='/' className='link'><i class="fa-solid fa-phone"></i>+678 004 5754</Link>
                    <Link to='/' className='link'><i class="fa-solid fa-envelope"></i>info@shophub.com</Link>
                </div>
            </div>

      </div>
    </div>
  )
}
