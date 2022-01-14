import React from 'react'
import {useState} from 'react'

function PromotionBar({width}) {
    const[showMore,setShowMore] = useState(false);
    return (
            <div style = {{  
                borderRadius : "10px",
                border  : "1px solid grey",
                padding : "10px",
                flex : width,
                backgroundColor : "white"
        }}
        >
            <div style={{fontSize : "15px",marginTop:"20px",marginLeft:"15px",fontWeight:"600"}}>Linkedin News</div>
            <div className='recent-activity'
            style = {{
                display : "flex",
                flexDirection : "column",
                alignItems : "flex-start",
                padding:"20px"
            }}
            >
                    <div>
                        Why Referral for Job Seekers
                    </div>
                    <div>
                        hello hastagteamwork
                    </div>
                    <div>
                        GeeksforGeeks
                    </div>
                    <div>
                        hastagteamwork
                    </div>
                <button style = {{outline: "none",border : "none",padding:"5px",marginTop:"10px"}}
                    onClick={()=>setShowMore(!showMore)}
                >   
                    {showMore==false ? "show more" : "hide"}
                </button>
                <div className="show more contents" style = {{
                    display : `${showMore ? "block": "none"}`
                }}>
                    <div>
                        Why Referral for Job Seekers
                    </div>
                    <div>
                        hello hastagteamwork
                    </div>
                    <div>
                        GeeksforGeeks
                    </div>
                    <div>
                        hastagteamwork
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PromotionBar
