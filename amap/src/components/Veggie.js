import React from 'react';
import Button from "material-ui/Button";
import List, { ListItem, ListItemText } from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import { withStyles } from 'material-ui/styles';
import Divider from 'material-ui/Divider';
import ImageIcon from 'material-ui-icons/Image';
import LazyLoad from 'react-lazyload'
class Veggie extends React.Component {

  constructor(props){
    super(props);
    this.veggie_available = this.veggie_available.bind(this);
    
  }

  veggie_available( )
  {
    //console.log(this.props.details)
    if( this.props.details.status == "available")
    {
      return <Button variant="raised" color="primary" onClick={(e)=> this.props.add_in_order( this.props.index, this.props.details ) } >"Ajouter au panier"</Button>;
    }
    else
    {
      return  <Button variant="raised" color="secondary" disabled>Plus en stock !</Button> 
    }
  }

  render() {
  	const {details} = this.props;
        return (
        <div>
          <List>
              <ListItem>
                <Avatar className="avatar">
                {/*<LazyLoad height={200} once  offset={100}>*/}
                  <img src={details.image} alt={details.name}/>
                  {/*</LazyLoad>*/}
                </Avatar>
                <ListItemText className="listItemText" primary={details.name+ " "+ this.props.formatPrice(details.price)} secondary={details.desc} />
              </ListItem>
              <li>
                <Divider inset />
              </li>
            {this.veggie_available()}
          </List>
      </div>
    )
  }
}

export default Veggie;

