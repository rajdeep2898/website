import React, {Component} from 'react';

import names from '../data/menudesc';

export default class Menu extends Component {
	constructor (props) {
		super(props);
		this.state = { namee: names };
	}

	shook (text,i){
		return (
			<div key={i}>
				<a href="">
					<i className="material-icons" >{text}</i>
					<p className="nav-panel-desc">{text}</p>
				</a>
			</div>
		);
	}

	render () {
		return( <nav>{this.state.namee.map(this.shook)}</nav>
		);
	}
};
