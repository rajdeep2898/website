import React, {Component} from 'react';

//import images
import sempath from '../data/semester'

export default class Semester extends Component {
	constructor (props) {
	    super(props);
	    this.state = { sem: sempath };
		}

	look (semdes, i) {
		let text = semdes.desc;
		let sems = semdes.sems;
		return (<div className = "onebit" key={i}>
			<img className = "image" src= {sems} alt={text} />
			<p className = "texts" >{text}</p>
		</div>);
		}

	render () {
		return (
				<div>
					<h1>Semesters</h1>
					<div className="pro ">
						{this.state.sem.map(this.look)}
					</div>
				</div>
				);
	}
};
