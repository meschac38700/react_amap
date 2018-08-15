import React from 'react';

import {Form, FormGroup, Label, Input, FormText } from 'reactstrap'; 
import Button from "material-ui/Button";
class 
AddVeggieForm extends React.Component {
  constructor(props)
  {
    super(props);
    this.createVeggie = this.createVeggie.bind(this);
  }

  createVeggie(event) {
    event.preventDefault();
    console.log('On va ajouter des légumes!');
    //event.target.selectFavorite.value
    // On stocke les valeurs du form dans une variable veggie
    const veggie = {
      name: event.target.name.value,
      price: event.target.price.value,
      status: event.target.status.value,
      desc: event.target.desc.value,
      image: event.target.image.value,
    }
    // On envoie cette variable via des props à la méthode addVeggie()
    this.props.addVeggie(veggie);
  }

  render() {
    return (
      <Form name ="veggieForm" className="veggie-edit" onSubmit={this.createVeggie}>
        
          <Input name="name" type="text" placeholder="Veggie Name" />
          <Input name="price" type="text" placeholder="Veggie Price" />
          <Input name="status" type="select">
          <option value="available">Frais!</option>
          <option value="unavailable">Plus en stock!</option>
          </Input>
          <Input type="textarea" className="desc" name="desc" placeholder="Veggie Desc" ></Input>
          <Input name="image" type="text" placeholder="Veggie Image" />
          <Button color="secondary" type="submit">+ Ajouter un article</Button>
      </Form>
    )
  }
}

export default AddVeggieForm;
