import * as api from "../../services/api";

export const deleteStudent = (studentId, token, setError, setSuccess) => {
    api.deleteStudent(`/api/v1/student/delete/${studentId}`, token).then(res => {
        setSuccess(res.data.status);
    }).catch(e => setError(e));
}

