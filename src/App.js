import React from "react";
<<<<<<< HEAD
import Loader from "./components/Loader";
=======
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
>>>>>>> df433d565e296266badff9d1695281e57ef5b049
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Team from "./components/Team";

import "./App.css";
import "./colors.css";

const THEME = createMuiTheme({
  typography: {
    fontFamily: `sans-serif`,
    fontSize: 14,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
  },
});

function App() {
  return (
    <ThemeProvider theme={THEME}>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/team">
            <Team />
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
