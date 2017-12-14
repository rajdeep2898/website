import React, {Component} from 'react';

class Menu extends Component {
	constructor (props) {
		super(props);
		this.state = {
			namee: [
				'folder',
				'star',
				'work',
				'aspect_ratio',
				'code'
			]};
	}

	shook (text,i){
		return (
			<div key={i}>
			<i className="material-icons" >{text}</i>
			<p className="nav-panel-desc">{text}</p>
			</div>
		);
	}

	render () {
		return( <nav><a href="">{this.state.namee.map(this.shook)}</a></nav>
		);
	}
}


class Panel extends Component {

	openNav(e) {
	    document.getElementById("mySidenav").style.width = "250px";
	    document.getElementById("container").style.marginLeft = "225px";
	    document.getElementById( "panelinout" ).setAttribute( "onClick", {this.closeNav.bind(this)} );
	    document.getElementById("panelinout").className = "hamburger change";
	}

	closeNav(e) {
	    document.getElementById("mySidenav").style.width = "50px";
	    document.getElementById("container").style.marginLeft = "20px";
	    document.getElementById("panelinout" ).setAttribute( "onClick", {this.openNav.bind(this)} );
	    document.getElementById("panelinout").className = "hamburger";
	}


	render () {
		return (
			<div id="panelinout" className="hamburger" onClick= {this.openNav.bind(this)} >
				<div className="bar1"></div>
				<div className="bar2"></div>
				<div className="bar3"></div>
			</div>
		);
	}
}

class Sidenav extends Component {
	render () {
		return (
	      	<div id="mySidenav"><Panel /><Menu /></div>
		);
	}
}

export default Sidenav;
