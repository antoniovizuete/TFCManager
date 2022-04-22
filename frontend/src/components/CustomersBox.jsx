
import React from 'react';
import { Grid } from '@material-ui/core';
import CustomersTable from './CustomersTable';
import CrudButtons from './CrudButtons';

const CustomerBox = () => {

  return(
    <div>
      <Grid container className='mt-5'>
          <Grid item xs={12} sm={12} md={12} xl={12}>
            <CrudButtons />
            <CustomersTable />
          </Grid>
      </Grid>
    </div>
  )
};

export default CustomerBox;
