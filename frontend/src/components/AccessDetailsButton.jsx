import React from 'react';
import { Button } from '@material-ui/core';
import VisibilityIcon from '@material-ui/icons/Visibility';


const AccessDetailsButton = ({createHandler}) => {
  return (
    
    <Button variant="text" startIcon={<VisibilityIcon color="primary"/>} onClick={createHandler}></Button>

  )
}

export default AccessDetailsButton;
