import React from 'react';
import ButtonLink from '../Components/ButtonLink';
import SearchBar from '../Components/SearchBar';
import { SituacionesEspecialidad, SituacionesClinicasComunes, SituacionesClínicasEspecíficas } from '../Constants/Menus';
import '../css/Home.css';

const Home = ({ title, type, arrayMenu }) => {

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
        </div>
    );
};

export default Home;