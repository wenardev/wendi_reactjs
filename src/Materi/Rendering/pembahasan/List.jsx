import React from 'react';

export default class List extends React.Component {
	state = {
		users: ['Wendi', 'Abdul', 'Rohim', 'Ronaldo', 'Messi']
	}

	render() {
		return (
			<div>
				<ul>
					{
						this.state.users.map(function(user, i) {
							return <li key={i}>{user}</li>
						})
					}
				</ul>
			</div>
			)
	}
}