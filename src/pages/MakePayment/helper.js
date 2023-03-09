import * as api from "../../services/api";

export const makeTuitionPayment = (studentId, tuitionId, month, dispatch, setError, setSuccess) => {
    api.makeTuitionPayment(`/api/v1/payment/create`, {
        studentId,
        tuitionId,
        month
    }).then(res => {
        setSuccess(res.data.status);
    }).catch(e => setError(e));
}

