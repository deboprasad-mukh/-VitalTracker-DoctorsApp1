import React from 'react'
import { Link } from 'react-router-dom'

export default function Page() {
    return (
        <div>
            <button ><Link to="/adddoctor">add doctor</Link></button>
            <button><Link to="/editdoctor">edit doctor</Link></button>
            <button><Link to="/addpatient">add patient</Link></button>
            <button><Link to="/editpatient">edit patient</Link></button>
        </div>
    )
}
