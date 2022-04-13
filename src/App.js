import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import Profile from "./Profile";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import BestBooks from "./Bookshelf";
import { withAuth0 } from "@auth0/auth0-react";
import LoginButtonAutho from "./LoginButtonAutho";
import "./main.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      user: null,
      userName: null,
      email: this.props.auth0.user,
      loginForm: false,
      showBookForm: false,
      showUpdateForm: false,
      loggedIn: false,
    };
  }

  render() {

    return (
      <>
    
        {this.props.auth0.isAuthenticated ? "" : <LoginButtonAutho />}

        {this.props.auth0.isAuthenticated ? (
          <Router>
            <Header />

            <Switch>
              <Route exact path="/">
                <Main />
              </Route>

              <Route exact path="/Bookshelf">
                <BestBooks />
              </Route>

              <Route exact path="/profile">
                <Profile />
              </Route>
            </Switch>

            <Footer />
          </Router>
        ) : (
          <div>
          <p id="quote"> “The more that you read, the more things you will know. The more that you learn, the more places you’ll go.” - Dr. Seuss </p>
          </div>
        )}
   
      </>
    );
  }
}

export default withAuth0(App);
