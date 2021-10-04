import React from 'react';
import ButtonLink from '../Components/ButtonLink';
import { SituacionesEspecialidad } from '../Constants/Menus';

const Home = () => {
    return (
        <div className='Home'>
            <h3>Situaciones clínicas</h3>
            <ButtonLink num="0"  />{/*link={}*/}

            <h3>Situaciones por especialidad</h3>
            <ButtonLink num="1" constButton={SituacionesEspecialidad}/>
        </div>
    );
};

export default Home;