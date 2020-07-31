import React from 'react'
import './allValue.scss'

class AllValue extends React.Component{

    render() {
        return (
            <React.Fragment>
                <div className="value">
                    <span>Valor total: {parseFloat(this.props.allValue.toFixed(2))}</span>
                </div>
            </React.Fragment>
        );
    }
}

export default AllValue
