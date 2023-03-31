import {STUDENT_API} from "./student";
import {PAYMENT_API} from "./payment";
import {REPORTING_API} from "./reporting";
import AUTH_API from "./auth";
import {TUITION_API} from "./tuition";


export const login = async (url, body, params = null) => {
    let data;

    try {
        const response = await AUTH_API.post(url, body, { params: params });
        if (response.status === 200)
            data = response.data;
    } catch (e) {
        throw e.response.data;
    }

    return { data };
}

export const createStudent = async (token, url, body, params = null) => {
    let data;

    try {
        const response = await STUDENT_API(token).post(url, body, { params: params });
        if (response.status === 200)
            data = response.data;
    } catch (e) {
        throw e.response.data;
    }

    return { data };
}

export const createTuition = async (token, url, body, params = null) => {
    let data;

    try {
        const response = await TUITION_API(token).post(url, body, { params: params });
        if (response.status === 200)
            data = response.data;
    } catch (e) {
        throw e.response.data;
    }

    return { data };
}

export const addStudentToTuition = async (token, url, body = null, params = null) => {
    let data;

    try {
        const response = await TUITION_API(token).post(url, body, { params: params });
        if (response.status === 200)
            data = response.data;
    } catch (e) {
        throw e.response.data;
    }

    return { data };
}

export const removeStudentFromTuition = async (token, url, body = null, params = null) => {
    let data;

    try {
        const response = await TUITION_API(token).post(url, body, { params: params });
        if (response.status === 200)
            data = response.data;
    } catch (e) {
        throw e.response.data;
    }

    return { data };
}

export const makeTuitionPayment = async (token, url, body = null, params = null) => {
    let data;

    try {
        const response = await PAYMENT_API(token).post(url, body, { params: params });
        if (response.status === 200)
            data = response.data;
    } catch (e) {
        throw e.response.data;
    }

    return { data };
}

export const generateReport = async (token, url) => {
    let data;

    try {
        const response = await REPORTING_API(token).get(url);
        if (response.status === 200)
            data = response.data;
    } catch (e) {
        throw e.response.data;
    }

    return { data };
}

export const findStudentById = async (token, url) => {
    let data;

    try {
        const response = await STUDENT_API(token).get(url);
        if (response.status === 200)
            data = response.data;
    } catch (e) {
        throw e.response.data;
    }

    return { data };
}

export const deleteStudent = async (url, token) => {
    let data;

    try {
        const response = await STUDENT_API(token).delete(url);
        if (response.status === 200)
            data = response.data;
    } catch (e) {
        throw e.response.data;
    }

    return { data };
}

export const deleteTuition = async (token, url) => {
    let data;

    try {
        const response = await TUITION_API(token).delete(url);
        if (response.status === 200)
            data = response.data;
    } catch (e) {
        throw e.response.data;
    }

    return { data };
}
