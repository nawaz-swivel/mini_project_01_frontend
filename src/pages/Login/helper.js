import * as types from "../../others/ActionType";
import * as api from "../../services/api";

export const login = (e, username, pwd, dispatch, studentDispatch, setError) => {
    e.preventDefault();
    if (username === 'admin' && pwd === 'admin') {
        dispatch({
            type: types.LOGIN,
            user: {
                name: 'ADMIN',
            }
        })
    } else {
        api.login("/api/v1/student/login", {
            name: username,
            password: pwd,
        }).then(res => {
            dispatch({
            type: types.LOGIN,
            user: res.data.data,
            });
            studentDispatch({
                type: types.LOGIN_STUDENT,
                student: res.data.data,
            })
        }).catch(e => setError(e));
    }
}
