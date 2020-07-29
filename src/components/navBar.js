import React from 'react'
import './navBar.scss'

class NavBar extends React.Component{

    render() {
        return (
            <header>
                <React.Fragment>
                    <div className="name">
                        <p>DESAFIO TÉCNICO </p>
                    </div>

                    <div className="cart-area">
                        <React.Fragment>
                            <div className="items-count">
                                <p>uma ruma</p>
                            </div>
                            <div className="icon-place">
                                <p>X</p>
                            </div>
                        </React.Fragment>
                    </div>
                </React.Fragment>
            </header>
        );
    }
}

export default NavBar
