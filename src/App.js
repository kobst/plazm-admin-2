import logo from './logo.svg';
import './App.css';
import '@aws-amplify/ui-react/styles.css';
import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

import './App.css';

import React, { useState } from "react";
// import { Router, Route, Routes, Redirect } from 'react-router-dom';
import { Switch } from "react-router";



import SearchForm from './components/SearchForm';
import DetailsPage from './components/DetailsPage';
import RoutesMap from './Routes'
import { Amplify } from 'aws-amplify';
import awsExports from './aws-exports';
Amplify.configure(awsExports);

function App({ signOut, user }) {

  return (
    <div className="App">
      <header className="header">
      <h4 >plazm admin</h4>
      <button className="sign-out" onClick={signOut}>Sign out</button>
      </header>
      <div>
      <RoutesMap/>

      </div>
    // </div>
  );
}

export default withAuthenticator(App);
