import React, {Component} from 'react';

class Icon extends Component {
	constructor (props) {
	    super(props);
	    this.state = {
			img: [
				{imge:'../img/backpack.png', desc:'Backpack'},
				{imge:'../img/brush.png', desc:'Paint Brush'},
				{imge:'../img/burger.png', desc:'Cheeseburger'},
				{imge:'../img/coffeemachine.png', desc:'Coffee Machine'},
				{imge:'../img/gopro.png', desc:'GoPro'},
				{imge:'../img/hat.png', desc:'Pirate Hat'},
				{imge:'../img/helmet.png', desc:'Helmet'},
				{imge:'../img/iMac.png', desc:'iMac'},
				{imge:'../img/inkpot.png', desc:'Inkpot'},
				{imge:'../img/notebook.png', desc:'Notebook'},
				{imge:'../img/tv.png', desc:'TV'},
				{imge:'../img/watch.png', desc:'Watch'}
    		]};
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
