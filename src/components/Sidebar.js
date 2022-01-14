import React from 'react'
import Activity from './Activity'
import ProfileCard from './ProfileCard'

function Sidebar({width}) {
    return (
        <div style = {{flex : width}}
        >
            <ProfileCard/>
            <div style = {{margin:"10px 0"}}></div>
            <Activity/>

        </div>
    )
}

export default Sidebar