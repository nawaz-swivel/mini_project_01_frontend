import React, {useContext, useState} from "react";
import './styles.css';
import {AuthContext, StudentContext} from "../../others/Context";
import {register} from "./helper";
import {Link, Navigate} from "react-router-dom";

export default function Register() {
    const {auth, dispatch} = useContext(AuthContext);
    const {dispatch: studentDispatch} = useContext(StudentContext);
    const [error, setError] = useState(null);
    const [username, setUsername] = useState('');
    const [pwd, setPwd] = useState('');
    const [confirmPwd, setConfirmPwd] = useState('');

    if (auth.user) return <Navigate to='/' />

    return (
        <>
            <section>
                <p className="lead">Welcome!. Please register</p>
                <form>
                    <div className="form-group">
                        <label htmlFor="usernameInput">Username</label>
                        <input type="email" className="form-control" id="usernameInput" placeholder="Enter username"
                               value={username} onChange={e => setUsername(e.target.value)}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="passwordInput">Password</label>
                        <input type="password" className="form-control" id="passwordInput" placeholder="Password"
                               value={pwd} onChange={e => setPwd(e.target.value)}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="confirmpasswordInput">Confirm Password</label>
                        <input type="password" className="form-control" id="confirmpasswordInput" placeholder="Password"
                               value={confirmPwd} onChange={e => setConfirmPwd(e.target.value)}/>
                    </div>
                    <Link to='/login'>
                        <button style={{marginRight: 10}} type="text" className="btn btn-primary">Login</button>
                    </Link>
                    <button type="text" className="btn btn-primary"
                            onClick={(e) => register(e, username, pwd, dispatch, studentDispatch, setError)}
                            disabled={confirmPwd !== pwd}
                    >Register
                    </button>
                    {
                        error ? (
                            <p className='error-msg'>{error.message}</p>
                        ) : null
                    }
                </form>
            </section>
        </>
    );
}
