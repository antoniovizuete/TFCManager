import { Button, TextField, Dialog, DialogActions, DialogContent, DialogTitle, Select, MenuItem, InputLabel, TextareaAutosize } from "@material-ui/core"; 
import React, { useState, useEffect } from "react";
import { getProjects } from '../services/project.services';
import { getUsers } from '../services/user.services';
import { getMaterials } from '../services/material.services';
import { getWorkorders } from "../services/workorder.services";
import { getWorkorders_materials } from "../services/workorder_materials.services";
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';

const WorkordersDetailsModal = ({open, handleClose}) => {

    const [projects, setProjects] = useState([]);
    const [users, setUsers] = useState([]);
    const [materials, setMaterials] = useState([]);
    const [workorders, setWorkorders] = useState([]);

    return (

        <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Registro de Partes de trabajo</DialogTitle>
        <DialogContent>

        </DialogContent>
        </Dialog>

    );
};

export default WorkordersDetailsModal;
