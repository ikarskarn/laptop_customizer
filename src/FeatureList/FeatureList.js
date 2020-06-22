import React from 'react';
import Feature from '../Feature/Feature.js';
import './FeatureList.css';

class FeatureList extends React.Component {
    render() {
        return(
            <form className='main__form'>
                <h2>Customize Your Laptop</h2>
                <Feature 
                    selected={this.props.selected}
                    features={this.props.features}
                    updateFeature={this.props.updateFeature}
                />
            </form>
        );
    }
}

export default FeatureList;