
import React, { useState } from 'react';
import { Grid } from '@material-ui/core';
import UsersTable from './UsersTable';
import CreateButton from './CreateButton';
import UsersFormModal from './UsersFormModal';



const UserBox = () => {

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
            <UsersTable />
            <UsersFormModal open={openModal} handleClose={closeModalHandler}/>
          </Grid>
       </Grid>
    </div>
  )
};

export default UserBox;
