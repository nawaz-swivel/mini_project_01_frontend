import React, {useContext} from "react";
import './styles.css';
import {AuthContext, TokenContext} from "../../others/Context";
import {Navigate} from "react-router-dom";

export default function Home() {
    const { token } = useContext(TokenContext);

    if (!token.token) return <Navigate to='/login' />

    return (
        <>
            <section>
                {/*<h1 className='heading'>Welcome. {token.token.data.username}</h1>*/}
                {
                    token.token.data.data.role === 'ADMIN' ? (
                        <Navigate to="/admin" />
                    ) : (
                        <Navigate to="/student" />
                    )
                }
            </section>
            <h1>Home</h1>
        </>
    );
}
