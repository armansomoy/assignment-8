import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from './components/Header/Header';
import NoMatch from './components/NoMatch/NoMatch';
import Home from './components/Home/Home';
import PostDetail from './components/PostDetail/PostDetail';

function App() {
  return (
    <div>
      <Router>
         <Header></Header> 
         <Switch>
           <Route path="/home">
             <Home></Home>
           </Route>
           <Route exact path="/post/:postId">
             <PostDetail></PostDetail>
           </Route>
           <Route exact path="/">
             <Home></Home>
           </Route>
           <Route path="*">
             <NoMatch></NoMatch>
           </Route>
         </Switch>
      </Router>
    </div>
  );
}

export default App;
