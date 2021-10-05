import React from 'react';
import { GeneralImages } from '../Constants/Images';
import '../css/Navbar.css';

const Navbar = () => {
   return (
      <div className='Navbar'>
         <img src={GeneralImages.LogoColgate_LogoVademecum} alt="" />
      </div>
   );
};

export default Navbar;