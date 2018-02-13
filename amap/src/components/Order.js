import React from 'react';
import AddVeggieInOrder from './AddVeggieInOrder';
import TotalPriceVeggie from './TotalPriceVeggie';
class Order extends React.Component {

  render() {
    return (
    	<div >
	    	<h2>Mon panier</h2>
	        <ul className="order">
	            {
	              Object
	                .keys(this.props.state.order)
	                .map(key =><AddVeggieInOrder delete_in_order={this.props.delete_in_order} format={this.props.formatPrice}  compteur={this.props.get_nbr_veggie_in_order(key)} index={key} key={key} veggie={this.props.state.order[key]}/>)              
	            }
	            <li className="article_total"><strong>Nombre d'article total : </strong>{this.props.state.total_article}</li>
	            <TotalPriceVeggie format = {this.props.formatPrice} total_price={this.props.state.total_price}/>                                
	        </ul>
		</div>
	)
    
  }
}

export default Order;
