import "../css/Todos.css"

import React, { useEffect, useState } from 'react';
import axios from "axios";

function ListUser() {
    const [user, setUser] = useState("");
    const [users, setUsers] = useState([])

    useEffect(() => {
        axios.get('https://62c3a1ceabea8c085a5fe758.mockapi.io/user/users')
            .then(res => {
                // console.log(res)
                setUsers(res.data);
            })
            .catch(err => {
                // console.log(err)
            });
    }, [])

    const handleAddJob = (data) => {
        
        const config = {
            method: "post",
            url: "https://62c3a1ceabea8c085a5fe758.mockapi.io/user/users",
            name: user
        }
        // console.log(data)
        console.log(config)
        axios(config)
            .then(res => {
                console.log(res)
            }).catch(err => {
                console.log(err)
            });
            
    };

    return (
        <div>
             <input
              type="text"
              id="name"
              required
              value={user}
              onChange={(e) => setUser(e.target.value)}
            />
          
          <button onClick={handleAddJob} className="btn btn-success">
            Submit
          </button>
            <div>
                <ul>
                    {users.map(user => (
                        <li key={user.id} >{user.id} - {user.name}</li>
                    ))}
                </ul>
            </div>
        </div >
    );
}

export default ListUser;