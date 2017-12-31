import React, {Component} from 'react';
import './dialogbox.css';

//import images
import depart from '../../data/departments';

import { Link } from 'react-router-dom';

export default class Icon extends Component {
	constructor (props) {
	    super(props);
	    this.state = { img : depart };
		}

	look (imgdes, i) {
		let text = imgdes.dept_name;
		let imgw = imgdes.imge;
		return (
		<div className = "onebit" key={i} index={i}>
			<img className = "image" src= {imgw} alt={text} />
			<p className = "texts" >{text}</p>
		</div>);
		}

		openDialog () {
			document.getElementById('myModal').style.display = "block";
		}

		closeDialog () {
			document.getElementById('myModal').style.display = "none";
		}

	render () {
		return (
			<div>
				<h1>Departments</h1>
				<div className="pro" onClick={this.openDialog} >
					{this.state.img.map(this.look)}
				</div>
				<div id="myModal" className="modal">
					<div className="modal-content">
						<div className="modal-header">
							<span className="close" onClick={this.closeDialog}>&times;</span>
							<h2>Semester</h2>
						</div>
						<div className="modal-body">
							<p>Semesters</p>
						</div>
					</div>
				</div>
			</div>
		);
	}
};
