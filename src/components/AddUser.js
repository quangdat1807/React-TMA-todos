import React, { useState } from 'react'
import axios from 'axios';
function AddUser() {
    const [user, setUser] = useState([]);
    const [submitted, setSubmitted] = useState(false);
    
    const handleAddJob = (data) => {
        axios.post('https://62c3a1ceabea8c085a5fe758.mockapi.io/user/users')
         .then(res => {
            setUser()
         }
    )};
  return (
    <div className="submit-form">
      {submitted ? (
        <div>
          <h4>You submitted successfully!</h4>
          <button className="btn btn-success" >
            Add
          </button>
        </div>
      ) : (
        <div>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              className="form-control"
              id="name"
              required
              value={user}
              onChange={(e) => setUser(e.target.value)}
              name="name"
            />
          </div>
          
          <button onClick={handleAddJob} className="btn btn-success">
            Submit
          </button>
        </div>
      )}
    </div>
  )
}

export default AddUser