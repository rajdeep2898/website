import React, {Component} from 'react';
import Menu from './Menu';
import Panel from './Panel';

class Sidenav extends Component {
	render () {
		return (
	      	<div id="mySidenav"><Panel /><Menu /></div>
		);
	}
};

export default Sidenav;
