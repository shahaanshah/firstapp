import React from "react";
import Nav from "./Nav";
import Home from "./Home";
// import Contacts from './Pages/Contacts';
// import About from './Pages/About';
// import Services from './Pages/Services';
import Contact from "./Contact";
import About from "./About";
import Services from "./Services";
import HowItWork from "./HowItwork";
import Footer from "./Footer";
import { Route, Router, Switch } from "react-router-dom";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import AOS from "aos";
import "aos/dist/aos.css";

const App = () => {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/services" component={Services} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
      </Switch>
    </>
  );
};
export default App;
