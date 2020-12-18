import React from "react"
import {BrowserRouter as Router, Route} from "react-router-dom"
import './App.css';
import Navbar from "./component/Navbar";
import ExerciseList from "./component/ExerciseList";
import EditExercise from "./component/EditExercise";
import CreateExercise from "./component/CreateExercise";
import CreateUser from "./component/CreateUser";

function App() {
  return (
    <Router>
      <Navbar />
      <br/>
      <Route path="/" exact component={ExerciseList}/>
      <Route path="/edit/:id" exact component={EditExercise}/>
      <Route path="/create" exact component={CreateExercise}/>
      <Route path="/user" exact component={CreateUser}/>
    </Router>
  );
}

export default App;
