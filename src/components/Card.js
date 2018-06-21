import React, { Component } from 'react';
import Info from './Info.js';

class Card extends Component {

	constructor() {
		super();
		this.state = {
			extraInfo: false
		}
	}

	setVisibilityTrue = (event) => {
		this.setState({ extraInfo: true})
	}

	setVisibilityFalse = (event) => {
		this.setState({ extraInfo: false})
	}

	render() {
		if (!this.state.extraInfo) {
			return (
				<div>
					<h2>{this.props.movie.title}</h2>
					<button onClick={this.setVisibilityTrue}>Show More</button>
				</div>
				);
		} else {
			return (
				<div>
					<h2>{this.props.movie.title}</h2>
					<Info movie={this.props.movie} />
					<button onClick={this.setVisibilityFalse}>Show Less</button>
				</div>
			);
		}
	}

}

export default Card;