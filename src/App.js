import { Component } from "react";
import "./App.css";
import Profil from "./components/Profile";
import image from"./components/pp.jpeg";

class App extends Component {
  state = {
    person: {
      fullname: "Elyes",
      bio: "DrifT car",
      imgSrc: image,
      profession: "Developer",
    },
    show: false,
  };

  toggleVisibility = () => this.setState({ show: !this.state.show });

  render() {
    return (
      <div className="App">
        <h1>Welcome</h1>
        <button className="show-btn" onClick={this.toggleVisibility}>
          {this.state.show ? "Hide" : "Show"} Counter
        </button>
        {/*this.state.isVisible === true ? <Counter /> : ''*/}
        {this.state.show && <Profil person={this.state.person} />}
      </div>
    );
  }
}

export default App;
