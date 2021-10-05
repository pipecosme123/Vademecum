import React from 'react';
import { GeneralImages } from '../Constants/Images';
import { RoutersLinks } from '../Constants/RoutersLinks';
import '../css/ButtonLink.css';

const ButtonLink = ({ num, constButton }) => {
   if (num === "0") {
      return (
         <div>
            <a className='ButtonLink PreConsulta' href={RoutersLinks.preConsulta}>
               <img src={GeneralImages.PandemiaVademecum} alt="" />
               <p>Pre consulta odontológica <br /> en pandemia</p>
            </a>
         </div>
      );
   } else {
      return (
         <div>
            {constButton.map((menu, index) => (
               <a key={index} className={`ButtonLink button${menu.color}`} href="##">
                  <p>{menu.title}</p>
               </a>
            ))}
         </div>
      );
   }
};

export default ButtonLink;