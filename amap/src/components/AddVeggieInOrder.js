import React from 'react';
import { Button } from 'reactstrap';
import IconButton from 'material-ui/IconButton';
import DeleteIcon from 'material-ui-icons/Delete';
import Divider from 'material-ui/Divider';


const AddVeggieInOrder = ( props ) => {
    if(props.veggie.status == "available")
    {
      return (
        <li>
          <strong>{props.veggie.name} x {props.compteur}</strong>{ props.format(props.veggie.price*props.compteur) }
          <IconButton aria-label="Delete" onClick={(e)=> props.delete_in_order( props.index, props.veggie )} >
            <DeleteIcon />
          </IconButton>
        </li>
      )
    }
    return (
      <li>
        <strong>{props.veggie.name}</strong> n’est plus en stock
        <IconButton aria-label="Delete">
          <DeleteIcon onClick={(e)=> props.delete_in_order( props.index, props.veggie )} />
        </IconButton>
        <Divider inset />
      </li>
    )
}

export default AddVeggieInOrder;
