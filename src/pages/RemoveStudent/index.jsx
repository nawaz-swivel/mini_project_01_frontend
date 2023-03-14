import React, {useState} from "react";
import useRegGetAll from "../../services/useRegGetAll";
import {deleteStudent} from "./helper";
import './style.css';

const   RemoveStudent = () => {
    const {data, error: error2, loading} = useRegGetAll("/api/v1/student/get/all");
    const [selectedStudent, setSelectedStudent] = useState('');
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);

    return (
        <div className='main-container'>
            <div>
                <h3>REMOVE STUDENT</h3>
                <div className='main-heading'>
                    <select className='main-select' onChange={e => setSelectedStudent(e.target.value)}>
                        <option value=''>Select a student</option>
                        {data && data.students.map((s) => (
                            <option key={s.studentId} value={s.studentId}>{s.name}</option>
                        ))}
                    </select>
                    <button className='btn btn-danger'
                            disabled={!selectedStudent}
                            onClick={() => deleteStudent(selectedStudent, setError, setSuccess)}
                    >Delete Student</button>
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

export default RemoveStudent;
