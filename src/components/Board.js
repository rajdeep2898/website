import React, {Component} from 'react';

import Icon from './Icon';



class Board extends Component {
	render () {
		return (
			<div id="container">
				<div className="board">
					<h1>Departments</h1>
					<Icon/>
				</div>
			</div>
		)
	}
}

export default Board;
