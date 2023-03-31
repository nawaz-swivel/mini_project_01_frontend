import * as api from "../../services/api";

export const makeTuitionPayment = (token, studentId, tuitionId, month, setError, setSuccess) => {
    api.makeTuitionPayment(token, `/api/v1/payment/make`, {
        studentId,
        tuitionId,
        month
    }).then(res => {
        setSuccess(res.data.status);
    }).catch(e => setError(e));
}

