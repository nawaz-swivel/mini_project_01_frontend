import React, {useContext, useState} from "react";
import {createStudent} from "./helper";
import {TokenContext} from "../../others/Context";

const CreateStudent = () => {
    const { token } = useContext(TokenContext);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [success, setSuccess] = useState(null);
    const [error, setError] = useState(null);

    return (
        <div>
            <h3>CREATE STUDENT</h3>
            <section className='mt-3'>
                <form>
                    <div className="form-group">
                        <label htmlFor="nameInput">Student Name</label>
                        <input type="text" className="form-control" id="nameInput" placeholder="Enter student name"
                               value={username} onChange={e => setUsername(e.target.value)}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="locationInput">Password</label>
                        <input type="text" className="form-control" id="locationInput" placeholder="Password"
                               value={password} onChange={e => setPassword(e.target.value)}/>
                    </div>
                    <button
                        style={{marginRight: 10}}
                        type="submit"
                        className="btn btn-success"
                        onClick={(e) => createStudent(e, token.token.data.access_token, username, password, setError, setSuccess)}
                    >
                        Create Student
                    </button>
                    {
                        success ? (
                            <p className='success-msg'>{success}</p>
                        ) : null
                    }
                    {
                        error ? (
                            <p className='error-msg'>{error.message}</p>
                        ) : null
                    }
                </form>
            </section>
        </div>
    );
};

export default CreateStudent;
