import React, { Component } from 'react';
import { Route } from 'react-router';
import {
  Header,
  Footer,
  Navbar } from '../components';
import {
  About,
  Faqs,
  NoMatch,
  Permissions,
  Preferences,
  Profile,
  TransactionHistory,
  Transfer,
  Users } from '../routes';

const Scene = ({
  children,
  className = 'main-content',
  ...props }) => (
  <div
    className={className}
    {...props}
  >
    {children}
  </div>
);

class App extends Component {
  static defaultProps = {
    className: 'app container-fluid p-0 row no-gutters d-flex',
  }

  render() {
    const { className } = this.props;

    return (
      <main className={className}>
        <Header />
        <div className="flex-fill">
          <Navbar />
          <Scene>
            <Route
              component={Transfer}
              exact
              path="/"
            />
            <Route
              component={Transfer}
              path="/transfer"
            />
            <Route
              component={TransactionHistory}
              path="/transactions"
            />
            <Route
              component={Permissions}
              path="/permissions"
            />
            <Route
              component={Profile}
              path="/user/:id"
            />
            <Route
              component={About}
              path="/about"
            />
            <Route
              component={Faqs}
              path="/faqs"
            />
            <Route
              component={Users}
              path="/users"
            />
            <Route
              component={Preferences}
              path="/preferences"
            />
            <Route
              component={NoMatch}
              path="*"
            />
            <Footer />
          </Scene>
        </div>
      </main>
    );
  }
}

export default App;
