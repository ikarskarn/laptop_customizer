import React, { Component } from 'react';
import './App.css';
import FeatureList from './FeatureList/FeatureList.js';
import Summary from './Summary/Summary.js';
// Normalizes string as a slug - a string that is safe to use
// in both URLs and html attributes
import slugify from 'slugify';

// This object will allow us to
// easily convert numbers into US dollar values
const USCurrencyFormat = new Intl.NumberFormat('en-US', {
	style: 'currency',
	  currency: 'USD'
});

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			selected: {
				Processor: {
					name: '17th Generation Intel Core HB (7 Core with donut spare)',
					cost: 700
				},
				OperatingSystem: {
					name: 'Ubuntu Linux 16.04',
					cost: 200
				},
				VideoCard: {
					name: 'Toyota Corolla 1.5v',
					cost: 1150.98
				},
				Display: {
					name: '15.6" UHD (3840 x 2160) 60Hz Bright Lights and Knobs',
					cost: 1500
				},
			}
		};
	}
	
	updateFeature(feature, newValue) {
		console.log('updateFeature Feature: ' + feature);
		console.log('updateFeature newValue: ' + newValue);
		const selected = Object.assign({}, this.state.selected);
		selected[feature] = newValue;
		this.setState({
			selected
		});
	};

	render() {
		const features = Object.keys(this.props.features).map((feature, idx) => {
			const featureHash = feature + '-' + idx;
			const options = this.props.features[feature].map(item => {
				const itemHash = slugify(JSON.stringify(item));	
				return (
					<div key={itemHash} className="feature__item">
						<input
							type="radio"
							id={itemHash}
							className="feature__option"
							name={slugify(feature)}
							checked={item.name === this.state.selected[feature].name}
							onChange={e => this.updateFeature(feature, item)}
						/>
						<label htmlFor={itemHash} className="feature__label">
							{item.name} ({USCurrencyFormat.format(item.cost)})
						</label>
					</div>
				);
			});

			return (
				<fieldset className="feature" key={featureHash}>
					<legend className="feature__name">
						<h3>{feature}</h3>
					</legend>
					{options}
				</fieldset>
			);
		});

		return (
			<div className="App">
				<header>
					<h1>ELF Computing | Laptops</h1>
				</header>
							
				<main>
					<FeatureList
						selected={this.state.selected}
						features={this.props.features}
						updateFeature={(option, newValue) => this.updateFeature(option, newValue)}
					/>

					<Summary
						selected={this.state.selected}
					/>
				</main>
				<div>
				
				</div>
			</div>
		);
	}
}

export default App;

/*
<div>
	<FeatureList
		selected={this.state.selected}
		features={this.props.features}
		updateFeature={(option, newValue) => this.updateFeature(option, newValue)}
	/>
	<Summary
		selected={this.state.selected}
	/>
</div>
*/