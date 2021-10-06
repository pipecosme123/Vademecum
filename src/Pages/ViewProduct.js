import React, { useState, useEffect } from 'react';
import { BsFillCircleFill } from 'react-icons/bs';
import { useParams } from 'react-router-dom';
import SearchBar from '../Components/SearchBar';
import '../css/ViewProduct.css';

const ViewProduct = ({ arrayProduct }) => {

   const { id } = useParams();

   const [product, setProduct] = useState({
      category: "",
      name: "",
      img: "",
      principioActivo: "",
      modoUso: "",
      observaciones: ""
   });

   const data = arrayProduct[id];

   useEffect(() => {
      setProduct({
         // category: arrayProduct.,
         name: data.name,
         img: data.img,
         principioActivo: data.PrincipioActivo,
         modoUso: data.ModoUso,
         observaciones: data.Obsertvaciones
      })
   }, [data])

   return (
      <div className='ViewProduct container'>
         <SearchBar />
         <div className="titleMenu">
            <BsFillCircleFill />
            <h1>Pre consulta odontológica en pandemia</h1>
         </div>
         <div className="descriptionProduct">
            <h3>{product.name.toUpperCase()}</h3>
            <div className="imgProduct">
               <img src={product.img} alt="" />
               <a href="https://www.pres.kagencia.com/login">PRESCRIBIR</a>
            </div>
            <div className="infoProduct">
               <h3>Principio Activo</h3>
               <p>{product.principioActivo}</p>
            </div>
            <div className="infoProduct">
               <h3>Modo de uso</h3>
               <p>{product.modoUso}</p>
            </div>
            <div className={product.observaciones === "" || product.observaciones === undefined ? "noVisible" : "infoProduct"}>
               <h3>Observaciones</h3>
               <p>{product.observaciones}</p>
            </div>
         </div>
      </div>
   );
};

export default ViewProduct;