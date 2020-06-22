import React from 'react';
import './Option.css';
import slugify from 'slugify';

class Option extends React.Component {
    render() {
        const USCurrencyFormat = new Intl.NumberFormat('en-US', {
            style: 'currency',
              currency: 'USD'
        });
        const item = this.props.part;
        const itemHash = slugify(JSON.stringify(item));	
        
        return (
            <div className='feature__item'>
                <input
                    type="radio"
                    id={itemHash}
                    className="feature__option"
                    name={this.props.feature}
                    checked={this.props.part.name === this.props.selected.name}
                    onChange={e => this.props.updateFeature(this.props.feature, this.props.part)}
                />
                <label htmlFor={itemHash} className="feature__label">
                    {this.props.part.name} ({USCurrencyFormat.format(this.props.part.cost)})
                </label>
            </div>
        )
    }
}

export default Option;