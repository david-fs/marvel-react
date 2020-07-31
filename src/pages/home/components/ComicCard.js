import React from 'react'
import { connect } from 'react-redux'

import ComicImage from "../../../components/comicImage";
import './ComicCard.scss'
import {insertBook} from "../../../actions/actions";

const mapDispatchToProps = dispatch => {
    return {
        insertBook: (book) => dispatch(insertBook(book))
    }
}
class ComicCard extends React.Component{
    render() {
        return (
            <div className="comicCard">
                <div className="image-size">
                    <ComicImage
                        thumbnail={this.props.comic.thumbnail.path + '.' + this.props.comic.thumbnail.extension}/>
                </div>

                <div className="comicInfo">
                    <div className="title">
                        <span>{this.props.comic.title}</span>
                    </div>
                    <div className="pageNumber">
                        <span>Número de páginas: {this.props.comic?.pageCount}</span>
                    </div>
                    <div className="price">
                        <span>Preço: {this.props.comic?.prices[0].price}</span>
                    </div>

                </div>
                <div className="buy">
                    <button onClick={() => this.props.putBookInTheCart(this.props.comic)}>
                        COMPRAR
                    </button>
                </div>
            </div>
        );
    }
}

export default connect(mapDispatchToProps)(ComicCard)
