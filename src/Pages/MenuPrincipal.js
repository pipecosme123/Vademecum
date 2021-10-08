import React from 'react';
import ButtonLink from '../Components/ButtonLink';

const MenuPrincipal = ({ title, arrayMenu }) => {

   return (
      <div className="Home container">
         <h3>{title.toUpperCase()}</h3>
         <ButtonLink num="1" constButton={arrayMenu} />
      </div>
   );
};

export default MenuPrincipal;