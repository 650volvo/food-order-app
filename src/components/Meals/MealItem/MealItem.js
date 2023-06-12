import { useContext } from 'react';
import MealItemForm from './MealItemForm';
import classes from './MealItem.module.css';

import CartContext from '../../../store/cart-context';


const MealItem = (props) => {
  const cartCtx = useContext(CartContext);

  const price = `$${props.price.toFixed(2)}`;

  const addToCartHandler = (amount) => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price
    })
  };

  return (
    <li class={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div class={classes.description}>{props.description}</div>
        <div class={classes.price}>{props.price}</div>
      </div>
      <div>
        <MealItemForm onAddToCart={addToCartHandler}/>
      </div>
    </li>
  );
};

export default MealItem;
