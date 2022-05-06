
import React, { useState } from 'react';
import { Grid } from '@material-ui/core';
import MaterialsTable from './MaterialsTable';
import CreateButton from './CreateButton';
import MaterialsFormModal from './MaterialsFormModal';



const MaterialBox = () => {

  const [openModal, setOpenModal] = useState(false);  

  const openModalHandler = () => {
    setOpenModal(true);
  };

  const closeModalHandler = () => {
    setOpenModal(false);
  }

  return(
    <div>
        <Grid container className='mt-5'>
          <Grid item xs={12} sm={12} md={12} xl={12}>
            <CreateButton createHandler={openModalHandler}/>
            <MaterialsTable />
            <MaterialsFormModal open={openModal} handleClose={closeModalHandler}/>
          </Grid>
       </Grid>
    </div>
  )
};

export default MaterialBox;
