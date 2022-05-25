
import React, { useState } from 'react';
import { Grid } from '@material-ui/core';
import MaterialsTable from './MaterialsTable';
import CreateButton from './CreateButton';
import MaterialsFormModal from './MaterialsFormModal';
import { getUserData } from '../services/login.services';
import CreateButtonDisabled from './CreateButtonDisabled';
import Typography from '@mui/material/Typography';

const MaterialBox = () => {

  const [openModal, setOpenModal] = useState(false);  

  const openModalHandler = () => {
    setOpenModal(true);
  };

  const closeModalHandler = () => {
    setOpenModal(false);
  }

  const userLogged = getUserData();
  console.log(userLogged);

  return(
    <div>
        <Grid container className='mt-5'>
        <Typography variant="h4">Listado de Productos</Typography>
          <Grid item xs={12} sm={12} md={12} xl={12}>
            {
              userLogged.role === 1 ? (<CreateButton createHandler={openModalHandler}/>) : 
              (<CreateButtonDisabled />) 
            }
            <MaterialsTable />
            <MaterialsFormModal open={openModal} handleClose={closeModalHandler}/>
          </Grid>
       </Grid>
    </div>
  )
};

export default MaterialBox;
