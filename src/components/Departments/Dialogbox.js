import React, {Component} from 'react';
import './dialogbo.css';

export default class Dialogbox extends Component {
  constructor (props) {
	    super(props);
	    this.closeDialog = this.closeDialog.bind(this);
		}
  look (numb, i) {
    let ll = numb;
    return(
      <p key={i}>{ll}</p>
    );
  }
  closeDialog() {
          console.log("0");
          document.getElementById("0").style.display = "none";
    }

  render() {
    return (
      <div id={this.props.index} className="modal">
        <div className="modal-content">
          <div className="modal-header">
						<span className="close" onClick={this.closeDialog}>&times;</span>
            <h2>Semester</h2>
          </div>
          <div className="modal-body">
            {this.props.number.map(this.look)}
          </div>
        </div>
      </div>
    );
  }
}
