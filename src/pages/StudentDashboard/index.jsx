import React, {useContext} from 'react';
import * as types from "../../others/ActionType";
import {TokenContext} from "../../others/Context";
import {Link, Navigate} from "react-router-dom";
import './styles.css';

const StudentDashboard = () => {
    const {token, dispatch} = useContext(TokenContext);

    if (!token.token) return (<Navigate to='/'/>);

    return (
        <div className='main-container'>
            <div className='main-heading'>
                <h3>HI WELCOME MR. {token.token.data.data.username}</h3>
                <button className='btn btn-info' onClick={() => dispatch({type: types.LOGOUT})}>logout</button>
            </div>
            <div>
                <Link to='/student/payment/make'>
                    <button className='btn btn-success'>Make class payment</button>
                </Link>
            </div>
        </div>
    )
};

export default StudentDashboard;
