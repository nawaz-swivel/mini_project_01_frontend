import * as types from "../../others/ActionType";
import * as api from "../../services/api";

export const removeStudentFromTuition = (studentId, tuitionId, dispatch, setError, setSuccess) => {
    api.removeStudentFromTuition(`/api/v1/student/remove/${studentId}/${tuitionId}`).then(res => {
        setSuccess(res.data.status);
        dispatch({
            type: types.REMOVE_TUITION_STUDENT,
            student: res.data.data,
        })}).catch(e => setError(e));
}
