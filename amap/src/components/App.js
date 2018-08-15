import React from 'react';
import List, { ListItem, ListItemText } from 'material-ui/List';
import StorePicker from './StorePicker';
import Header from './Header';
import Order from './Order';
import LazyLoad from 'react-lazyload';
import Veggie from './Veggie';
import Inventory from './Inventory';
import sampleVeggies from '../sample-veggies';
import { Container, Row, Col } from 'reactstrap';
//import * as firebase from "firebase";

import {formatPrice} from '../helpers';
class App extends React.Component {

  constructor() {
    super();

    this.addVeggie = this.addVeggie.bind(this);
    this.get_nbr_veggie_in_order = this.get_nbr_veggie_in_order.bind(this);
    this.increment_nbr_veggie_in_order = this.increment_nbr_veggie_in_order.bind(this)
    this.loadSamples = this.loadSamples.bind(this);
    this.add_in_order = this.add_in_order.bind(this); 
    this.delete_in_order = this.delete_in_order.bind(this);
    this.veggieAlreadyAdded = this.veggieAlreadyAdded.bind(this);
    this.state = {
      veggies: {},
      order: {},
      total_price: 0,
      compteur: {},
      total_article: 0
    };
  }
        
veggieAlreadyAdded( veggie )
  {
    var vraiOuFaux = false;
    const veggies = {...this.state.veggies};
    for(var key in veggies)
    {
      if( veggies[`${key}`].name.toLowerCase() == veggie.name.toLowerCase())
      {
        vraiOuFaux = true;
      } 
    }
    return vraiOuFaux;
  }

  // Ajouter un veggie dans le menu
  addVeggie(veggie) 
  {
    // mise à jour du state
    // on fait une copie de notre state
    const veggies = {...this.state.veggies};
    // ajout de notre nouveau veggie
    
    if (!this.veggieAlreadyAdded(veggie))
    {
      const timestamp = Date.now();
      veggies[`veggie-${timestamp}`] = veggie;
    }else
    {
      alert("Veggie already in stock !");
    }
    // mise à jour du state
    this.setState({ veggies });
  }

  // Chargement des veggies recuperés depuis le fichier sample-veggies.js
  loadSamples() 
  {
    const tmp_veggies = this.state.veggies;
    for( var key in sampleVeggies)
    {
      tmp_veggies[`${key}`] = sampleVeggies[`${key}`]
    }
    this.setState({
      veggies: tmp_veggies
    });

  }

  //  retourne le nombre de fois qu'un même veggié a été ajouté dans le order (le panier)
  get_nbr_veggie_in_order( key )
  {
    return this.state.compteur[`${key}`];
  }

  // Increment dans le state compteur le nombre de fois qu'on a ddécidé d'ajouter un veggie dans le order (le panier)
  increment_nbr_veggie_in_order( key )
  {
    if( key in this.state.compteur )
    {
      this.state.compteur[`${key}`] += 1*1;
    }
    else
    {
      this.state.compteur[`${key}`] = 1*1;
    }
  }

   remove_nbr_veggie_in_state( key )
  {
    if( key in this.state.compteur )
    {
      delete this.state.compteur[`${key}`];
    }
  }


  // Ajouter un vaggier dans le order
  add_in_order(key, veggie )
  {
    var total_article = this.state.total_article *1;
    total_article += 1*1;
    this.setState({total_article});
    // Copie du state order
    const order = {...this.state.order};
    order[`${key}`] = veggie;
    this.setState({order}); 
    var total_price = this.state.total_price*1;
    total_price += veggie.price*1;
    this.setState({total_price});
    this.increment_nbr_veggie_in_order( key ); 
  }
  // Supprimer un veggie dans le order
  delete_in_order(index, veggie)
  {
    // copie du nombre total des article ajouté dans le panier
    var total_article = this.state.total_article*1;
    //Décremente du nombre d'article (car on va supprimé un article)
    total_article -= this.get_nbr_veggie_in_order(index)*1;
    // mise à jour dans le state du nombre d'article
    this.setState({total_article});

    // copie des article dans le panier
    const order = {...this.state.order};
    delete order[`${index}`];
    //order[`${key}`] = undefined;
    this.setState({order});
    
    var total_price = this.state.total_price*1;
    total_price -= veggie.price*1*this.get_nbr_veggie_in_order(index)*1; 
    this.setState({total_price});
    
    this.remove_nbr_veggie_in_state( index );

  }
  //  retourne le nombre de fois qu'un même veggié a été ajouté dans le order (le panier)
  get_nbr_veggie_in_order( key )
  {
    return this.state.compteur[`${key}`];
  }

  // Increment dans le state compteur le nombre de fois qu'on a ddécidé d'ajouter un veggie dans le order (le panier)
  increment_nbr_veggie_in_order( key )
  {
    if( key in this.state.compteur )
    {
      this.state.compteur[`${key}`] += 1*1;
    }
    else
    {
      this.state.compteur[`${key}`] = 1*1;
    }
  }

   remove_nbr_veggie_in_state( key )
  {
    if( key in this.state.compteur )
    {
      delete this.state.compteur[`${key}`];
    }
  }


  // Ajouter un veggie dans le order
  add_in_order(key, veggie )
  {
    var total_article = this.state.total_article *1;
    total_article += 1*1;
    this.setState({total_article});
    // Copie du state order
    const order = {...this.state.order};
    order[`${key}`] = veggie;
    this.setState({order}); 
    var total_price = this.state.total_price*1;
    total_price += veggie.price*1;
    this.setState({total_price});
    this.increment_nbr_veggie_in_order( key );
  }
  // Supprimer un veggie dans le order
  delete_in_order(index, veggie)
  {
    // copie du nombre total des article ajouté dans le panier
    var total_article = this.state.total_article*1;
    //Décremente du nombre d'article (car on va supprimé un article)
    total_article -= this.get_nbr_veggie_in_order(index)*1;
    // mise à jour dans le state du nombre d'article
    this.setState({total_article});

    // copie des article dans le panier
    const order = {...this.state.order};
    delete order[`${index}`];
    //order[`${key}`] = undefined;
    this.setState({order});
    
    var total_price = this.state.total_price*1;
    total_price -= veggie.price*1*this.get_nbr_veggie_in_order(index)*1;
    this.setState({total_price});
    
    this.remove_nbr_veggie_in_state( index );

  }
  // Sauvegarde des informations modifée en pendant l'utilisateur de l'app
  componentWillUpdate(nextProps, nextState){
    localStorage.setItem('order', JSON.stringify(nextState.order) );
    localStorage.setItem('total_price', JSON.stringify(nextState.total_price));
    localStorage.setItem('compteur', JSON.stringify(nextState.compteur));
    localStorage.setItem('total_article', JSON.stringify(nextState.total_article));
    localStorage.setItem('props', JSON.stringify(nextProps));
  }
  
  // Recharge les informations en stockage locale si elles existent
  componentWillMount(){
    localStorage.getItem('order') && this.setState({order: JSON.parse(localStorage.getItem('order'))});
    localStorage.getItem('total_price') && this.setState({total_price: JSON.parse(localStorage.getItem('total_price'))});
    localStorage.getItem('compteur') && this.setState({compteur: JSON.parse(localStorage.getItem('compteur'))});
    localStorage.getItem('total_article') && this.setState({total_article: JSON.parse(localStorage.getItem('total_article'))});
  }

  // Sauvegarde des informations lorsqu'on quitte l'app 
  componentWillUnmount(){
    localStorage.setItem('order', JSON.stringify(this.state.order));
    localStorage.setItem('total_price', JSON.stringify(this.state.total_price));
    localStorage.setItem('compteur', JSON.stringify(this.state.compteur));
    localStorage.setItem('total_article', JSON.stringify(this.state.total_article));
  }

  // Retourne la vue
  render() {
    return (
      <div className="amap">
        <div className="menu">
          <Header tagline="Des bons legumes" />
          <List>

            {// boucle sur les veggies present dans le state 
              Object
                .keys(this.state.veggies)
                .map(key => <Veggie key={key} index={key} formatPrice= {formatPrice} add_in_order={this.add_in_order} details={this.state.veggies[key]}/>)              
            }
          </List>
        </div>
            <Order delete_in_order={this.delete_in_order} state ={this.state} formatPrice= {formatPrice}  get_nbr_veggie_in_order={this.get_nbr_veggie_in_order} />
  
  
        <Inventory addVeggie={this.addVeggie} loadSamples={this.loadSamples} />
      </div>
    )
  }
}

export default App;