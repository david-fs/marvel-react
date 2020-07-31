import React, {Component} from "react";
import ItemInfo from "./components/itemInfo";
import AllValue from "./components/allValue";
import './cart.scss'
import {connect} from "react-redux";
import {insertBook, removeBook} from "../../actions/actions";

const mapStateToProps = state => {
    return {
        cart: state.cart,
        allValue: state.cartValue
    };
};
const mapDispatchToProps = dispatch => {
    return {
        insertBook: (book) => dispatch(insertBook(book)),
        removeBook: (book) => dispatch(removeBook(book))
    }
}
class Cart extends React.Component{

    componentDidMount() {
    }
    increaseBookQuantity = (book) =>{
        this.props.insertBook(book)
    }
    decreaseBookQuantity = (book) =>{
        this.props.removeBook(book)
    }
    render(){

        return(
            <div className="cart-container">
                        <React.Fragment>
                            <AllValue
                            allValue={this.props.allValue}/>
                        </React.Fragment>
                    <div className="items-box">
                        <React.Fragment>
                            <ItemInfo
                                cart={this.props.cart}
                                increaseBookQuantity={this.increaseBookQuantity}
                                decreaseBookQuantity={this.decreaseBookQuantity}/>
                        </React.Fragment>
                    </div>
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
