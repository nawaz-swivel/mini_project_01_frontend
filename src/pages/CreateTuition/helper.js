import * as types from "../../others/ActionType";
import * as api from "../../services/api";

export const createTuition = (e, token, name, location, dispatch, setError, setSuccess) => {
    e.preventDefault();
    api.createTuition(token, "/api/v1/tuition", {
        name: name,
        location: location,
    }).then(res => {
        setSuccess(res.data.status);
        dispatch({
        type: types.CREATE_TUITION,
        tuition: res.data.data,
    })}).catch(e => setError(e));
}
