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
import AddStudentToTuition from "./pages/AddStudentToTuition";
import MakePayment from "./pages/MakePayment";
import TuitionReport from "./pages/TuitionReport";
import RemoveStudent from "./pages/RemoveStudent";
import RemoveTuition from "./pages/RemoveTuition";
import CreateStudent from "./pages/CreateStudent";
import RemoveStudentFromTuition from "./pages/RemoveStudentFromTuition";

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
                            path="/admin"
                            element={
                                <AdminDashboard/>
                            }
                        />
                        <Route
                            path="/admin/student/create"
                            element={
                                <CreateStudent/>
                            }
                        />
                        <Route
                            path="/admin/student/remove"
                            element={
                                <RemoveStudent/>
                            }
                        />
                        <Route
                            path="/admin/tuition/remove"
                            element={
                                <RemoveTuition/>
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
                            path="/admin/add/student"
                            element={
                                <AddStudentToTuition/>
                            }
                        />
                        <Route
                            path="/admin/remove/student"
                            element={
                                <RemoveStudentFromTuition/>
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
