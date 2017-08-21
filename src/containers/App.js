import React, { Component } from 'react';
import { Route } from 'react-router';
import { Helmet } from 'react-helmet';
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
import Modal from 'react-modal';
import Login from './Login';

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
    const { className, isOpen } = this.props;

    return (
      <main className={className}>
        <Helmet titleTemplate="%s | EOS Wallet" defaultTitle="EOS Wallet" />

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
        <Modal
          isOpen={isOpen}
        >
          <Login />
        </Modal>
      </main>
    );
  }
}

export default App;
