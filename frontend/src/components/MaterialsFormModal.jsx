import { Button, TextField, Dialog, DialogActions, DialogContent, DialogTitle, Select, MenuItem, InputLabel, TextareaAutosize } from "@material-ui/core"; 
import React, { useState } from "react";
import validator from "validator";
import { postMaterials } from "../services/material.services";
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';

const MaterialsFormModal = ({open, handleClose}) => {

    const [reference, setReference] = useState('');
    const [brand, setBrand] = useState('');
    const [description, setDescription] = useState('');
    const [pvp, setPvp] = useState('');
    const [ecotax, setEcotax] = useState(null);
    const [error, setError] = useState(null);

    const handleChange = (event) => {
        setEcotax(event.target.value);
    };

    const saveData = (event) => {
        event.preventDefault();

        if(!reference.trim()){
           setError('Introduce una referencia de producto.');
            return
        }

        if(!brand.trim()){
            setError('Introduce una marca de producto.');
            return
        }

        if(!description.trim()){
            setError('Introduce una descripción para el producto.');
            return
        }

        if(!pvp.trim()){
            setError('Selecciona un precio para el producto.');
            return
        }

        if(!ecotax.trim()){
            setError('Selecciona una opción de ecotasa para el producto.');
            return
        }

        const newMaterial = {
            reference: reference,
            brand: brand,
            description: description,
            pvp: pvp,
            ecotax: ecotax
        }

        console.log(newMaterial);

        event.target.reset();
        setReference('');
        setBrand('');
        setDescription('');
        setPvp('');
        setEcotax('');
        setError(null);

        postMaterials(newMaterial);
    };

    return (

        <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Registro de Materiales</DialogTitle>
        <DialogContent>
            <form onSubmit={ saveData } id="materialForm">
                {error ? <span className="text-danger">{error}</span> : null}
                <TextField autoFocus margin="dense" id="reference"
                    label="Referencia" type="text" fullWidth variant="standard"
                    onChange={ event => setReference(event.target.value) }
                />
                <TextField autoFocus margin="dense" id="brand"
                    label="Marca" type="text" fullWidth variant="standard"
                    onChange={ event => setBrand(event.target.value) }
                />
                <InputLabel className="mt-2" id="descriptionInput">Descripción</InputLabel>
                <TextareaAutosize autoFocus margin="dense" id="description"
                    label="Descripción" type="text" fullWidth variant="standard"
                    onChange={ event => setDescription(event.target.value) }
                />
                <Input
                    autoFocus margin="dense" id="pvp" fullWidth variant="standard"
                    value={pvp.amount}
                    startAdornment={<InputAdornment position="start">€</InputAdornment>}
                    onChange={ event => setPvp(event.target.value) }
                />
                {/* <TextField autoFocus margin="dense" id="pvp" 
                    label="Precio" type="number" step={0.1} fullWidth variant="standard"
                    onChange={ event => setPvp(event.target.value) }
                /> */}
                <InputLabel className="mt-2" id="ecotaxInput">Ecotasa</InputLabel>
                <Select labelId="Ecotasa" id="ecotax" style={{width: '100%'}}
                    value={ecotax} label="Ecotasa" onChange={handleChange}> 
                    <MenuItem value={''}></MenuItem>
                    <MenuItem value={'Si'}>Sí</MenuItem>
                    <MenuItem value={'No'}>No</MenuItem>
                </Select>
            </form>
        </DialogContent>
        <DialogActions>
            <Button onClick={handleClose}>Cancelar</Button>
            <Button type="submit" form="materialForm">Registrar</Button>
        </DialogActions>
        </Dialog>

    );
};

export default MaterialsFormModal;
