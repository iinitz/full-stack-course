import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { useRecoilState } from 'recoil'
import { IconButton, Typography, Button } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete'

import { cartState } from '../states/atom'
import Link from '../components/Link'

const useStyles = makeStyles({});

export default function CartItems() {
  const classes = useStyles();
  const [cart, setCart] = useRecoilState(cartState)
  const removeItem = (index) => {
    setCart((prev) => {
      return [
        ...prev.slice(0, index),
        ...prev.slice(index + 1),
      ]
    })
  }
  if (cart.length === 0) {
    return (
      <>
        <Typography variant="h4" align="center">
          No item in cart&nbsp;
          <Link href="/products">select product</Link>
        </Typography>
      </>
    )
  }
  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Price</TableCell>
            <TableCell align="right">Delete</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {cart.map((product, index) => (
            <TableRow key={product._id}>
              <TableCell component="th" scope="row">
                {product.name}
              </TableCell>
              <TableCell align="right">{product.price}</TableCell>
              <TableCell align="right">
              <IconButton
                aria-label="delete"
                onClick={() => removeItem(index)}
              >
                <DeleteIcon />
              </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
