
import React from 'react';
import {Typography, withWidth, Hidden, Button} from '@material-ui/core';

const Hiddencomp = (props) => {
  return(
    <div>
        <Typography variant='h6' color='initial'>
            ancho: {props.width}
        </Typography>
        <Hidden xsDown>
            <Button variant='contained' color='primary'>Botón 1</Button>
        </Hidden>
        <Hidden smDown>
            <Button variant='contained' color='secondary'>Botón 2</Button>
        </Hidden>
        <Hidden mdUp>
            <Button variant='contained' color='primary'>Botón 3</Button>
        </Hidden>
        <Hidden only={['lg', 'xs']}>
            <Button variant='contained' color='secondary'>Botón 4</Button>
        </Hidden>
    </div>
  )
};

export default  withWidth()(Hiddencomp);
