import React, {useEffect, useState } from 'react';
import axios from "axios";
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

function CreateExercise(){
    const [username, setUserName] = useState("");
    const [description, setDescription] = useState("");
    const [duration, setDuration] = useState(0);
    const [date, setDate] = useState(Date.now());
    const [users, setUsers] = useState(["test1", "test2"]);


    useEffect(()=>{
        axios.get('http://localhost:5000/users/')
             .then(response => {
             if (response.data.length > 0) {
                setUsers(response.data.map(user => user.username))
             }
             })
            .catch((error) => {
             console.log(error);
             })
    }, [])
    return (
        <div className="exercise-log">
            <div className="title">
                <h3>Create a new Exercise log</h3>
            </div>
            <form className="exrcise-form" onSubmit={(event)=>{
                  event.preventDefault();
                  const exercise = {
                      username,
                      description,
                      duration,
                      date
                  }
                  axios.post('http://localhost:5000/exercises/add', exercise)
                        .then(res => console.log(res.data));
                  window.location = '/';
                    }}>
                <div className="form-group">
                    <label>username:</label>
                    <select value={username} onChange={(event)=>setUserName(event.target.value)}>
                        {users.map((user)=>{ return <option value={user} key={user}>{user}</option>})}
                    </select>
                </div>
                <div className="form-group">
                    <label>Description:</label>
                    <input type="text"
                            required 
                            min="0"
                            value={description}
                            onChange={(event)=> setDescription(event.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label>Duration:</label>
                    <input type="number" 
                           value={duration}
                           onChange={(event)=> setDuration(event.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label>Date:</label>
                    <br/>
                    <div className="date">
                        <DatePicker selected={date} 
                                    onChange={(date) =>{setDate(date)}}
                        />
                    </div>
                </div>
                <div className="form-group">
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    )
};

export default CreateExercise;