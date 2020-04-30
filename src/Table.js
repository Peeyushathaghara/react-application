import React, { Component } from 'react'

class Table extends Component {
    render() {
        const characters = this.props
        return (
            <table className='table table-striped table-bordered'>
                <TableHeader />
                <TableBody characters={characters} />
            </table>
        )
    }
}

const TableHeader = () => {
    return (
        <thead>
            <tr>
                <th>Name</th>
                <th>Job</th>
            </tr>
        </thead>
    )
}

const TableBody = props => {
    // props.characters.
    const rows = props.characters.map((row, index) => {
        return (
            <tr key={index}>
                <td>{row.name}</td>
                <td>{row.job}</td>
            </tr>
        )
    })

    return <tbody>{rows}</tbody>
}
export default Table