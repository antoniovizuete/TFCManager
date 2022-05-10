import { Button, TextField, Dialog, DialogActions, DialogContent, DialogTitle, Select, MenuItem, InputLabel, TextareaAutosize } from "@material-ui/core"; 
import React, { useState, useEffect } from "react";
import { getCustomers } from '../services/customer.services';
import { getUsers } from '../services/user.services';
import { postProjects } from "../services/project.services";
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';

const ProjectsFormModal = ({open, handleClose}) => {

    const [customers, setCustomers] = useState([]);
    useEffect( () =>{
        const getAllCustomers = async() => {
            setCustomers(await getCustomers());
        }
        getAllCustomers();
    }, []);

    const [users, setUsers] = useState([]);
    useEffect( () =>{
        const getAllUsers = async() => {
            setUsers(await getUsers());
        }
        getAllUsers();
    }, []);

    const [project_name, setProject_name] = useState('');
    const [project_author, setProject_author] = useState('');
    const [project_customer, setProject_customer] = useState('');
    const [project_description, setProject_description] = useState(null);
    const [error, setError] = useState(null);

    const handleChangeUser = (event) => {
        setProject_author(event.target.value);
    };

    const handleChangeCustomer = (event) => {
        setProject_customer(event.target.value);
    };

    const saveData = (event) => {
        event.preventDefault();

        if(!project_name.trim()){
           setError('Introduce un nombre para el proyecto.');
            return
        }

        if(!project_author.trim()){
            setError('Introduce un usuario.');
            return
        }

        if(!project_customer.trim()){
            setError('Selecciona un cliente para el proyecto.');
            return
        }

        if(!project_description.trim()){
            setError('Escribe una descripción para el proyecto.');
            return
        }

        const newProject = {
            project_name: project_name,
            project_author: project_author,
            project_customer: project_customer,
            project_description: project_description,
        }

        console.log(newProject);

        event.target.reset();
        setProject_name('');
        setProject_author('');
        setProject_customer('');
        setProject_description('');
        setError('');

        postProjects(newProject);
    };

    return (

        <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Registro de Proyectos</DialogTitle>
        <DialogContent>
            <form onSubmit={ saveData } id="projectForm">
                {error ? <span className="text-danger">{error}</span> : null}
                <TextField autoFocus margin="dense" id="project_name"
                    label="Nombre del proyecto" type="text" fullWidth variant="standard"
                    onChange={ event => setProject_name(event.target.value) }
                />
                <InputLabel className="mt-2" id="project_authorInput">Usuario</InputLabel>
                <Select labelId="Usuario" id="project_author" style={{width: '100%'}}
                    value={project_author} label="Usuario" onChange={handleChangeUser}> 
                
                    {users.map((users) => (
                        <MenuItem value={`${users.user_id}`}>{users.user_name}</MenuItem>
                    ))}
                    
                </Select>
                <InputLabel className="mt-2" id="descriptionInput">Descripción</InputLabel>
                <TextareaAutosize autoFocus margin="dense" id="project_description"
                    label="Descripción" type="text" fullWidth variant="standard"
                    onChange={ event => setProject_description(event.target.value) }
                />
                <InputLabel className="mt-2" id="project_customerInput">Cliente</InputLabel>
                <Select labelId="Cliente" id="project_customer" style={{width: '100%'}}
                    value={project_customer} label="Cliente" onChange={handleChangeCustomer}> 
                
                    {customers.map((customers) => (
                        <MenuItem value={`${customers.customer_id}`}>{customers.customer_name}</MenuItem>
                    ))}
                    
                </Select>
            </form>
        </DialogContent>
        <DialogActions>
            <Button onClick={handleClose}>Cancelar</Button>
            <Button type="submit" form="projectForm">Registrar</Button>
        </DialogActions>
        </Dialog>

    );
};

export default ProjectsFormModal;
