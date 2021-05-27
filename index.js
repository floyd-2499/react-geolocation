import { render } from "@testing-library/react";
import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";
import Spinner from "./Spinner";

// const App = () => {
//   return (
//     <div>
//       <h1>Hey There</h1>
//     </div>
//   );
// };                    Not gonna use this
//                       cz codes have been mooved to a seperate function below..... !!

class App extends React.Component {
  //   constructor(props) {
  //     super(props);
  //     this.state = { lat: null, errorMessage: "" };
  //     // window.navigator.geolocation.getCurrentPosition(
  //     //     (position) => {
  //     //       // to update setState is put
  //     //       this.setState({ lat: position.coords.latitude });
  //     //     },
  //     //     (err) => {
  //     //       this.setState({ errorMessage: err.message });
  //     //     }
  //     //   );

  //   }

  state = { lat: null, errorMessage: "" };

  //  component LifeCycle Methods
  //   for it changes when updated and mounts/brings once Please checkout b4 using

  // componentDidMount()
  // componentDidUpdate()
  //Lets try

  // componentDidMount(){
  //     console.log(' My component was rendered to the screen');        // only @ begining
  // }
  // componentDidUpdate(){
  //     console.log('Component just updated and re-rendered')                  // rerendered whenever updated
  // }

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => this.setState({ lat: position.coords.latitude }),
      (err) => this.setState({ errorMessage: err.message })
    );
  }

  renderContent() {
    if (this.state.errorMessage && !this.state.lat) {
      return <div> Boss we got an Error! : {this.state.errorMessage}</div>;
    }
    if (!this.state.errorMessage && this.state.lat) {
      return <SeasonDisplay lat={this.state.lat} />;
    }

    return <Spinner message=" Please accept the message" />;
  }

  //   render() {
  //     if (this.state.errorMessage && !this.state.lat) {
  //       return <div> Boss we got an Error! : {this.state.errorMessage}</div>;
  //     }
  //     if (!this.state.errorMessage && this.state.lat) {
  //       return <SeasonDisplay lat={this.state.lat} />
  //     }

  //     return <Spinner message=" Please accept the message"/>
  //   }
  // }

      render() {
        return <div className="border red">{this.renderContent()}</div>;

    }
  }


ReactDOM.render(<App />, document.querySelector("#root"));
