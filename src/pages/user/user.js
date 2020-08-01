import React, {Component} from "react";
import {connect} from "react-redux";
import {editUser} from "../../actions/actions";
import './user.scss'
const mapStateToProps = state => {
    return {
        user: state.user,
    };
};
const mapDispatchToProps = dispatch => {
    return {
        editUser: (user) => dispatch(editUser(user))
    }
}
class User extends React.Component{

    state = {
        name: '',
        address: '',
        number: '',
        neighborhood: '',
        city: ''
    }

    componentDidMount() {
    }

    editUser = () =>{
        const user = {
            name: this.state.name? this.state.name : this.props.user.name,
            address: this.state.address? this.state.address: this.props.user.address,
            number: this.state.number? this.state.number: this.props.user.number,
            neighborhood: this.state.neighborhood? this.state.neighborhood: this.props.user.neighborhood,
            city: this.state.city? this.state.city: this.props.user.city
        }
        this.props.editUser(user)
        this.props.history.push({pathname: `/cart`})
    }

    goToCart = () => {
        this.props.history.push({pathname: `/cart`})
    }

    render(){

        return(
            <div className="user-container">
                <form id="userData" className="form-class">
                    <input
                        type="text"
                        name="nome"
                        className="input-class"
                        defaultValue={this.props.user.name}
                        placeholder="Nome"
                        onChange={(e)=> this.setState({name: e.target.value})}
                    />
                    <input
                        type="text"
                        name="address"
                        className="input-class"
                        defaultValue={this.props.user.address}
                        placeholder="Endereço"
                        onChange={(e)=> this.setState({address: e.target.value})}
                    />
                    <input
                        type="number"
                        name="number"
                        className="input-class"
                        defaultValue={this.props.user.number}
                        placeholder="Número"
                        onChange={(e)=> this.setState({number: e.target.value})}
                    />
                    <input
                        type="text"
                        name="neighborhood"
                        className="input-class"
                        defaultValue={this.props.user.neighborhood}
                        placeholder="Bairro"
                        onChange={(e)=> this.setState({neighborhood: e.target.value})}
                    />
                    <input
                        type="text"
                        name="city"
                        className="input-class"
                        defaultValue={this.props.user.city}
                        placeholder="Cidade"
                        onChange={(e)=> this.setState({city: e.target.value})}
                    />
                </form>

                <div className="button-user">
                    <button className="cancel" onClick={this.goToCart} >Cancelar</button>
                    <button className="confirm" onClick={this.editUser}>Confirmar</button>
                </div>
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(User);
