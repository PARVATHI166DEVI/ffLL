import React from 'react'
import Sidebar from '../components/Sidebar'
import Feed from '../components/Feed'
import PromotionBar from '../components/PromotionBar'

function Home() {
    return (
        <div style={{
            backgroundColor : "rgb(248,247,244)",
            display : "flex",
            justifyContent : "center",
            alignItems : "start",
            padding : "25px"
        }}
    >
            <Sidebar width = {0.17}/>
            <Feed width = {0.5}/>
            <PromotionBar width = {0.2}/>
        </div>
    )
}

export default Home
