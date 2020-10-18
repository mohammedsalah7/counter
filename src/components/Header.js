
import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import "./App.css";
class Header extends React.Component {
   
    render(){
        return(

            <div className="contanier">
          <div className="nav">
            <FontAwesomeIcon className="icon" icon={faShoppingCart} />
            <p className="All-Count"> {this.props.items} </p>
            <p className="items"> items</p>
          </div>
            </div>
        );
    }



}
export default Header;