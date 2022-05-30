import { Button, TextField, Select, MenuItem, InputLabel, TextareaAutosize } from "@material-ui/core"; 
import React, { useState, useEffect } from "react";
import { getCustomers } from '../services/customer.services';
import { getUserById } from '../services/user.services';
import { postProjects } from "../services/project.services";
import { Paper } from "@mui/material";
import { useNavigate } from "react-router-dom";
import {NavLink} from 'react-router-dom';
import { getUserData } from "../services/login.services";

const ProjectsFormModal = () => {

    const navigate = useNavigate();

    const userLogged = getUserData();
    const id = userLogged.id;

    const [customers, setCustomers] = useState([]);
    useEffect( () =>{
        const getAllCustomers = async() => {
            setCustomers(await getCustomers());
        }
        getAllCustomers();
    }, []);

    const [users, setUsers] = useState([]);
    useEffect( () =>{
        const getAllUsers = async(id) => {
            setUsers(await getUserById(id));
        }
        getAllUsers(id);
    }, []);

    const [project_name, setProject_name] = useState(userLogged.name);
    const [project_author, setProject_author] = useState('');
    const [project_customer, setProject_customer] = useState('');
    const [project_description, setProject_description] = useState(null);
    const [project_alert, setProject_alert] = useState('');
    const [error, setError] = useState(null);

    const handleChangeUser = (event) => {
        setProject_author(event.target.value);
    };

    const handleChangeCustomer = (event) => {
        setProject_customer(event.target.value);
    };

    const saveData = async (event) => {
        event.preventDefault();

        try{
            if(!project_name.trim()){
            setError('Introduce un nombre para el proyecto.');
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
                project_alert: project_alert
            }

            const newProjectResponse = await postProjects(newProject);

            if(newProjectResponse.errors){
              setError(newProjectResponse.errors[0].msg);
              return
            }else{
                event.target.reset();
                navigate("/menu/projects/projectlist", { replace: true });
                setProject_name('');
                setProject_author('');
                setProject_customer('');
                setProject_description('');
                setProject_alert('');
                setError(null);
            }
        }catch(error){
            setError(error);
        }
    };

    return (

        <Paper sx={{ width: '50%', overflow: 'hidden', p:3 }}>
            <h3>Nuevo Proyecto</h3>
            <form onSubmit={ saveData } id="projectForm">
                {error ? <span className="text-danger">{error}</span> : null}
                <TextField autoFocus margin="dense" id="project_name"
                    label="Nombre del proyecto" type="text" fullWidth variant="standard"
                    onChange={ event => setProject_name(event.target.value) }
                />
                <InputLabel className="mt-2" id="project_authorInput">Usuario</InputLabel>
                <Select labelId="Usuario" id="project_author" style={{width: '100%'}}
                    value={project_author} label="Usuario" onChange={handleChangeUser}> 
                    <MenuItem value={`${users.user_id}`}>{users.user_name}</MenuItem>
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
                <InputLabel className="mt-2" id="project_alertInput">Avisos</InputLabel>
                <TextareaAutosize autoFocus margin="dense" id="project_alert"
                    label="Avisos" type="text" fullWidth variant="standard"
                    onChange={ event => setProject_alert(event.target.value) }
                />
            </form>
            <div>
                <Button component={NavLink} to={`/menu/projects/projectlist`}>Cancelar</Button>
                <Button type="submit" form="projectForm">Registrar</Button>
            </div>
        </Paper>

    );
};

export default ProjectsFormModal;
