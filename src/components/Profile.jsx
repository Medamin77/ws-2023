import { Fragment } from "react";
import React, { Component } from "react";

export class Profil extends Component {
  state = {
    timer: 0,
  };

  componentDidMount = () => {
    this.myInterval = setInterval(() => {
      this.setState({ timer: this.state.timer + 1 });
    }, 1000);
  };
  render() {
    console.log(this.props.person);
    const { person } = this.props;
    const { fullname, bio, imgSrc, profession } = person;
    return (
      <Fragment>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div className="card" style={{ width: "18", marginTop: "100px" }}>
            <img
              className="card-img-top"
              src={imgSrc}
              alt="Card  cap"
              style={{ width: "50%", marginLeft: "350px", marginTop: "100px" }}
            />
            <div className="card-body">
              <h3 className="text-primary">{profession}</h3>
              <h3 className="text-primary">{fullname}</h3>
              <h3 className="text-primary">{bio}</h3>

              <p className="card-text"></p>
              <a href="#!" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        </div>
        <h2>timer: {this.state.timer}</h2>
      </Fragment>
    );
  }
}

export default Profil;