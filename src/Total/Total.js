import React from 'react';
import './Total.css';

class Total extends React.Component {
    render() {
        const handlePrice = (props) => {
            let sum = props.reduce(function(a,b){
                return a+b;
            }, 0);
            return USCurrencyFormat.format(sum);
        }
        const USCurrencyFormat = new Intl.NumberFormat('en-US', {
            style: 'currency',
              currency: 'USD'
        });

        return(
            <div className="summary__total">
                <div className="summary__total__label">
                    Total
                </div>
                <div className="summary__total__value">
                    {handlePrice(this.props.prices)}
                </div>
            </div>
        );
    }
}

export default Total;