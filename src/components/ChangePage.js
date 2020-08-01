import React, {Component} from "react";
import Pagination from "react-bootstrap/cjs/Pagination";


class ChangePage extends Component{

    constructor(props) {
        super(props);
        this.state = {
            activePage: 15
        };
    }

    firstFive(active){
        let items = [];
        for (let number = 2; number <= active +3 ; number++) {
            items.push(
                <Pagination.Item
                    key={number}
                    active={number === active}
                    data-value={number}
                    onClick={e=> this.props.changePage(e)}>
                    {number}
                </Pagination.Item>
            );
        }
        return [...items, <Pagination.Ellipsis key={0} />]
    }
    middle(active) {
        let items = [<Pagination.Ellipsis key={active-4}/>]
        for (let number = active - 3; number <= active + 3 ; number++) {
            items.push(
                <Pagination.Item
                    key={number}
                    active={number === active}
                    data-value={number}
                    onClick={e=> this.props.changePage(e)}
                >
                    {number}
                </Pagination.Item>
            );
        }
        return [...items, <Pagination.Ellipsis key={active+4}/>];
    }
    lastThree(active, total) {
        let items = [<Pagination.Ellipsis key={0} />]
        for (let number = active - 3; number < total ; number++) {
            items.push(
                <Pagination.Item
                    key={number}
                    active={number === active}
                    data-value={number}
                    onClick={e=> this.props.changePage(e)}
                >
                    {number}
                </Pagination.Item>
            );
        }
        return items;
    }


    render(){
        return(
            <React.Fragment>
                <Pagination style={{justifyContent:"center"}}>
                    <Pagination.First
                        data-value={1}
                        onClick={e=> this.props.changePage(e)}
                    />
                    <Pagination.Prev
                        data-value={this.props.activePage > 1? this.props.activePage - 1: 1}
                        onClick={e=> this.props.changePage(e)}
                    />
                    <Pagination.Item
                        key='1'
                        active={ 1 === this.props.activePage}
                        data-value={1}
                        onClick={e=> this.props.changePage(e)}
                    >
                        1
                    </Pagination.Item>
                    {
                        this.props.activePage < 6 ?
                            (this.firstFive(this.props.activePage)):
                            Math.abs(this.props.activePage - this.props.lastPage) < 3 ?
                                (this.lastThree(this.props.activePage, this.props.lastPage))
                                :
                                (this.middle(this.props.activePage))

                    }
                    <Pagination.Item
                        key={this.props.lastPage}
                        active={ this.props.lastPage === this.props.activePage}
                        data-value={this.props.lastPage}
                        onClick={e=> this.props.changePage(e)}
                    >
                        {this.props.lastPage}
                    </Pagination.Item>
                    <Pagination.Next
                        data-value={this.props.activePage < this.props.lastPage? this.props.activePage + 1: this.props.lastPage}
                        onClick={e=> this.props.changePage(e)}
                    />
                    <Pagination.Last
                        data-value={this.props.lastPage}
                        onClick={e=> this.props.changePage(e)}
                    />
                </Pagination>
            </React.Fragment>
        )
    }
}

export default ChangePage;
