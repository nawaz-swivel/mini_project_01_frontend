import REGISTRATION_API from "./registration";
import PAYMENT_API from "./payment";
import REPORTING_API from "./reporting";


export const login = async (url, body, params = null) => {
    let data;

    try {
        const response = await REGISTRATION_API.post(url, body, { params: params });
        if (response.status === 200)
            data = response.data;
    } catch (e) {
        throw e.response.data;
    }

    return { data };
}

export const createTuition = async (url, body, params = null) => {
    let data;

    try {
        const response = await REGISTRATION_API.post(url, body, { params: params });
        if (response.status === 200)
            data = response.data;
    } catch (e) {
        throw e.response.data;
    }

    return { data };
}

export const addStudentToTuition = async (url, body = null, params = null) => {
    let data;

    try {
        const response = await REGISTRATION_API.post(url, body, { params: params });
        if (response.status === 200)
            data = response.data;
    } catch (e) {
        throw e.response.data;
    }

    return { data };
}

export const removeStudentFromTuition = async (url, body = null, params = null) => {
    let data;

    try {
        const response = await REGISTRATION_API.post(url, body, { params: params });
        if (response.status === 200)
            data = response.data;
    } catch (e) {
        throw e.response.data;
    }

    return { data };
}

export const makeTuitionPayment = async (url, body = null, params = null) => {
    let data;

    try {
        const response = await PAYMENT_API.post(url, body, { params: params });
        if (response.status === 200)
            data = response.data;
    } catch (e) {
        throw e.response.data;
    }

    return { data };
}

export const generateReport = async (url) => {
    let data;

    try {
        const response = await REPORTING_API.get(url);
        if (response.status === 200)
            data = response.data;
    } catch (e) {
        throw e.response.data;
    }

    return { data };
}

export const findStudentById = async (url) => {
    let data;

    try {
        const response = await REGISTRATION_API.get(url);
        if (response.status === 200)
            data = response.data;
    } catch (e) {
        throw e.response.data;
    }

    return { data };
}

export const deleteStudent = async (url) => {
    let data;

    try {
        const response = await REGISTRATION_API.delete(url);
        if (response.status === 200)
            data = response.data;
    } catch (e) {
        throw e.response.data;
    }

    return { data };
}

export const deleteTuition = async (url) => {
    let data;

    try {
        const response = await REGISTRATION_API.delete(url);
        if (response.status === 200)
            data = response.data;
    } catch (e) {
        throw e.response.data;
    }

    return { data };
}
