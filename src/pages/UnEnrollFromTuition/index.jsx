import React, {useContext, useState} from "react";
import {StudentContext} from "../../others/Context";
import {removeStudentFromTuition} from "./helper";

const UnEnrollFromTuition = () => {
    const {student, dispatch} = useContext(StudentContext);
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);

    return (
        <>
            <div><h3>UN ENROLL FROM TUITION</h3></div>
            <button className='btn btn-danger'
                disabled={!student.student.tuitionId}
                onClick={() => removeStudentFromTuition(student.student.studentId, student.student.tuitionId, dispatch,
                    setError, setSuccess)}
            >UnEnroll from tuition</button>
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
};

export default UnEnrollFromTuition;
