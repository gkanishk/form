import React from 'react'
import {Link} from 'react-router-dom'

function Main() {
    return (
        <div>
            <h2>Main page</h2>
            <nav>
            <ul>
                <li>
                <Link to="/user">User</Link>
                </li>
                <li>
                <Link to="/admin">Admin</Link>
                </li>
            </ul>
            </nav>
        </div>
    )
}

export default Main
