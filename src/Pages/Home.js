import React, { useEffect } from 'react';
import ButtonLink from '../Components/ButtonLink';
import SearchBar from '../Components/SearchBar';
import { SituacionesEspecialidad, SituacionesClinicasComunes, SituacionesClínicasEspecíficas } from '../Constants/Menus';
import '../css/Home.css';
import Cookies from 'universal-cookie';
import { RoutersLinks } from '../Constants/RoutersLinks';
import ButtonSignOff from '../Components/ButtonSignOff';
const cookies = new Cookies();

const Home = ({ title, type, arrayMenu }) => {

    useEffect(() => {
        if (cookies.get('cedulas') === "" || cookies.get('cedulas') === undefined) {
          window.location.href = `${RoutersLinks.login}`;
        }
      })

    return (
        <div className='Home container'>
            <SearchBar />
            <h3>Situaciones clínicas</h3>
            <ButtonLink num="0" />{/*link={}*/}

            <h3>Situaciones por especialidad</h3>
            <ButtonLink num="1" constButton={SituacionesEspecialidad} />

            <h3>Situaciones clínicas comunes</h3>
            <ButtonLink num="1" constButton={SituacionesClinicasComunes} />

            <h3>Condiciones y situaciones clínicas específicas</h3>
            <ButtonLink num="1" constButton={SituacionesClínicasEspecíficas} />

            <ButtonSignOff />
        </div>
    );
};

export default Home;