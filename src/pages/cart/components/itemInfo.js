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

const mapStateToProps = state => {
    return {
        cart: state.cart
    };
};

class ItemInfo extends React.Component {

    render() {
        return (
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
                        {this.props.cart.map((row) => (
                            <TableRow key={row.id}>
                                <TableCell component="th" scope="row">
                                    <ComicImage
                                        thumbnail={row.thumbnail.path + '.' + row.thumbnail.extension}/>
                                </TableCell>
                                <TableCell align="left" className="second-column">{row.title}</TableCell>
                                <TableCell align="left">{row.prices[0].price}</TableCell>
                                <TableCell align="left">4</TableCell>
                                <TableCell align="left">5</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        )
    }
}
export default connect(mapStateToProps)(ItemInfo)
