import React, {Component} from 'react';
import './stockchart.css';

class StockInfo extends Component {
    constructor() {
        super();
        this.state = {
        stockinfo: []
        }
    }
    componentDidMount() {
        fetch('/stockinfo')
            .then(res => res.json())
            .then(stockinfo => this.setState({stockinfo}, () => console.log('stock info fetched', stockinfo)));
    }
    
    render() {
        return (
        <div>
            <h2>Stock Info</h2>
                <ul>
                    {this.state.stockinfo.map(info =>
                        <li key={info.Id}>ID: { info.Id } Price: { info.Close } Volume: {info.Volume} </li>    
                    )}
                </ul>
        </div>
        );
    }
}

export default StockInfo;
