import { Directions } from '@mui/icons-material'
import { Avatar } from '@mui/material'
import React from 'react'

export default function ProfileCard() {
    return (
        <div 
        style = {{
            backgroundColor : "white",
            borderRadius : "10px",
            display : "flex",
            flexDirection : "column",
            alignItems : "center",
            border  : "1px solid grey",
            padding : "25px 0px",
            position : "relative"
        }}
        >
            <div style={{height:"60px",background : "rgb(191,204,207)",width:"100%",position:"absolute",top:0,borderRadius:"10px 10px 0px 0px"}}>

            </div>
            <Avatar src="https://media-exp1.licdn.com/dms/image/C5603AQEZHMNB_lRQig/profile-displayphoto-shrink_100_100/0/1612844624764?e=1646870400&v=beta&t=sfj0tzvh_FY2i9J7Rf-ylP9seAm0za3Nk9yM2hj7Fkg"
            style={{height:"70px",width:"70px",border:"1px solid grey"}}/>
            <div
            style = {{
                fontSize : "15px",padding : "20px 10px 10px 10px"
            }}
            >Software engineer</div>
            <div style = {{
                borderTop : "1px solid lightgrey",width:"100%"
            }}> </div>

            <div style={{fontSize:"12px",padding:"20px 0px 10px"}}>
                Who viewed your profiles : 100
            </div>

            <div style={{
                fontSize : "12px",paddingBottom : "20px"
            }}>Who viewed your profiles : 100</div>

            <div style = {{
                borderTop : "1px solid lightgrey",width:"100%"
            }}></div>

            <div 
                style = {{fontSize : "12px",paddingTop:"20px"}}
            >Try premium</div>

        </div>
    )
}
