import * as api from "../../services/api";

export const deleteTuition = (tuitionId, setError, setSuccess) => {
    api.deleteTuition(`/api/v1/tuition/delete/${tuitionId}`).then(res => {
        setSuccess(res.data.status);
    }).catch(e => setError(e));
}

