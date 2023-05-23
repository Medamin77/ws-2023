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
          <div class="card" style={{ width: "18", marginTop: "100px" }}>
            <img
              class="card-img-top"
              src={imgSrc}
              alt="Card image cap"
              style={{ width: "50%", marginLeft: "350px", marginTop: "100px" }}
            />
            <div class="card-body">
              <h3 className="text-primary">{profession}</h3>
              <h3 className="text-primary">{fullname}</h3>
              <h3 className="text-primary">{bio}</h3>

              <p class="card-text"></p>
              <a href="#" class="btn btn-primary">
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