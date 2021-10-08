import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, useRouteMatch, Link } from "react-router-dom";
import { GeneralImages } from '../Constants/Images';
import { RoutersLinks } from '../Constants/RoutersLinks';
import '../css/ButtonLink.css';
import Menu from '../Pages/Menu';

const ButtonLink = ({ num, constButton }) => {

   // let { path, url } = useRouteMatch();

   // const [values, setValues] = useState({
   //    urlLink: "",
   //    arratProducts: []
   // })

   // const getArraryProducts = (urlLinkC, arrayProductsC) => {
   //    setValues({
   //       urlLink: urlLinkC,
   //       arratProducts: arrayProductsC
   //    })
   //    console.log(values);
   // }

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
               <a key={index} className={`ButtonLink button${menu.color}`} href={menu.link}>
                  <p>{menu.title || menu.name}</p>
               </a>
            ))}
         </div>
      );
   } 

};

export default ButtonLink;