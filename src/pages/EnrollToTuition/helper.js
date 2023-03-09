import * as types from "../../others/ActionType";
import * as api from "../../services/api";

export const addStudentToTuition = (studentId, tuitionId, dispatch, setError, setSuccess) => {
    api.addStudentToTuition(`/api/v1/student/add/${studentId}/${tuitionId}`).then(res => {
        setSuccess(res.data.status);
        dispatch({
            type: types.ADD_TUITION_STUDENT,
            student: res.data.data,
        })}).catch(e => setError(e));
}

