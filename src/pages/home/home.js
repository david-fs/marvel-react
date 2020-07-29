import React, {Component} from "react";
import { connect } from 'react-redux'
import {getAllBooks} from "../../actions/getActions";
import Pagination from "react-js-pagination";
import Card from "./components/ComicCard";
import './home.scss'


const mapDispatchToProps = dispatch => {
    return {
        getAllBooks: (page) => dispatch(getAllBooks(page))
    }
}
const mapStateToProps = state => {
    return {
        books: state.books,
        infoBooks: state.infoBooks,
        loading: state.loading
    };
};

const initialPage = 1;

class Home extends Component{
    state = {
        page: initialPage,
    }
    componentDidMount() {
        this.getBooks(this.state.page)
    }
    printAParada(book){
        return(
            <p key={book.id}>{book.title}</p>
        )
    }

    handlePageChange(page){
        this.getBooks(page)
        /*await this.props.getAllBooks(page - 1).then(()=>{
            this.setState({loading: false})
        })*/
    }

    getBooks (page){
        this.props.getAllBooks(page - 1)
    }

    render(){
        let books = [];
        let loadingBooks = this.props.loading;
        let page = this.props.infoBooks.offset / 10;
        this.props.books.forEach(book =>{
            books.push(book)
        })
        console.log(books);
        let infoPage = {
            page: page + 1,
            total: this.props.infoBooks.total
        }
        return(

            <React.Fragment>
                {
                    !loadingBooks ?
                        books[0]?.map(book =>{
                            return(
                                <div key={book.id} className="cards-display">
                                    <Card
                                        key={book.id}
                                        comic={book}
                                    />
                                </div>
/*
                                <p key={book.id}>{book.title}</p>
*/
                            )
                        })
                        :
                        <p>Carregando....</p>
                }
                {
                    books.length > 0 ?
                        <div style={{justifyContent:"center"}}>
                            <Pagination
                                activePage={infoPage.page}
                                itemsCountPerPage={12}
                                totalItemsCount={infoPage.total}
                                pageRangeDisplayed={6}
                                onChange={this.handlePageChange.bind(this)}
                            />
                        </div>

                        :
                        <div/>
                }
            </React.Fragment>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
