import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import { getCustomers} from '../services/customer.services';
import { useEffect, useState } from 'react';
import TableEditButton  from './TableEditButton';
import TableDeleteButton  from './TableDeleteButton';
import { TablePagination } from '@mui/material';


export default function CustomersTable() {

    const [openModal, setOpenModal] = useState(false);  

    const openModalHandler = () => {
      setOpenModal(true);
    };
  
    const closeModalHandler = () => {
      setOpenModal(false);
    }

    const [customers, setCustomers] = useState([]);
        useEffect( () =>{
        const getAllCustomers = async() => {
            setCustomers(await getCustomers());
        }
        getAllCustomers();
    }, []);

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell align="right">DNI</TableCell>
            <TableCell align="right">Nombre</TableCell>
            <TableCell align="right">Email</TableCell>
            <TableCell align="right">Teléfono</TableCell>
            <TableCell align="right">Dirección</TableCell>
            <TableCell align="right">Ciudad</TableCell>
            <TableCell align="right">Provincia</TableCell>
            <TableCell align="right">CP</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {customers.map((customers) => (
            <TableRow
              key={customers.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">{customers.id}</TableCell>
              <TableCell align="right">{customers.dni}</TableCell>
              <TableCell align="right">{customers.name}</TableCell>
              <TableCell align="right">{customers.email}</TableCell>
              <TableCell align="right">{customers.phone}</TableCell>
              <TableCell align="right">{customers.address}</TableCell>
              <TableCell align="right">{customers.city}</TableCell>
              <TableCell align="right">{customers.province}</TableCell>
              <TableCell align="right">{customers.cp}</TableCell>
              <TableCell align='right'><TableEditButton createHandler={openModalHandler}/></TableCell>
              <TableCell align='right'><TableDeleteButton createHandler={openModalHandler}/></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
