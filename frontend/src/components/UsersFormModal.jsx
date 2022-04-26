
import { Button, TextField, Dialog, DialogActions, DialogContent, 
  DialogContentText, DialogTitle, Select, MenuItem, InputLabel } from "@material-ui/core";
import React, { useState } from "react";

const FormModal = ({open, handleClose}) => {

  const [role, setRole] = useState('');

  const handleChange = (event) => {
    setRole(event.target.value);
  };

  return (

    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Registro de Empleados</DialogTitle>
      <DialogContent>
        <TextField autoFocus margin="dense" id="name"
          label="Nombre Usuario" type="text" fullWidth variant="standard"
        />
        <TextField autoFocus margin="dense" id="email"
          label="dirección Email" type="email" fullWidth variant="standard"
        />
        <TextField autoFocus margin="dense" id="password"
          label="Contraseña" type="password" fullWidth variant="standard"
        />
        <InputLabel className="mt-2" id="RoleInput">Role</InputLabel>
        <Select labelId="label" id="role" style={{width: '100%'}}
          value={role} label="Role" onChange={handleChange}> 
            <MenuItem value={'Administrador'}>Administrador</MenuItem>
            <MenuItem value={'Empleado'}>Empleado</MenuItem>
        </Select>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancelar</Button>
        <Button onClick={handleClose}>Registrar</Button>
      </DialogActions>
    </Dialog>

  );
};

export default FormModal;
