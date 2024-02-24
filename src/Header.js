import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <nav id="navbar">
      {
        <nav id="navbar">
        <div class="h-primary" id="logo">
            <li type="none">
                <a href='/'><span>DiseaseReco</span><img src='https://cdn-icons-png.flaticon.com/512/5169/5169269.png' alt=""></img></a>
            
        </li>
        </div>
        <div class="options">
            <li class="h-primary h-home"><a href="/"> HOME</a></li>
            <li class="h-primary h-about"><Link to='/heart'>Heart</Link></li>
            <li class="h-primary h-products"><Link to='/diabetes'>Diabetes</Link></li>
            <li class="h-primary h-home"><Link to='/parkinson'>Parkinson</Link></li>
        </div>
        </nav>
      }
    </nav>
  );
}

export default Header;