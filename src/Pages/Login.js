import React from 'react';
import { GeneralImages } from '../Constants/Images';
import { AiOutlineUser, AiOutlineMail } from 'react-icons/ai';
import '../css/Login.css';

const Login = () => {

    const handleSubmit = () => {
        console.log("oli")
    }

    return (
        <div className='Login'>
            <img src={GeneralImages.DentistLogin} alt="" />
            <form onSubmit={handleSubmit}>
                <label>
                    <AiOutlineUser />
                    <input type="number" placeholder="Cédula"/>
                </label>

                <label>
                    <AiOutlineMail />
                    <input type="text" placeholder="Correo Electronico" />
                </label>

                <input type="submit" value="Ingresar" />
            </form>
        </div>
    );
};

export default Login;