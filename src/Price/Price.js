import React from 'react';
import './Price.css';

class Price extends React.Component {
    render() {
        const store = this.props.selected;
        const USCurrencyFormat = new Intl.NumberFormat('en-US', {
            style: 'currency',
              currency: 'USD'
        });
        return(
            <>
                <div className="summary__option">
                    <div className="summary__option__label">
                        Processor
                    </div>
                    <div className="summary__option__value">
                        {store.Processor.name}
                    </div>
                    <div className="summary__option__cost">
                        {USCurrencyFormat.format(store.Processor.cost)}
                    </div>
                </div>
                <div className="summary__option">
                    <div className="summary__option__label">
                        Operating System
                    </div>
                    <div className="summary__option__value">
                        {store.OperatingSystem.name}
                    </div>
                    <div className="summary__option__cost">
                        {USCurrencyFormat.format(store.OperatingSystem.cost)}
                    </div>
                </div>
                <div className="summary__option">
                    <div className="summary__option__label">
                        Video Card
                    </div>
                    <div className="summary__option__value">
                        {store.VideoCard.name}
                    </div>
                    <div className="summary__option__cost">
                        {USCurrencyFormat.format(store.VideoCard.cost)}
                    </div>
                </div>
                <div className="summary__option">
                    <div className="summary__option__label">
                        Display
                    </div>
                    <div className="summary__option__value">
                        {store.Display.name}
                    </div>
                    <div className="summary__option__cost">
                        {USCurrencyFormat.format(store.Display.cost)}
                    </div>
                </div>
            </>
        );
    }
}

export default Price;