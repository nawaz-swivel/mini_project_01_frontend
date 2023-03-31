import React, {useContext, useState} from "react";
import {deleteTuition} from "./helper";
import useStudentGetAll from "../../services/useStudentGetAll";
import useTuitionGetAll from "../../services/useTuitionGetAll";
import {TokenContext} from "../../others/Context";

const RemoveTuition = () => {
    const { token } = useContext(TokenContext);
    const {data, error: error2, loading} = useTuitionGetAll("/api/v1/tuition/get/all", token.token.data.access_token);
    const [selectedTuition, setSelectedTuition] = useState('');
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);

    return (
        <div className='main-container'>
            <div>
                <h3>REMOVE TUITION</h3>
                <div className='main-heading'>
                    <select className='main-select' onChange={e => setSelectedTuition(e.target.value)}>
                        <option value=''>Select a tuition</option>
                        {data && data.tuitionList.map((t) => (
                            <option key={t.tuitionId} value={t.tuitionId}>{t.name} - {t.location}</option>
                        ))}
                    </select>
                    <button className='btn btn-danger'
                        disabled={!selectedTuition}
                        onClick={() => deleteTuition(token.token.data.access_token, selectedTuition, setError, setSuccess)}
                    >Delete Tuition</button>
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

export default RemoveTuition;
