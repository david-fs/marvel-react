import React, {Component, Fragment} from "react";
import { connect } from 'react-redux'
import {getAllBooks} from "../../actions/getActions";

const mapDispatchToProps = dispatch => {
    return {
        getAllBooks: () => dispatch(getAllBooks())
    }
}
const mapStateToProps = state => {
    return { books: state.books };
};

class Home extends Component{

    componentDidMount() {
        this.props.getAllBooks()
    }
    printAParada(book){
        return(
            <p key={book.id}>{book.title}</p>
        )
    }
    render(){
        let books = [];
        this.props.books.forEach(book =>{
            books.push(book)
        })
        console.log(books);
        return(
            <Fragment>
                {
                    books.length > 0 ? books[0].map(this.printAParada)
                        :
                        <p>Carregando....</p>
                }
            </Fragment>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
