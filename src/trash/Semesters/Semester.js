import React, {Component} from 'react';

//import images
import sempath from '../../data/departments'

export default class Semester extends Component {
	constructor (props) {
	    super(props);
	    this.state = { sem : sempath };
		}

	look (semdes, i) {
		let text = semdes.sem_no;
		return (<div className = "sems" key={i}>
			<p className = "semtext" >{text}</p>
		</div>);
		}

	render () {
		return (
				<div>
					<h1>Semesters</h1>
					<div className="sem_dialog ">
						{this.state.sem.map(this.look)}
					</div>
				</div>
				);
	}
};
