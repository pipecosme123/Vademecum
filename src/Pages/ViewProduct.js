import React, { useState, useEffect } from 'react';
import { IoIosArrowBack } from 'react-icons/io';
import { useParams } from 'react-router-dom';
import SearchBar from '../Components/SearchBar';
import { GeneralImages } from '../Constants/Images';
import '../css/ViewProduct.css';
import Cookies from 'universal-cookie';
import { RoutersLinks } from '../Constants/RoutersLinks';
const cookies = new Cookies();

const ViewProduct = ({ title, arrayProduct }) => {

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
         observaciones: data.Observaciones
      })


   }, [data])

   useEffect(() => {
      if (cookies.get('cedulas') === "" || cookies.get('cedulas') === undefined) {
        window.location.href = `${RoutersLinks.login}`;
      }
    })

   return (
      <div className='ViewProduct container'>
         <SearchBar />
         <div className="titleMenu" onClick={() => window.history.go(-1)}>
            <IoIosArrowBack />
            <h1 dangerouslySetInnerHTML={{ __html: `${title.toUpperCase()}` }}></h1>
         </div>
         <div className="descriptionProduct">
            <h3 dangerouslySetInnerHTML={{ __html: `${product.name.toUpperCase()}` }}></h3>
            <div className="imgProduct">
               <img src={product.img} alt="" />
               <a href="https://www.pres.kagencia.com/login">
                  <img src={GeneralImages.RXVademecum} alt="" />
                  PRESCRIBIR
               </a>
            </div>
            <div className={product.principioActivo === "" || product.principioActivo === undefined ? "noVisible" : "infoProduct"}>
               <h3>Principio Activo</h3>
               <p>{product.principioActivo}</p>
            </div>
            <div className={product.modoUso === "" || product.modoUso === undefined ? "noVisible" : "infoProduct"}>
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