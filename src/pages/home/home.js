import React, {Component} from "react";
import { connect } from 'react-redux'
import {getAllBooks, getBooksByName, insertBook} from "../../actions/actions";
import Pagination from "react-js-pagination";
import Card from "./components/ComicCard";
import SearchInput from "./components/searchInput";
import './home.scss'


const mapDispatchToProps = dispatch => {
    return {
        getAllBooks: (page) => dispatch(getAllBooks(page)),
        getBooksByName: (name, page) => dispatch(getBooksByName(name, page)),
        insertBook: (book) => dispatch(insertBook(book))
    }
}
const mapStateToProps = state => {
    return {
        books: state.books,
        infoBooks: state.infoBooks,
        loading: state.loading,
        cart: state.cart
    };
};

const initialPage = 1;

class Home extends Component{
    state = {
        page: initialPage,
        search: '',
        searchOnChangeTimeout: null,
    }

    componentDidMount() {
        console.log(this.props);
        this.getBooks(this.state.page)
    }

    handlePageChange(page){
        this.setState({page: page})
        if (this.state.search){
            this.props.getBooksByName(this.state.search, page -1)
        } else {
            this.getBooks(page)
        }
    }

    getBooks (page){
        this.props.getAllBooks(page - 1)
    }

    searchOnChange = (value) => {
        this.setState({ search: value });
        if (value.length > 0) {
            if (this.state.searchOnChangeTimeout) {
                clearTimeout(this.state.searchOnChangeTimeout);
            }
            const timeout = setTimeout(() => {
                this.setState({ searchOnChangeTimeout: null });
                this.props.getBooksByName(value, 0);
            }, 300);
            this.setState({ searchOnChangeTimeout: timeout });
        } else if (value.length === 0){
            this.setState({page: 1})
            this.getBooks(1)
        }
    }

    putBookInTheCart = (book) => {
        this.props.insertBook(book)
    }

    render(){
        let books = [];
        let loadingBooks = this.props.loading;
        this.props.books.forEach(book =>{
            books.push(book)
        })
        return(
            <div className="home-container">
                <React.Fragment>
                    <div className="serch-field">
                        <SearchInput
                            searchOnChange={this.searchOnChange}
                        />
                        <div className="info">
                            {
                                !loadingBooks?
                                    <span>{this.props.infoBooks.total} total de revistas</span>
                                    :
                                    <div/>
                            }
                        </div>
                    </div>
                </React.Fragment>
                <React.Fragment>
                    <div className="home-cards">
                        {
                            !loadingBooks ?
                                books[0]?.map(book =>{
                                    return(
                                        <div key={book.id} className="cards-display">
                                            <Card
                                                key={book.id}
                                                comic={book}
                                                putBookInTheCart={this.putBookInTheCart}
                                            />
                                        </div>
                                    )
                                })
                                :
                                <img src={require('../../static/loading-marvel.gif')} alt=""/>
                        }
                    </div>
                    <div className="pagination-position">
                        {
                            books.length > 0 ?
                                <div style={{justifyContent:"center"}}>
                                    <Pagination
                                        activePage={this.state.page}
                                        itemsCountPerPage={12}
                                        totalItemsCount={this.props.infoBooks.total}
                                        pageRangeDisplayed={6}
                                        onChange={this.handlePageChange.bind(this)}
                                    />
                                </div>
                                :
                                <div/>
                        }
                    </div>
                </React.Fragment>
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
