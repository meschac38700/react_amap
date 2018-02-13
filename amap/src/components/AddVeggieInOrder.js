import React from 'react';
import { Button } from 'reactstrap';
import IconButton from 'material-ui/IconButton';
import DeleteIcon from 'material-ui-icons/Delete';
import Divider from 'material-ui/Divider';
class AddVeggieInOrder extends React.Component {
  render() {
    if(this.props.veggie.status == "available")
    {
      return (
  			<li>
          <strong>{this.props.veggie.name} x {this.props.compteur}</strong>{ this.props.format(this.props.veggie.price*this.props.compteur) }
          <IconButton aria-label="Delete" onClick={(e)=> this.props.delete_in_order( this.props.index, this.props.veggie )} >
            <DeleteIcon />
          </IconButton>
        </li>
      )
    }
    else
    {
      return (
        <li>
          <strong>{this.props.veggie.name}</strong> n’est plus en stock
          <IconButton aria-label="Delete">
            <DeleteIcon onClick={(e)=> this.props.delete_in_order( this.props.index, this.props.veggie )} />
          </IconButton>
          <Divider inset />
        </li>
      )
    }
  }
}

export default AddVeggieInOrder;
