import React, {Component} from 'react';

//import images
import imgpath from '../data/images'

class Icon extends Component {
	constructor (props) {
	    super(props);
	    this.state = { img: imgpath };
		}
	
	look (imgdes, i) {
		console.log(text+" "+i);
		let text = imgdes.desc;
		let imgw = imgdes.imge
		return (<div className = "onebit" key={i}>
			<img className = "image" src= {imgw} alt={text} />
			<p className = "texts" >{text}</p>
		</div>);
		}

	render () {
		return (<div className="pro ">
					{this.state.img.map(this.look)}
				</div>
				);

	}

};

class Board extends Component {
	render () {
		return (
			<div id="container">
				<div className="board">
					<h1>Favorite Icons</h1>
					<Icon/>
				</div>
			</div>
		)
	}
}

export default Board;
