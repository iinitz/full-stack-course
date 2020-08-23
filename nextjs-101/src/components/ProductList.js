import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart'
import { useSetRecoilState } from 'recoil'

import { cartState } from '../states/atom'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: 500,
    height: 450,
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
}));

export default function ProductList({ products }) {
  const classes = useStyles();
  const setCart = useSetRecoilState(cartState)
  const handleAddToCart = (product) => {
    setCart((prev) => {
      return [...prev, product]
    })
  }
  return (
    <div className={classes.root}>
      <GridList cellHeight={180} className={classes.gridList}>
        <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
          <ListSubheader component="div">Product list</ListSubheader>
        </GridListTile>
        {products.map((product) => (
          <GridListTile key={product.imgUrl}>
            <img src={product.imgUrl} alt={product.name} />
            <GridListTileBar
              title={product.name}
              subtitle={<span>${product.price}</span>}
              actionIcon={
                <IconButton
                  className={classes.icon}
                  onClick={() => handleAddToCart(product)}
                >
                  <AddShoppingCartIcon />
                </IconButton>
              }
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}
