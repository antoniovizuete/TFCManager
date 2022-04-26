
import { Button, TextField, Dialog, DialogActions, DialogContent, 
    DialogContentText, DialogTitle, Select, MenuItem, InputLabel } from "@material-ui/core";
  import React, { useState } from "react";
  
  const CustomersFormModal = ({open, handleClose}) => {
  
    const [role, setRole] = useState('');
  
    const handleChange = (event) => {
      setRole(event.target.value);
    };
  
    return (
  
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Registro de Clientes</DialogTitle>
        <DialogContent>
            <TextField autoFocus margin="dense" id="dni"
                label="DNI" type="number" fullWidth variant="standard"
            />
            <TextField autoFocus margin="dense" id="name"
                label="Nombre" type="text" fullWidth variant="standard"
            />
            <TextField autoFocus margin="dense" id="email"
                label="Dirección Email" type="email" fullWidth variant="standard"
            />
            <TextField autoFocus margin="dense" id="address"
                label="Dirección" type="text" fullWidth variant="standard"
            />
            <TextField autoFocus margin="dense" id="city"
                label="Ciudad" type="text" fullWidth variant="standard"
            />
            <TextField autoFocus margin="dense" id="province"
                label="Provincia" type="text" fullWidth variant="standard"
            />
            <TextField autoFocus margin="dense" id="cp"
                label="CP" type="number" fullWidth variant="standard"
            />
            <TextField autoFocus margin="dense" id="phone"
                label="Teléfono" type="number" fullWidth variant="standard"
            />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancelar</Button>
          <Button onClick={handleClose}>Registrar</Button>
        </DialogActions>
      </Dialog>
  
    );
  };
  
  export default CustomersFormModal;
