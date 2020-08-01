import React, {Component} from "react";
import './userInfo.scss';
import {Link} from "react-router-dom";

class UserInfo extends React.Component{

    componentDidMount() {
    }

    render(){

        return(
            <div className="user-info-container">
                <React.Fragment>
                    <div>
                        <span>Nome: <span>{this.props.user.name}</span></span>
                    </div>
                    <div>
                        <span>Endereço: <span>{this.props.user.address}</span></span>
                    </div>
                    <div>
                        <span>Número: <span>{this.props.user.number}</span></span>
                    </div>
                    <div>
                        <span>Bairro: <span>{this.props.user.neighborhood}</span></span>
                    </div>
                    <div>
                        <span>Cidade: <span>{this.props.user.city}</span></span>
                    </div>
                    <div className="button-position">
                        <Link to="/user">
                            <button>Editar</button>
                        </Link>
                    </div>
                </React.Fragment>
            </div>
        )
    }
}

export default UserInfo;
