import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  withRouter,
  Route,
  Link
} from "react-router-dom";
import routes from "./routes";
import { Provider } from "react-redux";
import store from "./store";

import { Navbar } from "./components";
import "./App.css";
import "./styles.css";

function App() {
  return (
    <Router>
      <div>
        <Navbar link={Link} location={withRouter(Navbar)} />
        {routes.map((route, i) => (
          <Route
            key={i}
            exact={route.exact}
            path={route.path}
            render={props => (
              // pass the sub-routes down to keep nesting
              <Provider store={store}>
                <route.component {...props} />
              </Provider>
            )}
          />
        ))}
      </div>
    </Router>
  );
}

export default App;
