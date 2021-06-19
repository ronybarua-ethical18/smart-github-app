import React, { Fragment } from 'react';
import './App.css';
import CollectionList from './Components/CollectionList/CollectionList';
import Login from './Components/Login/Login';
import firebase from "firebase/app";
import firebaseConfig from './firebase.config';
const App = () => {

  // initialize firebase
  if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig)
  }
  return (
    <Fragment>
      {/* <CollectionList /> */}
      <Login></Login>
    </Fragment>
  );
}

export default (App);
