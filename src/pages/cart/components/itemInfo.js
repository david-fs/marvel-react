import React from 'react'
import { connect } from 'react-redux'
import './itemInfo.scss'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import ComicImage from "../../../components/comicImage";
import Icon from "@material-ui/core/Icon";
import {insertBook, removeBook} from "../../../actions/actions";

const mapDispatchToProps = dispatch => {
    return {
        insertBook: (book) => dispatch(insertBook(book)),
        removeBook: (book) => dispatch(removeBook(book))
    }
}
class ItemInfo extends React.Component {
    render() {
        let elements = [...this.props.cart];


        return (
            <React.Fragment>
                <TableContainer component={Paper}>
                    <Table size="small" aria-label="a dense table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Capa</TableCell>
                                <TableCell align="left">Título</TableCell>
                                <TableCell align="left">Valor unitário</TableCell>
                                <TableCell align="left">Quantidade</TableCell>
                                <TableCell align="left">Valor total</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {elements.map((row) => (
                                <TableRow key={row.id}>
                                    <TableCell component="th" scope="row">
                                        <ComicImage
                                            thumbnail={row.thumbnail.path + '.' + row.thumbnail.extension}/>
                                    </TableCell>
                                    <TableCell align="left" className="second-column">{row.title}</TableCell>
                                    <TableCell align="left">{row.prices[0].price}</TableCell>
                                    <TableCell align="left">
                                        <Icon className="icon" style={{color: "red"}} onClick={() => this.props.decreaseBookQuantity(row)}>remove_circle_outline</Icon>
                                        <span className="quantity">{row.quantity}</span>
                                        <Icon className="icon" style={{color: "green"}} onClick={() => this.props.increaseBookQuantity(row)}>add_circle_outline</Icon>
                                    </TableCell>
                                    <TableCell align="left">{parseFloat((row.prices[0].price * row.quantity).toFixed(2))}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </React.Fragment>
        )
    }
}
export default connect(mapDispatchToProps)(ItemInfo)
