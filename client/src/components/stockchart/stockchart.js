import React, {Component} from 'react';
import './stockchart.css';

class StockInfo extends Component {
    constructor() {
        super();
        this.state = {
        prices: []
        }
    }
    componentDidMount() {
        fetch('/stockinfo')
            .then(res => res.json())
            .then(prices => this.setState({prices}, () => console.log('stock info fetched', prices)));
    }
    
    render() {
        return (
        <div>
            <h2>Stock Chart</h2>
        </div>
        );
    }
}

export default StockInfo;
