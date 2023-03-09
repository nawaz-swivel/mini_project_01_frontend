import React from "react";
import {CompactTable} from "@table-library/react-table-library/compact";
import './styles.css';

const Table = ({nodes}) => {

    const COLUMNS = [
        { label: 'Student Id', renderCell: (item) => item.studentId },
        { label: 'Student Name', renderCell: (item) => item.name },
        { label: 'Payment Status', renderCell: (item) => item.status },
    ];

    return (<CompactTable columns={COLUMNS} data={{nodes}} rowProps={{className: 'table-row'}} />)
}

export default Table;
