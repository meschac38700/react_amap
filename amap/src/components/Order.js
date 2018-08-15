import React from 'react';
import AddVeggieInOrder from './AddVeggieInOrder';
import TotalPriceVeggie from './TotalPriceVeggie';

const Order = ( props ) => <div >
	    	<h2>Mon panier</h2>
	        <ul className="order">
	            {
	              Object
	                .keys(props.state.order)
	                .map(key =><AddVeggieInOrder delete_in_order={props.delete_in_order} format={props.formatPrice}  compteur={props.get_nbr_veggie_in_order(key)} index={key} key={key} veggie={props.state.order[key]}/>)              
	            }
	            <li className="article_total"><strong>Nombre d'article total : </strong>{props.state.total_article}</li>
	            <TotalPriceVeggie format = {props.formatPrice} total_price={props.state.total_price}/>                                
	        </ul>
		</div>
		
export default Order;
