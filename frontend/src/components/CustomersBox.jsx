
import React, { useState } from 'react';
import { Grid } from '@material-ui/core';
import CustomersTable from './CustomersTable';
import CrudButtons from './CrudButtons';
import CustomersFormModal from './CustomersFormModal';

const CustomerBox = () => {

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
            <CrudButtons createHandler={openModalHandler}/>
            <CustomersTable />
            <CustomersFormModal open={openModal} handleClose={closeModalHandler}/>
          </Grid>
      </Grid>
    </div>
  )
};

export default CustomerBox;
