import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/font.css";
import "./assets/css/style.css";
import { BrowserRouter as Router, Switch, Route, } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Menu from "./pages/Menu";
import Catering from "./pages/Catering";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import Orderonline from "./pages/Orderonline";
import Header from "./componets/Header";

function App() {
    return (
        <Router>
            <Header />
            <Switch>
                <Route exact path="/" component={Home}></Route>
                <Route exact path="/Home" component={Home}></Route>
                <Route exact path="/About" component={About}></Route>
                <Route exact path="/Menu" component={Menu}></Route>
                <Route exact path="/Catering" component={Catering}></Route>
                <Route exact path="/Gallery" component={Gallery}></Route>
                <Route exact path="/Contact" component={Contact}></Route>
                <Route exact path="/Orderonline" component={Orderonline}></Route>
            </Switch>
        </Router>
    );
}

export default App;
