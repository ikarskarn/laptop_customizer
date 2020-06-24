import React from 'react';
import './Total.css';

class Total extends React.Component {
    render() {
        const selected = this.props.selected;
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
                    {handlePrice([selected.Processor.cost, selected.OperatingSystem.cost, selected.VideoCard.cost, selected.Display.cost])}
                </div>
            </div>
        );
    }
}

export default Total;