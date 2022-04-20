
import React from 'react'
import { getUsers } from '../services/user.services';
import { useEffect, useState } from 'react';
import LockIcon from '@material-ui/icons/Lock';
import { withRouter } from 'react-router-dom';

const Login = (props) => {

    const [users, setUsers] = React.useState([]);

    useEffect( () =>{
        const getAllUsers = async() => {
        setUsers(await getUsers());
        }
        getAllUsers();
    }, []);

    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [error, setError] = React.useState(null);

    const procesarDatos = e => {
        e.preventDefault();
        if(!email.trim()){
            setError('Introduce el Email.')
            return
        }
        if(!password.trim()){
            setError('Introduce la contraseña.')
            return
        }
        if(password.length<10){
            setError('La contaseña debe tener, al menos, 10 carácteres.')
            return
        }

        setError(null);
        console.log('Login correcto.')
    };

    return (
        <div className='p-5'>
            <div className='border'>
            <LockIcon />
                <h3 className="text-center info mt-3" color='info'>Acceso Empleados</h3>
                <hr className='ms-5 me-5'/>
                <div className="row justify-content-center mt-3">
                    <div className="col-12 col-sm-8 col-md-6 col-xl-4">
                        <form onSubmit ={procesarDatos}>
                            {
                                error && (
                                    <div className='alert alert-danger'>
                                        {error}
                                    </div>
                                )
                            }
                            <input type="email" className="form-control mb-2" onChange={e => setEmail(e.target.value)} value={email} />
                            <input type="password" className="form-control mb-2"  onChange={e => setPassword(e.target.value)} value={password} />
                            <button className="btn btn-primary btn-lg col-12 mb-5" type='submit'>Login</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default withRouter(Login);
