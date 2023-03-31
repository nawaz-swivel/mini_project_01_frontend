import React, {useContext, useState} from "react";
import {month as Month} from "../../others/Month";
import {TokenContext} from "../../others/Context";
import {makeTuitionPayment} from "./helper";
import useStudentGet from "../../services/useStudentGet";

const MakePayment = () => {
    const { token } = useContext(TokenContext);
    const {data, error: error1, loading} = useStudentGet(`/api/v1/student/auth/get/${token.token.data.data.userId}`, token.token.data.access_token)
    const [month, setMonth] = useState('');
    const [success, setSuccess] = useState(null);
    const [error, setError] = useState(null);

    return (
        <div className='main-container'>
            <div>
                <h3>MAKE PAYMENT SCREEN</h3>
                <div className='main-heading'>
                    <select className='main-select' onChange={e => setMonth(e.target.value)}>
                        <option value=''>Select a payment month</option>
                        {
                            Month.map(m => (
                                <option key={m} value={m}>{m}</option>
                            ))
                        }
                    </select>
                    <button className='btn btn-info'
                        disabled={!(month && data.studentId && data.tuitionId)}
                        onClick={() => makeTuitionPayment(token.token.data.access_token, data.studentId, data.tuitionId, month, setError, setSuccess)}
                    >Make Tuition Payment</button>
                </div>
            </div>
            {
                error ? (
                    <p className='error-msg'>{error.message}</p>
                ) : null
            }
            {
                success ? (
                    <p className='success-msg'>{success}</p>
                ) : null
            }
        </div>
    )
}

export default MakePayment;
