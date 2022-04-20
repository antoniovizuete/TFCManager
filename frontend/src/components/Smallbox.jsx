
import React from 'react';
import { getUsers } from '../services/user.services';
import { useEffect, useState } from 'react';
import {Box, Grid} from '@material-ui/core';

const Smallbox = () => {

  const [users, setUsers] = React.useState([]);

  useEffect( () =>{
    const getAllUsers = async() => {
      setUsers(await getUsers());
    }
    getAllUsers();
  }, []);

  return(
    <div>
        <Grid container>
            <Grid item xs={12} sm={12} md={12}>

            </Grid>
            <Grid item xs={12} sm={6} md={4}>
                <Box border={2}  bgcolor='red'>
                    
                </Box>
            </Grid>
       </Grid>
    </div>
  )
};

export default Smallbox;