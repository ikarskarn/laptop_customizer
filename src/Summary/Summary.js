import React from 'react';
import Price from '../Price/Price.js';
import Total from '../Total/Total.js';
import './Summary.css';

class Summary extends React.Component {
    render() {
        const selected = this.props.selected;
        const features = Object.keys(selected);
        const list = features.map((feature, idx) => 
            <Price
                key={`${feature}_${idx}`}
                optionLabel={feature}
                optionValue={selected[feature].name}
                optionCost={selected[feature].cost}                   
            />
        );
        
        return(
            <section className="main__summary">
                <h2>Your cart</h2>
                {list}
                <Total
                    selected={selected}
                />
            </section>
        );
    }
}

export default Summary;