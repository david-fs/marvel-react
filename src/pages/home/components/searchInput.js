import React from 'react'
import './searchInput.scss'

class SearchInput extends React.Component{

    render() {
        return (
                <div className="inputSearch">
                    <form id="search-form">
                        <input
                            type="text"
                            name="nome"
                            className="input-class"
                            placeholder="Ache sua revista"
                            onChange={(e)=> this.props.searchOnChange(e.target.value)}
                        />
                    </form>
                </div>
        );
    }
}


export default SearchInput
