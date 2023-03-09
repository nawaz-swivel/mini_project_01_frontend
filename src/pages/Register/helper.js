import * as types from "../../others/ActionType";
import * as api from "../../services/api";

export const register = (e, username, pwd, dispatch, studentDispatch, setError) => {
    e.preventDefault();
    api.login("/api/v1/student/create", {
        name: username,
        password: pwd,
    }).then(res => {
        dispatch({
        type: types.REGISTER,
        user: res.data.data,
        });
        studentDispatch({
            type: types.LOGIN_STUDENT,
            student: res.data.data,
        })
    }).catch(e => setError(e));
}
