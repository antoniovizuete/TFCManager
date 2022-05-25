import { Button, TextField, Dialog, DialogActions, DialogContent, DialogTitle, Select, MenuItem, InputLabel, TextareaAutosize } from "@material-ui/core"; 
import React, { useState, useEffect } from "react";
import { getProjects } from '../services/project.services';
import { getUsers } from '../services/user.services';
import { getMaterials } from '../services/material.services';
import { postWorkorders } from "../services/workorder.services";
import { postWorkorders_materials } from "../services/workorder_materials.services";
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';

const WorkordersFormModal = ({open, handleClose}) => {

    const [projects, setProjects] = useState([]);
    useEffect( () =>{
        const getAllProjects = async() => {
            setProjects(await getProjects());
        }
        getAllProjects();
    }, []);

    const [users, setUsers] = useState([]);
    useEffect( () =>{
        const getAllUsers = async() => {
            setUsers(await getUsers());
        }
        getAllUsers();
    }, []);

    const [materials, setMaterials] = useState([]);
    useEffect( ()=>{
        const getAllMaterials = async() => {
            setMaterials(await getMaterials());
        }
        getAllMaterials();
    }, []);

    const [workorder_author, setWorkorder_author] = useState('');
    const [workorder_project, setWorkorder_project] = useState('');
    const [workorder_hours, setWorkorder_hours] = useState('');
    const [workorder_minutes, setWorkorder_minutes] = useState(null);
    const [error, setError] = useState(null);

    const handleChangeUser = (event) => {
        setWorkorder_author(event.target.value);
    };

    const handleChangeProject = (event) => {
        setWorkorder_project(event.target.value);
    };

    const handleChangeMaterial = (event) => {
        setMaterials(event.target.value);
    };

    const saveData = (event) => {
        event.preventDefault();

        if(!workorder_author.trim()){
           setError('Introduce un autor para el parte.');
            return
        }

        if(!workorder_project.trim()){
            setError('Asigna el parte a un proyecto.');
            return
        }

        if(!workorder_hours.trim()){
            setError('Introduce la cantidad de horas imputadas.');
            return
        }

        if(!workorder_minutes.trim()){
            setError('Introduce la cantidad de minutos imputados.');
            return
        }

        const newWorkorder = {
            workorder_author: workorder_author,
            workorder_project: workorder_project,
            workorder_hours: workorder_hours,
            workorder_minutes: workorder_minutes,
        }

        const newWorkorder_material = {
            materials: materials,
        }

        console.log(newWorkorder);
        console.log(newWorkorder_material);

        event.target.reset();
        setWorkorder_author('');
        setWorkorder_project('');
        setWorkorder_hours('');
        setWorkorder_minutes('');
        setError('');

        postWorkorders(newWorkorder);
        postWorkorders_materials(newWorkorder_material)

    };

    return (

        <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Registro de Partes de trabajo</DialogTitle>
        <DialogContent>
            <form onSubmit={ saveData } id="workorderForm">
                {error ? <span className="text-danger">{error}</span> : null}
                <InputLabel className="mt-2" id="workorder_authorInput">Usuario</InputLabel>
                <Select labelId="Usuario" id="workorder_author" style={{width: '100%'}}
                    value={workorder_author} label="Usuario" onChange={handleChangeUser}> 
                
                    {users.map((users) => (
                        <MenuItem value={`${users.user_id}`}>{users.user_name}</MenuItem>
                    ))}
                    
                </Select>
                <InputLabel className="mt-2" id="workorder_projectInput">Proyecto</InputLabel>
                <Select labelId="Proyecto" id="workorder_project" style={{width: '100%'}}
                    value={workorder_project} label="Proyecto" onChange={handleChangeProject}> 
                
                    {projects.map((projects) => (
                        <MenuItem value={`${projects.project_id}`}>{projects.project_name}</MenuItem>
                    ))}
                    
                </Select>
                <Input
                    autoFocus margin="dense" id="workorder_hours" fullWidth variant="standard"
                    value={workorder_hours}
                    startAdornment={<InputAdornment position="start">H.</InputAdornment>}
                    onChange={ event => setWorkorder_hours(event.target.value) }
                />
                <Input
                    autoFocus margin="dense" id="workorder_minutes" fullWidth variant="standard"
                    value={workorder_minutes}
                    startAdornment={<InputAdornment position="start">M.</InputAdornment>}
                    onChange={ event => setWorkorder_minutes(event.target.value) }
                />
                <p>MATERIALES</p> <button>Añadir</button>
            </form>
        </DialogContent>
        <DialogActions>
            <Button onClick={handleClose}>Cancelar</Button>
            <Button type="submit" form="workorderForm">Registrar</Button>
        </DialogActions>
        </Dialog>

    );
};

export default WorkordersFormModal;
