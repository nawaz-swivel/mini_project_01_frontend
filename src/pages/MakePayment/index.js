import React, {useContext, useState} from "react";
import {month as Month} from "../../others/Month";
import {StudentContext} from "../../others/Context";
import {makeTuitionPayment} from "./helper";

const MakePayment = () => {
    const {student, dispatch} = useContext(StudentContext);
    const [month, setMonth] = useState('');
    const [success, setSuccess] = useState(null);
    const [error, setError] = useState(null);

    return (
        <>
            <div>MAKE PAYMENT SCREEN</div>
            <select onChange={e => setMonth(e.target.value)}>
                <option value=''>Select a payment month</option>
                {
                    Month.map(m => (
                        <option key={m} value={m}>{m}</option>
                    ))
                }
            </select>
            <button
                disabled={!(month && student.student)}
                onClick={() => makeTuitionPayment(student.student.studentId, student.student.tuitionId, month,
                    dispatch, setError, setSuccess)}
            >Make Tuition Payment</button>
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
        </>
    )
}

export default MakePayment;
