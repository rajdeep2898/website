import React, {Component} from 'react';
import Dialog from './Dialogbox';

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
		let sems = imgdes.sem_no;
		const openDialog=()=> {
			    	document.getElementById(i).style.display = "block";
	  }

		const  closeDialog=()=> {
				    document.getElementById(i).style.display = "none";
		  }
		return (
				<div key={i} onClick={openDialog}>
					<div className = "onebit" >
						<img className = "image" src= {imgw} alt={text} />
						<p className = "texts" >{text}</p>
					</div>
					<Dialog number={sems} closed={closeDialog} index={i} />
				</div>
			);
		}


	render () {
		return (
			<div>
				<h1>Departments</h1>
				<div className="pro" >
					{this.state.img.map(this.look)}
				</div>
			</div>
		);
	}
};
