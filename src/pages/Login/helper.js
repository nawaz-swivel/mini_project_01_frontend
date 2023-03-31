import * as types from "../../others/ActionType";
import * as api from "../../services/api";

export const login = (e, username, pwd, dispatch, setError) => {
    let details = {
        'grant_type': 'password',
        'username': username,
        'password': pwd
    };
    let formBody = [];
    for (let property in details) {
        let encodedKey = encodeURIComponent(property);
        let encodedValue = encodeURIComponent(details[property]);
        formBody.push(encodedKey + "=" + encodedValue);
    }
    formBody = formBody.join("&");

    e.preventDefault();
    api.login("/oauth/token", formBody).then(res => {
        dispatch({
            type: types.LOGIN,
            token: res,
        });
    }).catch(e => setError(e));
}
