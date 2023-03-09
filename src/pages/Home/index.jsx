import React, {useContext} from "react";
import './styles.css';
import {AuthContext} from "../../others/Context";
import {Navigate} from "react-router-dom";

export default function Home() {
    const { auth } = useContext(AuthContext);

    if (!auth.user) return <Navigate to='/login' />

    return (
        <>
            <section>
                <h1 className='heading'>Welcome. {auth.user.name}</h1>
                {
                    auth.user.name === 'ADMIN' ? (
                        <Navigate to="/admin" />
                    ) : (
                        <Navigate to="/student" />
                    )
                }
            </section>
        </>
    );
}
