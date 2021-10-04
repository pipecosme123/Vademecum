import React from 'react';

const Menu = ({ products }) => {
   return (
      <div className='Menu'>
         {products.map((prod, index) => (
            <a key={index}>
               <div className="productsImg">
                  <img src={prod.img} alt="" />
               </div>
               <div className="productsText">
                  <h2>{prod.name}</h2>
                  <h4>{prod.PrincipioActivo}</h4>
                  <p>Principio activo, Modo de uso, Observaciones</p>
               </div>
            </a>
         ))}
      </div>
   );
};

export default Menu;