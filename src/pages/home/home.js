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
    handlePageChange(page){
        this.setState({page: page})
        this.getBooks(page)
    }

    getBooks (page){
        this.props.getAllBooks(page - 1)
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
                    <div>

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
