import React from "react";
import "./styles/index.css";
import App from "./App";
import ErrorBoundary from "./others/ErrorBoundary";
import { BrowserRouter } from "react-router-dom";
import {AppContextProvider, AuthProvider} from "./others/Context";
import {createRoot} from "react-dom/client";


const domNode = document.getElementById("root");
const root = createRoot(domNode);

root.render(
    <ErrorBoundary>
        <BrowserRouter>
            <AppContextProvider>
                <App />
            </AppContextProvider>
        </BrowserRouter>
    </ErrorBoundary>
);
