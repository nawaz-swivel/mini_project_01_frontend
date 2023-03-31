import React, {useMemo, useReducer} from "react";
import {authReducer, studentReducer, tokenReducer, tuitionReducer} from "./Reducer";
import {CombineComponents} from "./CombineComponents";

// app context
const providers = [
    TokenProvider,
    AuthProvider,
    TuitionProvider,
    StudentProvider,
];

export const AppContextProvider = CombineComponents(...providers);

// token context
export const TokenContext = React.createContext(null);

let initialTokenState = { token: null }

export function TokenProvider(props) {
    const [token, dispatch] = useReducer(tokenReducer, initialTokenState);
    const tokenProviderValue = useMemo(() => ({token, dispatch}), [token, dispatch]);

    return (
        <TokenContext.Provider value={tokenProviderValue}>
            {props.children}
        </TokenContext.Provider>
    )
}

// auth context
export const AuthContext = React.createContext(null);

let initialAuthState = {
    user: null,
}

export function AuthProvider(props) {
    const [auth, dispatch] = useReducer(authReducer, initialAuthState);
    const authProviderValue = useMemo(() => ({auth, dispatch}),[auth, dispatch]);

    return (
        <AuthContext.Provider value={authProviderValue}>
            {props.children}
        </AuthContext.Provider>
    )
}

// tuition context
export const TuitionContext = React.createContext(null);

let initialTuitionState = {
    tuition: null,
}

export function TuitionProvider(props) {
    const [tuition, dispatch] = useReducer(tuitionReducer, initialTuitionState);
    const tuitionProviderValue = useMemo(() => ({tuition, dispatch}),[tuition, dispatch]);

    return (
        <TuitionContext.Provider value={tuitionProviderValue}>
            {props.children}
        </TuitionContext.Provider>
    )
}

// student context
export const StudentContext = React.createContext(null);
let initialStudentState = {student: null}
export function StudentProvider(props) {
    const [student, dispatch] = useReducer(studentReducer, initialStudentState);
    const studentProviderValue = useMemo(() => ({student, dispatch}), [student, dispatch]);

    return (
        <StudentContext.Provider value={studentProviderValue}>
            {props.children}
        </StudentContext.Provider>
    )
}
