import React, { useEffect, useState } from 'react';
import axios from "axios";
import Exercise from "./Exercise"

function ExerciseList(){
    const [exercises, setExercises] = useState([]);

    useEffect(()=>{
        axios.get("http://localhost:5000/exercises/")
             .then((res)=>  setExercises(res.data))
             .catch((err)=>{console.log(err)});
    }, []);

    function deleteExercise(id){
        axios.delete('http://localhost:5000/exercises/'+id)
        .then(response => { return response.data});
  
        setExercises(exercises.filter(el => el._id !== id))
    };

    return (
        <div>
            <h3>Logged Exercises</h3>
            <table className="table">
            <thead className="thead-light">
                <tr>
                    <th>Username</th>
                    <th>Description</th>
                    <th>Duration</th>
                    <th>Date</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {exercises.map((currentExercise)=>{
                    return <Exercise exercise={currentExercise} key={currentExercise._id} deleteExercise={deleteExercise} />
                })}
            </tbody>
            </table>
        </div>
    )
};

export default ExerciseList;