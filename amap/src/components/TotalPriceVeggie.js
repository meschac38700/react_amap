import React from 'react';


const TotalPriceVeggie = ( props ) => <li className="total">
            	<strong>Total:</strong>{props.format( props.total_price ) }
          	</li>


export default TotalPriceVeggie;
