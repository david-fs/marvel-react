import React, {Component} from "react";
import ItemInfo from "./components/itemInfo";
import './cart.scss'
import {connect} from "react-redux";

const mapStateToProps = state => {
    return {
        cart: state.cart
    };
};

class Cart extends React.Component{

    componentDidMount() {
    }

    render(){
        return(
            <div className="cart-container">
                <React.Fragment>
                    <div className="items-box">
                        <ItemInfo/>
                    </div>
                </React.Fragment>
            </div>
        )
    }
}

export default connect(mapStateToProps)(Cart);
