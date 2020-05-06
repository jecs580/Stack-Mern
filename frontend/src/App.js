import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import './App.css';
import Navigation from './components/navigation';
import CreateNote from './components/createNote';
import CreateUser from './components/createUser';
import NotesList from './components/notesList';
function App() {
  return (
  <Router>
    <Navigation/>
    <Route path="/" component = {NotesList}/>
    <Route path="/edit/:id" component = {CreateNote}/>
    <Route path="/create" component = {CreateNote}/>
    <Route path="/user" component = {CreateUser}/>
  </Router>
  );
}

export default App;
