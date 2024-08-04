'use client'

import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { product } from '@/CONSTANTS/types';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: '#3b82f6',
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: 'var(--primary)',
  },
  '&:nth-of-type(even)': {
    backgroundColor: 'var(--secondary)',
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function createData(
  name: string,
  detail: number | string,
) {
  return { name, detail };
}

export default function TableDetails({ product }: { product: product }) {

  const rows = [
    createData('Brand', product.brand),
    createData('Weight', product.weight),
    createData('Width', product.dimensions.width),
    createData('Height', product.dimensions.height),
    createData('Depth', product.dimensions.depth),
    createData('warranty Information', product.warrantyInformation),
    createData('shipping Information', product.shippingInformation),
    createData('availability Status', product.availabilityStatus)
  ];

  return (
    <TableContainer component={Paper} style={{ marginTop: '20px', marginBottom: '20px' }}>
      <Table sx={{ minWidth: 100 }} aria-label="customized table">
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">{row.name}</StyledTableCell>
              <StyledTableCell align="right">{row.detail}</StyledTableCell>

            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}