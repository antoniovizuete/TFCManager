
import { Button, TextField, Dialog, DialogActions, DialogContent, 
  DialogContentText, DialogTitle, Select, MenuItem, InputLabel } from "@material-ui/core";
import React, { useState } from "react";
import validator from "validator";
import { postCustomers } from "../services/customer.services";

const CustomersFormModal = ({open, handleClose}) => {

  const [dni, setDni] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [province, setProvince] = useState('');
  const [cp, setCp] = useState('');
  const [phone, setPhone] = useState('');
  const [error, setError] = useState(null);

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

    if(!phone.trim()){
      setError('Es necesario introducir un teléfono.');
      return
    }

    if(!validator.isMobilePhone(phone, 'es-ES')){
      setError(`El teléfono ${phone} no es válido.`);
      return
    }

    if(!validator.isEmail(email)){
      setError('El email introducido no es válido.');
      return
    }

    const newCustomer = {
      dni: dni,
      name: name,
      email: email,
      address: address,
      city: city,
      province: province,
      cp: cp,
      phone: phone
    }

    event.target.reset();
    setDni('');
    setName('');
    setEmail('');
    setAddress('');
    setCity('');
    setProvince('');
    setCp('');
    setPhone('');
    setError(null);

    postCustomers(newCustomer);
  }

  return (

    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Registro de Clientes</DialogTitle>
      <DialogContent>
        <form onSubmit={ saveData } id="customerForm">
          {error ? <span className="text-danger">{error}</span> : null}
          <TextField autoFocus margin="dense" id="dni"
              label="DNI" type="text" fullWidth variant="standard"
              onChange={ event => setDni(event.target.value) }
          />
          <TextField autoFocus margin="dense" id="name"
              label="Nombre" type="text" fullWidth variant="standard"
              onChange={ event => setName(event.target.value) }
          />
          <TextField autoFocus margin="dense" id="email"
              label="Dirección Email" type="email" fullWidth variant="standard"
              onChange={ event => setEmail(event.target.value) }
          />
          <TextField autoFocus margin="dense" id="address"
              label="Dirección" type="text" fullWidth variant="standard"
              onChange={ event => setAddress(event.target.value) }
          />
          <TextField autoFocus margin="dense" id="city"
              label="Ciudad" type="text" fullWidth variant="standard"
              onChange={ event => setCity(event.target.value) }
          />
          <TextField autoFocus margin="dense" id="province"
              label="Provincia" type="text" fullWidth variant="standard"
              onChange={ event => setProvince(event.target.value) }
          />
          <TextField autoFocus margin="dense" id="cp"
              label="CP" type="number" fullWidth variant="standard"
              onChange={ event => setCp(event.target.value) }
          />
          <TextField autoFocus margin="dense" id="phone"
              label="Teléfono" type="number" fullWidth variant="standard"
              onChange={ event => setPhone(event.target.value) }
          />
        </form>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancelar</Button>
        <Button type="submit" form="customerForm">Registrar</Button>
      </DialogActions>
    </Dialog>

  );
};

export default CustomersFormModal;
