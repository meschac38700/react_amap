import React from 'react';
import AddVeggieForm from './AddVeggieForm';
import Button from "material-ui/Button";

const Inventory = (props) => <div>
        <h2>Inventory</h2>
        <AddVeggieForm addVeggie={props.addVeggie}/>
        <Button variant="raised" color="primary" onClick={props.loadSamples}>Charger des légumes</Button>
      </div>

export default Inventory;
