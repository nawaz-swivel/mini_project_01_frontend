import * as types from "../../others/ActionType";
import * as api from "../../services/api";

export const createTuition = (e, name, location, dispatch, setError, setSuccess) => {
    e.preventDefault();
    api.createTuition("/api/v1/tuition/create", {
        name: name,
        location: location,
    }).then(res => {
        setSuccess(res.data.status);
        dispatch({
        type: types.CREATE_TUITION,
        tuition: res.data.data,
    })}).catch(e => setError(e));
}
