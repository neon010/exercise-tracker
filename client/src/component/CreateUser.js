import React, {useState } from 'react';
import axios from "axios"


function CreateUser(){
    const [username, setUsername] = useState("");

    return (
        <div className="new-user">
            <h3>Create New User</h3>
            <form onSubmit={(event)=>{
                    event.preventDefault();
                    const user = {
                        username
                    }
                    axios.post('http://localhost:5000/users/add', user)
                        .then(res => console.log(res.data));
                    //console.log(user);
                }}> 
                <div className="form-group">
                    <label>User:</label>
                    <input type="text" required value={username} onChange={(event)=>setUsername(event.target.value)}/>
                </div>
                <div className="form-group">
                    <button type="submit">Create User</button>
                </div>
            </form>
        </div>
    )
};
export default CreateUser