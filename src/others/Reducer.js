import * as types from "./ActionType";

export const authReducer = (authState, action) => {
    switch (action.type) {
        case types.LOGIN:
            return { ...authState, user: action.user };
        case types.REGISTER:
            return {...authState, user: action.user}
        case types.LOGOUT:
            return { ...authState, user: null };
        default:
            throw new Error("Unhandled action type " + action.type);
    }
};

export const tuitionReducer = (tuitionState, action) => {
    switch (action.type) {
        case types.CREATE_TUITION:
            return { ...tuitionState, tuition: action.tuition };
        default:
            throw new Error("Unhandled action type " + action.type);
    }
};

export const studentReducer = (studentState, action) => {
    const newStudentState = {...studentState};

    switch (action.type) {
        case types.LOGIN_STUDENT:
            return {...studentState, student: action.student};
        case types.ADD_TUITION_STUDENT:
            newStudentState.student.tuitionId = action.student.tuitionId;
            newStudentState.student.tuitionJoinedOn = action.student.tuitionJoinedOn;
            return newStudentState;
        default:
            throw new Error("Unhandled action type " + action.type);
    }
}
