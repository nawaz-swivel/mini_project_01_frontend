import React, {useContext, useState} from "react";
import {StudentContext, TokenContext} from "../../others/Context";
import {removeStudentFromTuition} from "./helper";
import {addStudentToTuition} from "../AddStudentToTuition/helper";
import useTuitionGetAll from "../../services/useTuitionGetAll";
import useStudentGetAll from "../../services/useStudentGetAll";

const RemoveStudentFromTuition = () => {
    const { token } = useContext(TokenContext);
    const {data: tuition, error: error2, loading} = useTuitionGetAll("/api/v1/tuition/get/all", token.token.data.access_token);
    const {data: student, error: error3, loading2} = useStudentGetAll("/api/v1/student/get/all", token.token.data.access_token);
    const [selectedStudent, setSelectedStudent] = useState('');
    const [selectedTuition, setSelectedTuition] = useState('');
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);

    return (
        <div className='main-container'>
            <div>
                <h3>REMOVE STUDENT FROM TUITION</h3>
                <div className='main-heading'>
                    <select className='main-select' onChange={e => setSelectedTuition(e.target.value)}>
                        <option value=''>Select a tuition</option>
                        {tuition && tuition.tuitionList.map((t) => (
                            <option key={t.tuitionId} value={t.tuitionId}>{t.name} - {t.location}</option>
                        ))}
                    </select>
                    <select className='main-select' onChange={e => setSelectedStudent(e.target.value)}>
                        <option value=''>Select a student</option>
                        {student && student.students.map((s) => (
                            <option key={s.studentId} value={s.studentId}>{s.username}</option>
                        ))}
                    </select>
                    <button className='btn btn-success'
                            disabled={!(selectedTuition && selectedStudent)}
                            onClick={() => removeStudentFromTuition(token.token.data.access_token, selectedStudent, selectedTuition, setError, setSuccess)}
                    >Remove student from tuition
                    </button>
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
};

export default RemoveStudentFromTuition;
