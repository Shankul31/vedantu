import React, { useContext } from 'react'
import { UserContext } from '../userContext/UserContext'

export const UserProfile = () => {
    let profileData = useContext(UserContext)
    console.log('profile', profileData)
    return (
        <div className="container">
            <img src={profileData.state.avatar_url} alt="" style={{ height: '260px', width: '260px' }} />
            <h1>{profileData.state.name}</h1>
            <span className="">{profileData.state.login}</span>
            <p>{profileData.state.bio}</p>
            <button className='btn btn-primary mt-2' style={{ width: '260px', color: 'black', backgroundColor: '#eff3f6' }}>
                Edit Info
                    </button>
            <hr style={{ width: '260px', marginLeft:'0em'}} />
            <p>
                {profileData.state.company}
            </p>
            <span>
                <i class="fas fa-map-marker-alt"></i>
                {profileData.state.location}
            </span>
            <p>{profileData.state.email}</p>



        </div>
    )
}
