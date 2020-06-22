import React from 'react';
import Price from '../Price/Price.js';
import Total from '../Total/Total.js';
import './Summary.css';

class Summary extends React.Component {
    render() {
        const store = this.props.selected;
        const prices = [
            store.Processor.cost,
            store.OperatingSystem.cost,
            store.VideoCard.cost,
            store.Display.cost
        ];
        
        return(
            <section className="main__summary">
                <h2>Your cart</h2>
                <Price 
                    selected={this.props.selected}
                />
                <Total
                    prices={prices}
                />
            </section>
        );
    }
}

export default Summary;