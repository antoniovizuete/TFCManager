
import { Button, TextField, Dialog, DialogActions, DialogContent, 
  DialogContentText, DialogTitle, Select, MenuItem, InputLabel } from "@material-ui/core";
import React, { useState } from "react";

const FormModal = ({open, handleClose}) => {

  const [role, setRole] = useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setRole(event.target.value);
  };

  return (

    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Registro de Empleados</DialogTitle>
      <DialogContent>
        <DialogContentText>
          To subscribe to this website, please enter your email address here. We
          will send updates occasionally.
        </DialogContentText>
        <TextField autoFocus margin="dense" id="name"
          label="Nombre Usuario" type="text" fullWidth variant="standard"
        />
        <TextField autoFocus margin="dense" id="email"
          label="dirección Email" type="email" fullWidth variant="standard"
        />
        <TextField autoFocus margin="dense" id="password"
          label="Contraseña" type="password" fullWidth variant="standard"
        />
        <InputLabel id="RoleInput">Role</InputLabel>
        <Select labelId="label" id="role" className=""
          value={role} label="Role" onChange={handleChange}> 
            <MenuItem value={'Administrador'}>Administrador</MenuItem>
            <MenuItem value={'Empleado'}>Empleado</MenuItem>
        </Select>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button onClick={handleClose}>Subscribe</Button>
      </DialogActions>
    </Dialog>

  );
};

export default FormModal;
