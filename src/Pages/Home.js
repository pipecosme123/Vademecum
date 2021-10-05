import React from 'react';
import ButtonLink from '../Components/ButtonLink';
import SearchBar from '../Components/SearchBar';
import { SituacionesEspecialidad } from '../Constants/Menus';
import '../css/Home.css';

const Home = () => {
    return (
        <div className='Home container'>
            <SearchBar />
            <h3>Situaciones clínicas</h3>
            <ButtonLink num="0"  />{/*link={}*/}
            
            <h3>Situaciones por especialidad</h3>
            <ButtonLink num="1" constButton={SituacionesEspecialidad}/>
        </div>
    );
};

export default Home;