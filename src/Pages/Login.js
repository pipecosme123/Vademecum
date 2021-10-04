import React from 'react';
import { GeneralImages } from '../Constants/Images';
import { AiOutlineUser, AiOutlineMail } from 'react-icons/ai';

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
                    <input type="text" />
                </label>

                <label>
                    <AiOutlineMail />
                    <input type="text" />
                </label>

                <input type="submit" value="Ingresar" />
            </form>

            <h1>Login</h1>
        </div>
    );
};

export default Login;