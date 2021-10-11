import React, { useEffect } from 'react';
import { IoIosArrowBack } from 'react-icons/io';
import ButtonLink from '../Components/ButtonLink';
import SearchBar from '../Components/SearchBar';
import Cookies from 'universal-cookie';
import { RoutersLinks } from '../Constants/RoutersLinks';
const cookies = new Cookies();

const MenuPrincipal = ({ title, arrayMenu }) => {

   useEffect(() => {
      if (cookies.get('cedulas') === "" || cookies.get('cedulas') === undefined) {
         window.location.href = `${RoutersLinks.login}`;
      }
   })

   return (
      <div className="Home container">
         <SearchBar />
         <div className="titleMenu" onClick={() => window.history.go(-1)}>
            <IoIosArrowBack />
            <h3>{title.toUpperCase()}</h3>
         </div>
         <ButtonLink num="1" constButton={arrayMenu} />
         <hr />

         <div className="buttonPreConsulta">
            <ButtonLink num="0" constButton={arrayMenu} />
         </div>

      </div>
   );
};

export default MenuPrincipal;