import React from 'react';
import AddVeggieForm from './AddVeggieForm';
import Button from "material-ui/Button";
class Inventory extends React.Component {
  render() {
    return (
      <div>
        <h2>Inventory</h2>
        <AddVeggieForm addVeggie={this.props.addVeggie}/>
        <Button variant="raised" color="primary" onClick={this.props.loadSamples}>Charger des légumes</Button>
      </div>
    )
  }
}

export default Inventory;
