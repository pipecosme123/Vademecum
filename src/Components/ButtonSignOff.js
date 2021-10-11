import React from 'react';
import Cookies from 'universal-cookie';
import { RoutersLinks } from '../Constants/RoutersLinks';
import '../css/ButtonSignOff.css';
const cookies = new Cookies();

const ButtonSignOff = () => {

   const ButtonSignOff = () => {
      cookies.set('id', "", { path: `/` });
      cookies.set('cedulas', "", { path: `/` });
      cookies.set('nombres', "", { path: `/` });
      window.location.href = `${RoutersLinks.login}`;
   }
   return (
      <div className='ButtonSignOff'>
         <button onClick={() => ButtonSignOff()}>
            Cerrar Sesión
         </button>
      </div>
   );
};

export default ButtonSignOff;