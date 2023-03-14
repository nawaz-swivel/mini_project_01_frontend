import React, {useContext} from 'react';
import {AuthContext} from "../../others/Context";
import * as types from '../../others/ActionType';
import {Link, Navigate} from "react-router-dom";
import './styles.css';

const AdminDashboard = () => {
    const {auth, dispatch} = useContext(AuthContext);

    if (!auth.user) return (<Navigate to='/'/>);

    return (
        <div className='main-container'>
            <div className='main-heading'>
                <h3>ADMIN DASHBOARD</h3>
                <button className='btn btn-info' onClick={() => dispatch({type: types.LOGOUT})}>logout</button>
            </div>
            <div>
                <Link to='/tuition/create'>
                    <button className='btn btn-success'>Create Tuition</button>
                </Link>
            </div>
            <div>
                <Link to='/admin/tuition/remove'>
                    <button className='btn btn-danger'>Remove Tuition</button>
                </Link>
            </div>
            <div>
                <Link to='/admin/student/remove'>
                    <button className='btn btn-danger'>Remove Student</button>
                </Link>
            </div>
            <div>
                <Link to='/tuition/report'>
                    <button className='btn btn-primary'>Tuition Payment Report</button>
                </Link>
            </div>
        </div>
    )
};

export default AdminDashboard;
