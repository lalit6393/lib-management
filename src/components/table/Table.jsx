import React from 'react'

const Table = ({ tableFields = [], data = [], onRowClick = null}) => {
    return (
        <>
            <table className="table table-bordered table-striped text-center">
                <thead>
                    <tr>
                        {
                            tableFields.map((column, idx) => <th key={idx}>{column?.heading || `Column ${idx + 1}`}</th>)
                        }
                    </tr>
                </thead>
                <tbody>
                    {data.length === 0 ?
                        <tr>
                            <td colSpan={tableFields.length}>No data found!</td>
                        </tr>
                        :
                        <>
                            {data?.map((row, idx) => (
                                <tr
                                    key={row?.id || idx}
                                    onClick={onRowClick ? () => onRowClick(row) : undefined}
                                    role='button'
                                >
                                    {
                                        tableFields.map((column, idx) => <td key={idx}>{row[column?.fieldName] || `Column ${idx + 1}`}</td>)
                                    }
                                </tr>
                            ))}
                        </>
                    }
                </tbody>
            </table>
        </>
    )
}

export default Table
