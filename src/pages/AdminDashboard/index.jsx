import React, {useContext} from 'react';
import {AuthContext} from "../../others/Context";
import * as types from '../../others/ActionType';
import {Link, Navigate} from "react-router-dom";

const AdminDashboard = () => {
    const {auth, dispatch} = useContext(AuthContext);

    if (!auth.user) return (<Navigate to='/' />);

    return (
            <div>
                ADMIN DASHBOARD
                <button onClick={() => dispatch({type: types.LOGOUT})}>logout</button>
                <Link to='/tuition/create'><button>Create Tuition</button></Link>
                <Link to='/tuition/report'><button>Tuition Payment Report</button></Link>
            </div>
    )
};

export default AdminDashboard;
