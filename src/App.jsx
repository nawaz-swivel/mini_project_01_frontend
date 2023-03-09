import React from "react";
import "./styles/App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import {Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import CreateTuition from "./pages/CreateTuition";
import AdminDashboard from "./pages/AdminDashboard";
import StudentDashboard from "./pages/StudentDashboard";
import Login from "./pages/Login";
import Register from "./pages/Register";
import EnrollToTuition from "./pages/EnrollToTuition";
import MakePayment from "./pages/MakePayment";
import TuitionReport from "./pages/TuitionReport";

export default function App() {
    return (
        <>
            <div className="content">
                <Header />
                <main>
                    <Routes>
                        <Route
                            path="/"
                            element={
                                <>
                                    <Home/>
                                </>
                            }
                        />
                        <Route
                            path="/login"
                            element={
                                <>
                                    <Login/>
                                </>
                            }
                        />
                        <Route
                            path="/register"
                            element={
                                <>
                                    <Register/>
                                </>
                            }
                        />
                        <Route
                            path="/admin"
                            element={

                                <AdminDashboard/>

                            }
                        />
                        <Route
                            path="/student"
                            element={

                                <StudentDashboard/>

                            }
                        />
                        <Route
                            path="/tuition/create"
                            element={
                                <CreateTuition/>
                            }
                        />
                        <Route
                            path="/tuition/report"
                            element={
                                <TuitionReport/>
                            }
                        />
                        <Route
                            path="/student/class/enroll"
                            element={
                                <EnrollToTuition/>
                            }
                        />
                        <Route
                            path="/student/payment/make"
                            element={
                                <MakePayment/>
                            }
                        />
                    </Routes>
                </main>
            </div>
            <Footer/>
        </>
    );
}
