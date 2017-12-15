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
}


class Panel extends Component {

	constructor(props) {
	  super(props);

	  // You need to bind your functions in the constructor
	  this.openNav = this.openNav.bind(this);
	  this.closeNav = this.closeNav.bind(this);
	  this.onClick= this.onClick.bind(this);
		this.state = {open: false};
	}


	openNav() {
	    document.getElementById("mySidenav").style.width = "250px";
	    document.getElementById("container").style.marginLeft = "225px";
	    //document.getElementById( "panelinout" ).setAttribute( "onClick", {closeNav} );
			this.setState({open: true});
			document.getElementById("panelinout").className = "hamburger change";
	}

	closeNav() {
	    document.getElementById("mySidenav").style.width = "50px";
	    document.getElementById("container").style.marginLeft = "20px";
	    //document.getElementById("panelinout" ).setAttribute( "onClick", {openNav} );
			this.setState({open: false});
			document.getElementById("panelinout").className = "hamburger";
	}

	onClick() {
	  if (this.state.open) {
	    this.closeNav();
	  } else {
	    this.openNav();
	  }
	}

	render () {
		return (
			<div id="panelinout" className="hamburger" onClick= {this.onClick} >
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
