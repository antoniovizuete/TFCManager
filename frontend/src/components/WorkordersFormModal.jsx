import { Button, Select, MenuItem, InputLabel, TextareaAutosize, TextField } from "@material-ui/core"; 
import React, { useState, useEffect } from "react";
import { getProjects } from '../services/project.services';
import { getUserById } from '../services/user.services';
// import { getMaterials } from '../services/material.services';
import { postWorkorders } from "../services/workorder.services";
import { getHourlyrate } from "../services/hourlyrate.services";
import { getUserData } from "../services/login.services";
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';
import { Paper } from "@mui/material";
import { useNavigate } from "react-router-dom";
import {NavLink} from 'react-router-dom';

const WorkordersFormModal = () => {

    const navigate = useNavigate();

    const userLogged = getUserData();
    const id = userLogged.id;
    const name = userLogged.name;

    const [projects, setProjects] = useState([]);
    useEffect( () =>{
        const getAllProjects = async() => {
            setProjects(await getProjects());
        }
        getAllProjects();
    }, []);

    const [hourlyrate, setHourlyrate] = useState([]);
    useEffect( () =>{
        const getAllHourlyrate = async() => {
            setHourlyrate(await getHourlyrate());
        }
        getAllHourlyrate();
    }, []);

    // const [materials, setMaterials] = useState([]);
    // useEffect( ()=>{
    //     const getAllMaterials = async() => {
    //         setMaterials(await getMaterials());
    //     }
    //     getAllMaterials();
    // }, []);

    const [workorder_author, setWorkorder_author] = useState('');
    const [workorder_project, setWorkorder_project] = useState('');
    const [workorder_hours, setWorkorder_hours] = useState('');
    const [workorder_minutes, setWorkorder_minutes] = useState('');
    const [workorder_hourlyrate, setWorkorder_hourlyrate] = useState('');
    const [workorder_alert, setWorkorder_alert] = useState('');
    const [error, setError] = useState(null);

    const handleChangeUser = (event) => {
        setWorkorder_author(event.target.value);
    };

    console.log(workorder_author)
    const handleChangeProject = (event) => {
        setWorkorder_project(event.target.value);
    };

    const handleChangeHourlyrate = (event) => {
        setWorkorder_hourlyrate(event.target.value);
    };

    // const handleChangeMaterial = (event) => {
    //     setMaterials(event.target.value);
    // };

    const saveData = async(event) => {
        event.preventDefault();

        try{

            if(!workorder_project.trim()){
                setError('Asigna el parte a un proyecto.');
                return
            }

            if(!workorder_hourlyrate.trim()){
                setError('Asigna una tarifa al parte de trabajo.');
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
                workorder_author: id,
                workorder_project: workorder_project,
                workorder_hours: workorder_hours,
                workorder_minutes: workorder_minutes,
                workorder_alert: workorder_alert,
                workorder_hourlyrate: workorder_hourlyrate,
            }

            const newWorkorderResponse = await  postWorkorders(newWorkorder);
            
            if(newWorkorderResponse.errors){
                setError(newWorkorderResponse.errors[0].msg);
                return
            }else{
                event.target.reset();
                navigate("/menu/projects/workorderlist", { replace: true });
                setWorkorder_author('');
                setWorkorder_project('');
                setWorkorder_hours('');
                setWorkorder_minutes('');
                setWorkorder_alert('');
                setWorkorder_hourlyrate('');
                setError('');
            }
        }catch(eror){
            setError(error);
        }

    };

    return (

        <Paper sx={{ width: '50%', overflow: 'hidden', p:3 }}>
            <h3>Nuevo Parte de trabajo</h3>
            <form onSubmit={ saveData } id="workorderForm">
                {error ? <span className="text-danger">{error}</span> : null}
                <TextField autoFocus margin="dense" id="workorder_author2"
                    label="Autor del Parte del Trabajo" type="text" fullWidth variant="standard"
                    value = {name}
                />
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
                <InputLabel className="mt-2" id="workorder_hourlyrateInput">Tarifa</InputLabel>
                <Select labelId="Tarifa" id="workorder_hourlyrate" style={{width: '100%'}}
                    value={workorder_hourlyrate} label="Tarifa" onChange={handleChangeHourlyrate}> 
                
                    {hourlyrate.map((hourlyrate) => (
                        <MenuItem value={`${hourlyrate.hourlyrate_id}`}>{hourlyrate.hourlyrate_name} {hourlyrate.hourlyrate_pvp}€</MenuItem>
                    ))}
                    
                </Select>
                <InputLabel className="mt-2" id="workorder_alertInput">Avisos</InputLabel>
                <TextareaAutosize autoFocus margin="dense" id="workorder_alert"
                    label="Avisos" type="text" fullWidth variant="standard"
                    value={workorder_alert}
                    onChange={ event => setWorkorder_alert(event.target.value) }
                />
                <p>MATERIALES</p> <button>Añadir</button>
            </form>
            <div>
                <Button component={NavLink} to={`/menu/projects/workorderlist`}>Cancelar</Button>
                <Button type="submit" form="workorderForm">Registrar</Button>
            </div>
        </Paper>
    );
};

export default WorkordersFormModal;
