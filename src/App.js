import React, { Component } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import "./App.css";
import "font-awesome/css/font-awesome.css";
import "bootstrap/dist/css/bootstrap.css";
import NavBar from "./components/nav";
import NewsFeed from "./components/newsfeed";
import NotFound from "./components/notFound";
import Info from "./components/info";
import About from "./components/about";
import Footer from "./components/footer";
import LeftNav from "./components/leftNav";
import RightAd from "./components/rightAd";
class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <div className="row m-0">
          <div className="col-2">
            <LeftNav />
          </div>
          <div className="col-8">
            <Switch>
              <Route path="/newsfeed" component={NewsFeed} />
              <Route path="/info" component={Info} />
              <Route path="/about" component={About} />
              <Route path="/not-found" component={NotFound} />
              <Redirect exact from="/" to="/newsfeed" />
              <Route path="/not-found" component={NotFound} />
              <Redirect to="/not-found" />
            </Switch>
          </div>
          <div className="col-2 ">
            <RightAd />
          </div>
        </div>

        <Footer />
      </div>
    );
  }
}

export default App;
