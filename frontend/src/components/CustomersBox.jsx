
import React from 'react';
import { Button, Grid } from '@material-ui/core';
import CustomersTable from './CustomersTable';
import DeleteIcon from '@material-ui/icons/Delete';
import CreateIcon from '@material-ui/icons/Create';
import CreateNewFolderIcon from '@material-ui/icons/CreateNewFolder';

const CustomerBox = () => {

  return(
    <div>
      <Grid container className='mt-5'>
          <Grid item xs={12} sm={12} md={12} xl={12}>
            <div>
              <Button variant="text" startIcon={<CreateNewFolderIcon color="primary"/>}>Crear</Button>
              <Button variant="text" startIcon={<CreateIcon color="secondary"/>} className='ms-5'>Editar</Button>
              <Button variant="text" startIcon={<DeleteIcon color="error"/>} className='ms-5'>Borrar</Button>
            </div>
            <CustomersTable />
          </Grid>
      </Grid>
    </div>
  )
};

export default CustomerBox;
