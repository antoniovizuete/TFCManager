
import { Button, TextField, Dialog, DialogActions, DialogContent, DialogTitle } from "@material-ui/core";
import React, { useState } from "react";
import validator from "validator";
import { postCustomers } from "../services/customer.services";
import { useNavigate } from "react-router-dom";

const CustomersFormModal = ({open, handleClose}) => {

  const navigate = useNavigate();

  const [customer_dni, setCustomer_dni] = useState('');
  const [customer_name, setCustomer_name] = useState('');
  const [customer_email, setCustomer_email] = useState('');
  const [customer_address, setCustomer_address] = useState('');
  const [customer_city, setCustomer_city] = useState('');
  const [customer_province, setCustomer_province] = useState('');
  const [customer_cp, setCustomer_cp] = useState('');
  const [customer_phone, setCustomer_phone] = useState('');
  const [error, setError] = useState(null);

  const saveData = async (event) => {
    event.preventDefault();
    try{
      if(!customer_name.trim()){
        setError('Introduce un nombre de usuario.');
        return
      }

      if(!customer_email.trim()){
        setError('Es necesario introducir un email.');
        return
      }

      if(!customer_phone.trim()){
        setError('Es necesario introducir un teléfono.');
        return
      }

      if(!validator.isMobilePhone(customer_phone, 'es-ES')){
        setError(`El teléfono ${customer_phone} no es válido.`);
        return
      }

      if(!validator.isEmail(customer_email)){
        setError('El email introducido no es válido.');
        return
      }

      const newCustomer = {
        customer_dni: customer_dni,
        customer_name: customer_name,
        customer_email: customer_email,
        customer_address: customer_address,
        customer_city: customer_city,
        customer_province: customer_province,
        customer_cp: customer_cp,
        customer_phone: customer_phone
      }

      
      const newCustomerResponse = await postCustomers(newCustomer);

      if(newCustomerResponse.errors){
        setError(newCustomerResponse.errors[0].msg);
        return
      }else{
        navigate("/menu/customers", { replace: true });
        event.target.reset();
        setCustomer_dni('');
        setCustomer_name('');
        setCustomer_email('');
        setCustomer_address('');
        setCustomer_city('');
        setCustomer_province('');
        setCustomer_cp('');
        setCustomer_phone('');
        setError(null);
      }
      
    }catch(error){
      setError(error);
    }
  }

  return (

    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Registro de Clientes</DialogTitle>
      <DialogContent>
        <form onSubmit={ saveData } id="customerForm">
          {error ? <span className="text-danger">{error}</span> : null}
          <TextField autoFocus margin="dense" id="customer_dni"
              label="DNI" type="text" fullWidth variant="standard"
              onChange={ event => setCustomer_dni(event.target.value) }
          />
          <TextField autoFocus margin="dense" id="customer_name"
              label="Nombre" type="text" fullWidth variant="standard"
              onChange={ event => setCustomer_name(event.target.value) }
          />
          <TextField autoFocus margin="dense" id="customer_email"
              label="Dirección Email" type="email" fullWidth variant="standard"
              onChange={ event => setCustomer_email(event.target.value) }
          />
          <TextField autoFocus margin="dense" id="customer_address"
              label="Dirección" type="text" fullWidth variant="standard"
              onChange={ event => setCustomer_address(event.target.value) }
          />
          <TextField autoFocus margin="dense" id="customer_city"
              label="Ciudad" type="text" fullWidth variant="standard"
              onChange={ event => setCustomer_city(event.target.value) }
          />
          <TextField autoFocus margin="dense" id="customer_province"
              label="Provincia" type="text" fullWidth variant="standard"
              onChange={ event => setCustomer_province(event.target.value) }
          />
          <TextField autoFocus margin="dense" id="customer_cp"
              label="CP" type="number" fullWidth variant="standard"
              onChange={ event => setCustomer_cp(event.target.value) }
          />
          <TextField autoFocus margin="dense" id="customer_phone"
              label="Teléfono" type="number" fullWidth variant="standard"
              onChange={ event => setCustomer_phone(event.target.value) }
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
