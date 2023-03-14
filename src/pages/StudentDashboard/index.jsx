import React, {useContext} from 'react';
import * as types from "../../others/ActionType";
import {AuthContext} from "../../others/Context";
import {Link, Navigate} from "react-router-dom";
import './styles.css';

const StudentDashboard = () => {
    const {auth, dispatch} = useContext(AuthContext);

    if (!auth.user) return (<Navigate to='/'/>);

    return (
        <div className='main-container'>
            <div className='main-heading'>
                <h3>HI WELCOME MR. {auth.user.name.toUpperCase()}</h3>
                <button className='btn btn-info' onClick={() => dispatch({type: types.LOGOUT})}>logout</button>
            </div>
            <div>
                <Link to='/student/class/enroll'>
                    <button className='btn btn-primary'>Enroll into class</button>
                </Link>
            </div>
            <div>
                <Link to='/student/payment/make'>
                    <button className='btn btn-success'>Make class payment</button>
                </Link>
            </div>
            <div>
                <Link to='/student/class/unenroll'>
                    <button className='btn btn-danger'>Unenrol from class</button>
                </Link>
            </div>
        </div>
    )
};

export default StudentDashboard;
