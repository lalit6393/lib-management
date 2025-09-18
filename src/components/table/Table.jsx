import React from 'react'
import { Link } from 'react-router-dom'

const Table = ({ tableFields = [], data = [], onRowClick = null }) => {
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
                                    role={onRowClick ? "button" : undefined}
                                >
                                    {
                                        tableFields.map((column, idx) => {
                                            if (column?.fieldType && column.fieldType === 'link')
                                                return <td key={idx}>
                                                    <Link className='link-primary' to={`${column?.base}/${row[column?.param]}`}>{column?.fieldName || 'View'}</Link>
                                                </td>
                                            else
                                                return <td key={idx}>{row[column?.fieldName] || `Column ${idx + 1}`}</td>
                                        })
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
