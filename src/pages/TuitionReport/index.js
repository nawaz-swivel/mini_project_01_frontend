import React, {useState} from "react";
import {month as Month} from "../../others/Month";
import useRegGetAll from "../../services/useRegGetAll";
import {generateReport} from "./helper";
import Table from "../../components/Table";

const TuitionReport = () => {
    const [data, setData] = useState([]);
    const {data: tuitionList, error: error2, loading} = useRegGetAll("/api/v1/tuition/get/all");
    const [month, setMonth] = useState('');
    const [selectedTuition, setSelectedTuition] = useState('');
    const [error, setError] = useState(null);

    return (
        <>
            <div>TUITION PAYMENT REPORT</div>
            <select onChange={e => setMonth(e.target.value)}>
                <option value=''>Select a month</option>
                {
                    Month.map(m => (
                        <option key={m} value={m}>{m}</option>
                    ))
                }
            </select>
            <select onChange={e => setSelectedTuition(e.target.value)}>
                <option value=''>Select a tuition</option>
                {tuitionList && tuitionList.tuitionList.map((t) => (
                    <option key={t.tuitionId} value={t.tuitionId}>{t.name} - {t.location}</option>
                ))}
            </select>
            <button
                disabled={!(selectedTuition && month)}
                onClick={() => generateReport(selectedTuition, month, setError, setData)}
            >Generate Report
            </button>
            <Table nodes={data}/>
            {
                error ? (
                    <p className='error-msg'>{error.message}</p>
                ) : null
            }
        </>
    );
};

export default TuitionReport;