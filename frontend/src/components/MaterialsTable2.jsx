import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import { getMaterials} from '../services/material.services';
import { useEffect, useState } from 'react';
import TableEditButton  from './TableEditButton';
import TableDeleteButton  from './TableDeleteButton';


export default function MaterialsTable() {

    const [openModal, setOpenModal] = useState(false);  

    const openModalHandler = () => {
      setOpenModal(true);
    };
  
    const closeModalHandler = () => {
      setOpenModal(false);
    }

    const [materials, setMaterials] = useState([]);
        useEffect( () =>{
        const getAllMaterials = async() => {
            setMaterials(await getMaterials());
        }
        getAllMaterials();
    }, []);

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell align="right">Referencia</TableCell>
            <TableCell align="right">Marca</TableCell>
            <TableCell align="right">Descripción</TableCell>
            <TableCell align="right">Precio</TableCell>
            <TableCell align="right">Ecotasa</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {materials.map((materials) => (
            <TableRow
              key={materials.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {materials.id}
              </TableCell>
              <TableCell align="right">{materials.reference}</TableCell>
              <TableCell align="right">{materials.brand}</TableCell>
              <TableCell align="right">{materials.description}</TableCell>
              <TableCell align="right">{materials.pvp}</TableCell>
              <TableCell align="right">{materials.ecotax}</TableCell>
              <TableCell align='right'><TableEditButton createHandler={openModalHandler}/></TableCell>
              <TableCell align='right'><TableDeleteButton createHandler={openModalHandler}/></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
