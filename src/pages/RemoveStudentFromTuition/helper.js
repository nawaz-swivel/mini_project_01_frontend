import * as api from "../../services/api";

export const removeStudentFromTuition = (token, studentId, tuitionId, setError, setSuccess) => {
    api.removeStudentFromTuition(token, `/api/v1/tuition/remove/student/${studentId}/tuition/${tuitionId}`).then(res => {
        setSuccess(res.data.status);
    }).catch(e => setError(e));
}
