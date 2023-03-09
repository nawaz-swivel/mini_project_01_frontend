import React, {useContext} from 'react';
import * as types from "../../others/ActionType";
import {AuthContext} from "../../others/Context";
import {Link, Navigate} from "react-router-dom";
import './styles.css';

const StudentDashboard = () => {
    const {auth, dispatch} = useContext(AuthContext);

    if (!auth.user) return (<Navigate to='/'/>);

    return (
        <div>
            HI WELCOME MR. {auth.user.name.toUpperCase()}
            <button onClick={() => dispatch({type: types.LOGOUT})}>logout</button>
            <Link to='/student/class/enroll'>
                <button>Enroll into class</button>
            </Link>
            <Link to='/student/payment/make'>
                <button>Make class payment</button>
            </Link>
        </div>
    )
};

export default StudentDashboard;
