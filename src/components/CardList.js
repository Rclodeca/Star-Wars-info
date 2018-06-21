import React, { Component } from 'react';
import Card from './Card.js';

const CardList = ({ movies }) => {
	return (
		<div>
			{
				movies.map((mov, i) => {
					return <Card key={i} movie={mov} />
				})

			}
		</div>
	);
}
export default CardList;