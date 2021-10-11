import React from 'react';
import { GeneralImages } from '../Constants/Images';
import { RoutersLinks } from '../Constants/RoutersLinks';
import '../css/Navbar.css';

const Navbar = () => {
   return (
      <div className='Navbar' onClick={() => window.location.href= RoutersLinks.home}>
         <img src={GeneralImages.LogoColgate_LogoVademecum} alt="" />
      </div>
   );
};

export default Navbar;