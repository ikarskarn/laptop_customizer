import React from 'react';
import Option from '../Option/Option.js';
import './Feature.css';
import STORE from '../STORE.js';

class Feature extends React.Component {
    render() {
        const features = STORE;
        const partsList = Object.keys(features).map((feature, key) =>
            <fieldset key={`${feature}_${key}`} className="feature">
                <legend className="feature__name">
                    <h3>{feature}</h3>
                </legend>
                <Option 
                    feature={features[feature]}
                    featureType={feature}
                    key={key}
                    selected={this.props.selected}
                    updateFeature={this.props.updateFeature}
                >
                </Option>
            </fieldset>
        );
        
        return (
            <>
                {partsList}
            </>
        );
    }
}

Feature.defaultProps= {
    features: []
}

export default Feature;