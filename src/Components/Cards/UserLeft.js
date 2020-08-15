import React from 'react'

function UserLeft() {
    return (
        <div className='card'>
            <h2>
            WELCOME AGAIN!
            </h2>
            <p>
                Uninstalled by mistake, give us a try again have you checked 
                our header modifing feature? Install again? 
            </p>
            <div className='buttonContainer'>
            <button className='installButton'>No, Lets try.</button>
            <button className='installButton'>Yes, Install Again!</button>
            </div>
        </div>
    )
}

export default UserLeft
