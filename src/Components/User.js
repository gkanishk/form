import React from 'react'
import image from '../assests/download.png'
import UserLeft from './Cards/UserLeft'
import UserRight from './Cards/UserRight'
function User() {
    return (
        <div className='Container'>
            <img src={image} className='imageLogo' alt='User logo' />
            <div className='leftCard'>
                <UserLeft/>
            </div>
            <div className='rightCard'>
                <UserRight/>
            </div>
        </div>
    )
}

export default User
