import * as api from "../../services/api";

export const generateReport = (token, tuitionId, month, setError, setData) => {
    let data = [];

    api.generateReport(token, `/api/v1/report/get/${tuitionId}/${month}`).then(res => {
        setError(null);
        for (const st of res.data.data.paidReport.studentId) {
            data.push({
                studentId: st,
                status: 'PAID',
            });
        }
        for (const st of res.data.data.unpaidReport.studentId) {
            data.push({
                studentId: st,
                status: 'UNPAID',
            });
        }

        const promises = data.map(d => {
            return api.findStudentById(token,`/api/v1/student/get/${d.studentId}`).then(r => {
                return {
                    studentId: d.studentId,
                    name: r.data.data.username,
                    status: d.status,
                }
            });
        })

        Promise.all(promises).then(res => {
            setData(res);
        })
    }).catch(e => {
        setError(e);
    });
}

