import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { getCustomers } from '../services/customer.services';
import { useEffect, useState } from 'react';
import TableEditButton  from './TableEditButton';
import TableDeleteButton from './TableDeleteButton';

const columns = [
  { id: 'id', label: 'ID', minWidth: 50 },
  { id: 'dni', label: 'DNI', minWidth: 50 },
  { id: 'name', label: 'Nombre', minWidth: 80 },
  { id: 'email', label: 'Email', minWidth: 100 },
  { id: 'address', label: 'Dirección', minWidth: 50},
  { id: 'city', label: 'Ciudad', minWidth: 40 },
  { id: 'province', label: 'Provincia', minWidth: 50 },
  { id: 'cp', label: 'CP', minWidth: 30 },
  { id: 'phone', label: 'Teléfono', minWidth: 50 },
];

export default function CustomersTable3() {

    const [customers, setCustomers] = useState([]);
    useEffect( () =>{
        const getAllCustomers = async() => {
            setCustomers(await getCustomers());
        }
        getAllCustomers();
    }, []);

    const [openModal, setOpenModal] = useState(false);  

    const openModalHandler = () => {
      setOpenModal(true);
    };
  
    const closeModalHandler = () => {
      setOpenModal(false);
    }

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer sx={{ maxHeight: 650 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
                
              ))}
                 <TableCell>Editar</TableCell>
                 <TableCell>Borrar</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {customers.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((customers) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={customers.code}>
                    {columns.map((column) => {
                      const value = customers[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === 'number'
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                        <TableCell><TableEditButton createHandler={openModalHandler}/></TableCell>
                        <TableCell><TableDeleteButton createHandler={openModalHandler}/> </TableCell>

                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={customers.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
