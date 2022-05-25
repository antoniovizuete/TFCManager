
import React, { useState } from 'react';
import { Grid } from '@material-ui/core';
import CustomersTable from './CustomersTable';
import CreateButton from './CreateButton';
import CustomersFormModal from './CustomersFormModal';
import { getUserData } from '../services/login.services';
import CreateButtonDisabled from './CreateButtonDisabled';
import Typography from '@mui/material/Typography';

const CustomerBox = () => {

  const [openModal, setOpenModal] = useState(false);  

  const openModalHandler = () => {
    setOpenModal(true);
  };

  const closeModalHandler = () => {
    setOpenModal(false);
  }

  const userLogged = getUserData();

  return(
    <div>
      <Grid container className='mt-5'>
          <Grid item xs={12} sm={12} md={12} xl={12}>
            <Typography variant="h4">Listado de Clientes</Typography>
            {
              userLogged.role === 1 ? (<CreateButton createHandler={openModalHandler}/>) : 
              (<CreateButtonDisabled />) 
            }   
            <CustomersTable />
            <CustomersFormModal open={openModal} handleClose={closeModalHandler}/>
          </Grid>
      </Grid>
    </div>
  )
};

export default CustomerBox;
