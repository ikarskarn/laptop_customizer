import React from 'react';
import './Price.css';

class Price extends React.Component {
    render() {
        const USCurrencyFormat = new Intl.NumberFormat('en-US', {
            style: 'currency',
              currency: 'USD'
        });
        return(
            <div className="summary__option">
                <div className="summary__option__label">
                    {this.props.optionLabel}
                </div>
                <div className="summary__option__value">
                    {this.props.optionValue}
                </div>
                <div className="summary__option__cost">
                    {USCurrencyFormat.format(this.props.optionCost)}
                </div>
            </div>            
        );
    }
}

export default Price;