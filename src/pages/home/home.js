import React, {Component} from "react";
import { connect } from 'react-redux'
import {getAllBooks} from "../../actions/getActions";
import Pagination from "react-js-pagination";

const mapDispatchToProps = dispatch => {
    return {
        getAllBooks: (page) => dispatch(getAllBooks(page))
    }
}
const mapStateToProps = state => {
    return {
        books: state.books,
        infoBooks: state.infoBooks
    };
};

const initialPage = 1;

class Home extends Component{
    state = {
        page: initialPage
    }
    componentDidMount() {
        this.props.getAllBooks(this.state.page - 1)
        console.log('passando');
    }
    printAParada(book){
        return(
            <p key={book.id}>{book.title}</p>
        )
    }

    handlePageChange(page){
        console.log(page);
        this.setState({page: page})
        this.props.getAllBooks(page - 1)
    }

    render(){
        let books = [];
        let page = this.props.infoBooks.offset / 10;
        this.props.books.forEach(book =>{
            books.push(book)
        })
        let infoPage = {
            page: page + 1,
            total: this.props.infoBooks.total
        }
        return(
            <React.Fragment>
                {
                    books.length > 0 ? books[0].map(this.printAParada)
                        :
                        <p>Carregando....</p>
                }
                {
                    this.props.books.length > 0 ?
                        /*<ChangePage
                            activePage={infoPage.page}
                            lastPage={infoPage.total}
                            changePage={this.changePage}
                        />*/
                        <div style={{justifyContent:"center"}}>

                            <Pagination
                                activePage={infoPage.page}
                                itemsCountPerPage={10}
                                totalItemsCount={infoPage.total}
                                pageRangeDisplayed={10}
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
