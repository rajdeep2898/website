import React, {Component} from 'react';
import './dialogbo.css';

export default class Dialogbox extends Component {

  look (numb, i) {
    let ll = numb;
    return(
      <p key={i}>{ll}</p>
    );
  }

  render() {
    return (
      <div id={this.props.index} className="modal">
        <div className="modal-content">
          <div className="modal-header">
            <span className="close" onClick={function () {
              document.getElementById(this.props.index).style.display = "none";
            }}>&times;</span>
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
