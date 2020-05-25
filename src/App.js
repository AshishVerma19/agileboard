import React from "react";
import "./App.less";
import AgileBoard from "./containers/AgileBoard";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends React.Component {
  render() {
    console.log(this.props);
    return <AgileBoard />;
  }
}

export default App;
