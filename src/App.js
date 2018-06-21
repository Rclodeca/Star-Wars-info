import React, { Component } from 'react';
import './App.css';
import CardList from './components/CardList.js';

class App extends Component {

	constructor() {
		super();
		this.state = {
			movies: []
		}
	}

	componentDidMount() {	
		fetch('https://swapi.co/api/films/')
			.then(response => response.json())
			.then(response => this.setState({movies: response.results}));
	}

	render() {
		const { movies } = this.state;
		const filterMovies = movies.filter(mov => {
			return mov.title.toLowerCase();
		});
		
		if (movies.length === 0) {
			return (
				<h1>Loading...</h1>
			);
		} else {
			return (
				<div>
					<h1>Star Wars Info</h1>
					<br />
					<CardList movies={movies}/>
				</div>	
			);
		}
	}
}

export default App;