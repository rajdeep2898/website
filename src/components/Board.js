import React, {Component} from 'react';

import Icon from './Departments/Icon';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


class Board extends Component {
	render () {
		return (
			<div id="container">
				<div className="board">
					<Icon />
				</div>
			</div>
		)
	}
}

export default Board;
