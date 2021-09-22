import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import HomeContainer from "./containers/HomeContainer";
import NotFound from "./pages/NotFound";

class App extends React.Component {
  state = {
    forceUpdate: false,
  };

  handleForceUpdateTrue = () => {
    this.setState({
      forceUpdate: true,
    });
  };

  handleForceUpdateFalse = () => {
    this.setState({
      forceUpdate: false,
    });
  };

  //renderProjectsContainer = () => <ProjectsContainer forceUpdate={this.state.forceUpdate} handleForceUpdateFalse={this.handleForceUpdateFalse} />
  // renderAboutContainer = () => (
  //   <AboutContainer
  //     forceUpdate={this.state.forceUpdate}
  //     handleForceUpdateFalse={this.handleForceUpdateFalse}
  //   />
  // );
  //renderResumeContainer = () => <ResumeContainer forceUpdate={this.state.forceUpdate} handleForceUpdateFalse={this.handleForceUpdateFalse} />

  render() {
    return (
      <div id="home">
        <div id="navbar">{/* this is reserved for nav bar sections */}</div>

        <div id="body"></div>

        <Switch>
          <Route exact path="/" component={HomeContainer} />
          <Route exact path="/about" component={this.renderAboutContainer} />
          <Route
            exact
            path="/projects"
            component={this.renderProjectsContainer}
          />
          <Route exact path="/resume" component={this.renderResumeContainer} />
          <Route component={NotFound} />
        </Switch>
      </div>
    );
  }
}

export default App;
