import React from 'react';

class AddVeggieInOrder extends React.Component {
  render() {
    if(this.props.veggie.status == "available")
    {
      return (
  			<li>
          <strong>{this.props.veggie.name} x {this.props.compteur}</strong>{ this.props.format(this.props.veggie.price*this.props.compteur) }
          <button onClick={(e)=> this.props.delete_in_order( this.props.index, this.props.veggie )} >X</button>
        </li>
      )
    }
    else
    {
      return (
        <li>
          Votre légume <strong>{this.props.veggie.name}</strong> n’est plus disponible   X
        </li>
      )
    }
  }
}

export default AddVeggieInOrder;
