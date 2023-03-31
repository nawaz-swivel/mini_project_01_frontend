import * as api from "../../services/api";

export const createStudent = (e, token, username, password, setError, setSuccess) => {
    e.preventDefault();
    api.createStudent(token, "/api/v1/student", {
        username: username,
        password: password,
    }).then(res => setSuccess(res.data.status))
        .catch(e => setError(e));
}
