import React, { useEffect } from 'react';
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io';
import SearchBar from '../Components/SearchBar';
import { Link } from 'react-router-dom';
import { RoutersLinks } from '../Constants/RoutersLinks';
import '../css/Menu.css';
import Cookies from 'universal-cookie';
const cookies = new Cookies();

const Menu = ({ title, url, products }) => {

   useEffect(() => {
      if (cookies.get('cedulas') === "" || cookies.get('cedulas') === undefined) {
        window.location.href = `${RoutersLinks.login}`;
      }
    })

   return (
      <div className='Menu container'>
         <SearchBar />
         <div className="titleMenu" onClick={() => window.history.go(-1)}>
            <IoIosArrowBack />
            <h1 dangerouslySetInnerHTML={{__html: `${title.toUpperCase()}`}}></h1>
         </div>
         {products.map((prod, index) => (
            <div key={index}>
               <Link to={`${url}/${index}`}>
                  <div className="productsImg">
                     <img src={prod.img} alt="" />
                  </div>
                  <div className="productsText">
                     <h2 dangerouslySetInnerHTML={{__html: `${prod.name.toUpperCase()}`}}></h2>
                     <h4>{prod.PrincipioActivo || prod.ModoUso}</h4>
                     <p>{prod.PrincipioActivo ? "Principio activo": ""}{prod.PrincipioActivo && prod.ModoUso ? ",": ""}
                     {prod.ModoUso ? " Modo de uso": ""}{prod.Observaciones && prod.ModoUso ? ",": ""}
                     {prod.Observaciones ? " Observaciones": ""}</p>
                  </div>
                  <IoIosArrowForward />
               </Link>
               <hr />
            </div>
         ))}
      </div>
   );
};

export default Menu;