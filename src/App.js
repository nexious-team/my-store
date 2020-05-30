import React from "react";
import {
  BrowserRouter as Router,
  withRouter,
  Route,
  Link,
} from "react-router-dom";
import routes from "./routes";
import { Provider } from "react-redux";
import store from "./store";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

import { Navbar } from "./components";
import Footer from "./components/Footer";

import "./App.css";
import "./styles.css";

function App() {
  // Make sure to call `loadStripe` outside of a component’s render to avoid
  // recreating the `Stripe` object on every render.
  const stripePromise = loadStripe(
    "pk_test_WaCkQbtLC5eFJWAW5bMZ5Cpx00v6MiilgA"
  );
  return (
    <Elements stripe={stripePromise}>
      <Router>
        <div>
          <Navbar link={Link} location={withRouter(Navbar)} />
          {routes.map((route, i) => (
            <Route
              key={i}
              exact={route.exact}
              path={route.path}
              render={(props) => (
                // pass the sub-routes down to keep nesting
                <Provider store={store}>
                  <route.component {...props} />
                </Provider>
              )}
            />
          ))}
          <div className="pt-32">
            <Footer></Footer>
          </div>
        </div>
      </Router>
    </Elements>
  );
}

export default App;
