
import React, { useState } from 'react';
import { Grid } from '@material-ui/core';
import WorkordersTable from './WorkordersTable';
import CreateButton from './CreateButton';
import WorkordersFormModal from './WorkordersFormModal';
import WorkordersDetailsModal from './WorkordersDetailsModal';



const WorkordersBox = () => {
  
  const [openFormModal, setOpenFormModal] = useState(false);  

  const openFormModalHandler = () => {
    setOpenFormModal(true);
  };

  const closeFormModalHandler = () => {
    setOpenFormModal(false);
  }

  const [openDetailModal, setOpenDetailModal] = useState(false);  

  const openFormDetailHandler = () => {
    setOpenDetailModal(true);
  };

  const closeDetailModalHandler = () => {
    setOpenDetailModal(false);
  }

  return(
    <div>
        <Grid container className='mt-5'>
          <Grid item xs={12} sm={12} md={12} xl={12}>
            <CreateButton createHandler={openFormModalHandler}/>
            <WorkordersTable />
            <WorkordersFormModal open={openFormModal} handleClose={closeFormModalHandler}/>
            <WorkordersDetailsModal open={openDetailModal} handleClose={closeDetailModalHandler}/>
          </Grid>
       </Grid>
    </div>
  )
};

export default WorkordersBox;
