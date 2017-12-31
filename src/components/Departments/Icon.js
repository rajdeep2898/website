import React, {Component} from 'react';

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
		return (<div className = "onebit" key={i}>
			<img className = "image" src= {imgw} alt={text} />
			<p className = "texts" >{text}</p>
		</div>);
		}

	render () {
		return (
			<div>
				<h1>Departments</h1>
				<Link to='/semester' className="pro ">
					{this.state.img.map(this.look)}
				</Link>
			</div>
		);
	}
};
