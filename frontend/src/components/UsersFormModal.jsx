import { Button, TextField, Dialog, DialogActions, DialogContent, DialogTitle, Select, MenuItem, InputLabel } from "@material-ui/core";
import React, { useState } from "react";
import validator from "validator";
import { postUsers } from "../services/user.services";

const UsersFormModal = ({open, handleClose}) => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('');
    const [error, setError] = useState(null);

    const handleChange = (event) => {
        setRole(event.target.value);
    };

    const saveData = (event) => {
        event.preventDefault();

        if(!name.trim()){
           setError('Introduce un nombre de usuario.');
            return
        }

        if(!email.trim()){
            setError('Es necesario introducir un email.');
            return
        }

        if(!validator.isEmail(email)){
            setError('El email introducido no es válido.');
            return
        }

        if(!password.trim()){
            setError('Introduce una contraseña válida.');
            return
        }

        if(!validator.isStrongPassword(password, {minLength: 8, 
            minLowercase: 1, minUppercase: 1, minNumbers: 1, 
            minSymbols: 1})){
                setError('La contraseña debe contener 8 carácteres o más y, al menos, una mayúscula, una minúscula, un número y un símbolo.');
                return
        }

        if(!role.trim()){
            setError('Selecciona un role para el usuario.');
            return
        }

        const newUser = {
            name: name,
            email: email,
            password: password,
            role: role
        }

        event.target.reset();
        setName('');
        setEmail('');
        setPassword('');
        setRole('');
        setError(null);

        postUsers(newUser);
    };

    return (

        <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Registro de Empleados</DialogTitle>
        <DialogContent>
            <form onSubmit={ saveData } id="userForm">
                {error ? <span className="text-danger">{error}</span> : null}
                <TextField autoFocus margin="dense" id="name"
                label="Nombre Usuario" type="text" fullWidth variant="standard"
                onChange={ event => setName(event.target.value) }
                />
                <TextField autoFocus margin="dense" id="email"
                label="dirección Email" type="email" fullWidth variant="standard"
                onChange={ event => setEmail(event.target.value) }
                />
                <TextField autoFocus margin="dense" id="password"
                label="Contraseña" type="password" fullWidth variant="standard"
                onChange={ event => setPassword(event.target.value) }
                />
                <InputLabel className="mt-2" id="RoleInput">Role</InputLabel>
                <Select labelId="label" id="role" style={{width: '100%'}}
                value={role} label="Role" onChange={handleChange}> 
                    <MenuItem value={''}></MenuItem>
                    <MenuItem value={'Administrador'}>Administrador</MenuItem>
                    <MenuItem value={'Empleado'}>Empleado</MenuItem>
                </Select>
            </form>
        </DialogContent>
        <DialogActions>
            <Button onClick={handleClose}>Cancelar</Button>
            <Button type="submit" form="userForm">Registrar</Button>
        </DialogActions>
        </Dialog>

    );
};

export default UsersFormModal;
