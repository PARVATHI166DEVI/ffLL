import React from 'react'

function Activity() {
    return (
        <div style = {{  
        borderRadius : "10px",
        border  : "1px solid grey",
        padding : "20px",
        backgroundColor : "white"
        }}
        >
            <div style={{fontSize : "15px"}}>Recent</div>
            <div className='recent-activity'
            style = {{
                display : "flex",
                flexDirection : "column",
                alignItems : "flex-start",
            }}
            >
                <div>
                   # Referaal for Job Seekers
                </div>
                <div>
                    # hastagteamwork
                </div>
                <div>
                   # GeeksforGeeks
                </div>
                <div>
                   # hastagteamwork
                </div>
            </div>
        </div>
    )
}

export default Activity
