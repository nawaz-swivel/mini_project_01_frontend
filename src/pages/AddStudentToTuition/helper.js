import * as api from "../../services/api";

export const addStudentToTuition = (token, studentId, tuitionId, setError, setSuccess) => {
    api.addStudentToTuition(token, `/api/v1/tuition/add/student/${studentId}/tuition/${tuitionId}`).then(res => {
        setSuccess(res.data.status);
    }).catch(e => setError(e));
}

