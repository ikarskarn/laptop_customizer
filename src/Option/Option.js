import React from 'react';
import './Option.css';

class Option extends React.Component {
    render() {
        
        const USCurrencyFormat = new Intl.NumberFormat('en-US', {
            style: 'currency',
              currency: 'USD'
        });
        
        const options = this.props.feature;
        const newParts = options.map((option, idx) =>
            <div key={`${option.name}_${idx}`} className='feature__item'>
                <input
                    type="radio"
                    id={`${option.name}_${idx}`}
                    className="feature__option"
                    name={JSON.stringify(option.name)}
                    checked={option.name === this.props.selected.name}
                    onChange={e => this.props.updateFeature(this.props.featureType, option)}
            />
            <label htmlFor={`${option.name}_${idx}`} className="feature__label">
                {option.name} ({USCurrencyFormat.format(option.cost)})
            </label>
        </div>
        ); 
        
        return (
            <>
                {newParts}
            </>
        )
    }
}

export default Option;