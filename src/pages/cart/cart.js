import React, {Component} from "react";
import ItemInfo from "./components/itemInfo/itemInfo";
import AllValue from "./components/allValue/allValue";
import UserInfo from "./components/userInfo/userInfo";
import './cart.scss'
import {connect} from "react-redux";
import {insertBook, removeBook} from "../../actions/actions";

const mapStateToProps = state => {
    return {
        cart: state.cart,
        allValue: state.cartValue,
        user: state.user
    };
};
const mapDispatchToProps = dispatch => {
    return {
        insertBook: (book) => dispatch(insertBook(book)),
        removeBook: (book) => dispatch(removeBook(book))
    }
}
class Cart extends React.Component{


    increaseBookQuantity = (book) =>{
        this.props.insertBook(book)
    }
    decreaseBookQuantity = (book) =>{
        this.props.removeBook(book)
    }
    render(){

        return(
            <div className="cart-container">
                <div className="top-page">
                    <React.Fragment>
                        <AllValue
                            allValue={this.props.allValue}/>
                        <UserInfo
                            user={this.props.user}
                        />
                    </React.Fragment>
                </div>

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
