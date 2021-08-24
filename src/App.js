import "./App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import useStyles from "./components/Styles";

import Chicken from "./pages/Chicken";
import Meat from "./pages/Meat";
import { Typography } from "@material-ui/core";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
function App() {
  const classes = useStyles();

  return (
    <div className="App">
      <div className={classes.root}>
        <Router>
          <Switch>
            <Route exact path="/">
              {/* Header */}
              <Header />
              <Typography variant="h3" className={classes.welcome}>
                Welcome fellow Shawarma enthusiast! 🥳
              </Typography>
              {/* Main Page */}
              <Main />
              {/* //Footer */}
              <Footer />
            </Route>
            <Route path="/Meat">
              <Meat />
            </Route>
            <Route path="/Chicken">
              <Chicken />
            </Route>
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
