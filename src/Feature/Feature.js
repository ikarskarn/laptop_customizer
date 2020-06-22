import React from 'react';
import Option from '../Option/Option.js';
import './Feature.css';

class Feature extends React.Component {
    render() {
        const features = this.props.features;
        const selected = this.props.selected;
        return(
            <>
                <fieldset className="feature">
                    <legend className="feature__name">
                        <h3>Processor</h3>
                    </legend>
                    <Option
                        feature='Processor'
                        selected={selected.Processor}
                        part={features.Processor[0]}
                        updateFeature={this.props.updateFeature}
                    />
                    <Option
                        feature='Processor'
                        selected={selected.Processor}
                        part={features.Processor[1]}
                        updateFeature={this.props.updateFeature}
                    />
                </fieldset>
                <fieldset className="feature">
                    <legend className="feature__name">
                        <h3>Operating System</h3>
                    </legend>
                    <Option
                        feature='OperatingSystem'
                        selected={selected.OperatingSystem}
                        part={features.OperatingSystem[0]}
                        updateFeature={this.props.updateFeature}
                    />
                    <Option
                        feature='OperatingSystem'
                        selected={selected.OperatingSystem}
                        part={features.OperatingSystem[1]}
                        updateFeature={this.props.updateFeature}
                    />
                </fieldset>
                <fieldset className="feature">
                    <legend className="feature__name">
                        <h3>Video Card</h3>
                    </legend>
                    <Option
                        feature='VideoCard'
                        selected={selected.VideoCard}
                        part={features.VideoCard[0]}
                        updateFeature={this.props.updateFeature}
                    />
                    <Option
                        feature='VideoCard'
                        selected={selected.VideoCard}
                        part={features.VideoCard[1]}
                        updateFeature={this.props.updateFeature}
                    />
                </fieldset>
                <fieldset className="feature">
                    <legend className="feature__name">
                        <h3>Display</h3>
                    </legend>
                    <Option
                        feature='Display'
                        selected={selected.Display}
                        part={features.Display[0]}
                        updateFeature={this.props.updateFeature}
                    />
                    <Option
                        feature='Display'
                        selected={selected.Display}
                        part={features.Display[1]}
                        updateFeature={this.props.updateFeature}
                    />
                </fieldset>
            </>
        );
    }
}

export default Feature;