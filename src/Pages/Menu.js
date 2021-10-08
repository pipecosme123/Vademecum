import React from 'react';
import { RoutersLinks } from '../Constants/RoutersLinks';
// import { BsFillCircleFill } from 'react-icons/bs';
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io';
import '../css/Menu.css';
import SearchBar from '../Components/SearchBar';
// import { useParams } from 'react-router';

const Menu = ({ products }) => {

   // const { name } = useParams();

   // const data = getDataArray();

   // const getDataArray = () => {

   // }

   return (
      <div className='Menu container'>
         <SearchBar />
         <div className="titleMenu">
            <IoIosArrowBack />
            <h1>Pre consulta odontológica en pandemia</h1>
         </div>
         {products.map((prod, index) => (
            <div key={index}>
               <a href={`${RoutersLinks.viewMenu}/${index}`}>
                  <div className="productsImg">
                     <img src={prod.img} alt="" />
                  </div>
                  <div className="productsText">
                     <h2>{prod.name.toUpperCase()}</h2>
                     <h4>{prod.PrincipioActivo}</h4>
                     <p>Principio activo, Modo de uso, Observaciones</p>
                  </div>
                  <IoIosArrowForward />
               </a>
               <hr />
            </div>
         ))}
      </div>
   );
};

export default Menu;