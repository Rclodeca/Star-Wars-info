import React, { Component } from 'react';
import Card from './Card';

const Info = ({movie}) => {


	return (
		<div>
			<p>{movie.release_date}</p>
			<p>{movie.director}, {movie.producer}</p>
			<p>{movie.opening_crawl}</p>
		</div>
	);
}

export default Info;