// import React, { useRef, useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import HomePage from './pages/HomePage/HomePage';

import SinglePage from './pages/SinglePage/SinglePage';
import TopPage from './pages/TopPage/TopPage'
import FormPage from './pages/FormPage/FormPage'
import ChartPage from './pages/ChartPage/ChartPage'
import ChatPage from './pages/ChatPage/ChatPage'
import Form from './pages/Form/Form'



// import firebase from 'firebase/app';
// import 'firebase/firestore';
// import 'firebase/auth';
// import 'firebase/analytics';

// import { useAuthState } from 'react-firebase-hooks/auth';
// import { useCollectionData } from 'react-firebase-hooks/firestore';

// firebase.initializeApp({
//   // your config
// })

// const auth = firebase.auth();
// const firestore = firebase.firestore();
// const analytics = firebase.analytics();


function App() {

  

  return (
    <>
    <div className="App">
      

      


      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/single" component={SinglePage}/>
          <Route path="/top" component={TopPage}/>
          <Route path="/form" component={FormPage}/>
          <Route path="/chart" component={ChartPage}/>
          <Route path="/formpage" component={Form}/>
          <Route path="/chat" component={ChatPage}/>
        </Switch>
       </Router>



    </div>

    </>
  );
}


export default App;

