import { Article, Event, Photo, PlayArrow, Search, Sync } from '@mui/icons-material';
import { Avatar } from '@mui/material';
import React,{useState,useEffect} from 'react'


function Feed({width}) {
    const [feedList, setFeedList] = useState([]);
    const [feedsPerPage, setFeedPerPage] = useState(20);
    const [currentPage , setCurrentPage] = useState(1);
    const [totalPage, setTotalPage] = useState(0);


    useEffect(()=>{
        // fetch("https://jsonplaceholder.typicode.com/posts")
        // .then(res=>res.json())
        // .then(body=>{
        //     console.log(body);
        //     setFeedList(body);

        //     let totalPage = (body.length)/feedsPerPage; //float => 1.3
        //     totalPage = Math.ceil(totalPage)
        //     setTotalPage(totalPage);
        // })

        fetch(`http://openlibrary.org/search.json?q=google&page=${currentPage}&limit=${feedsPerPage}&offset={(currentPage-1)*feedPerPage}`)
        .then(res=>res.json())
        .then(body=>{
            console.log(body.docs);
            setFeedList([...feedList,...body.docs]);

            let totalPage = (body.length)/feedsPerPage; //float => 1.3
            totalPage = Math.ceil(totalPage);

            setTotalPage(totalPage);
        })
    },[currentPage]);
    const updateCurrentPage = (pageNo) => {
        pageNo = parseInt(pageNo);
        setCurrentPage(pageNo);
    }
    // const onClickNext = () => {
    //     if(currentPage < totalPage){
    //         setCurrentPage(currentPage+1);
    //     }
    // }
    return (
        <div className='feeds'
        style={{
            overflowY:"auto",
            height : "90vh",
            flex : width,
        }}
        >
            <div className = "create-post"
            style={{
                padding:"20px",
                backgroundColor:"white",
                borderRadius : "10px",
                marginBottom : "20px"
            }}
            >
        <div className='post' style={{display : "flex",alignItems:"center"}}>

            <Avatar src="https://media-exp1.licdn.com/dms/image/C5603AQEZHMNB_lRQig/profile-displayphoto-shrink_100_100/0/1612844624764?e=1646870400&v=beta&t=sfj0tzvh_FY2i9J7Rf-ylP9seAm0za3Nk9yM2hj7Fkg"
            style={{height:"50px",width:"50px",border:"2px solid grey",marginRight:"10px"}}/>

            <input placeholder='start a post' style = {{               
                alignItems : "center",
                border : "1px solid lightgrey",
                borderRadius : "30px",
                outline : "none",
                paddingLeft : "25px",
                height : "40px",
                flex : 1
                }}/>

        </div>
        <div className='tags'
            style = {{
                display : "flex",
                justifyContent : "space-between",
                width : "100%",
                marginTop : "10px",
                fontSize : "15px"
            }} 
        >
            <div>
                <Photo style={{color:"#87b1c9"}} />
                <span>Photo</span>
            </div>
            <div>
                <PlayArrow style = {{color:"#8bc785"}}/>
                <span>Video</span>
            </div>
            <div>
                <Event style = {{color:"#c6c783"}}/>
                <span>Event</span>
            </div>
            <div>
                <Article style ={{color:"#c79483"}}/>
                <span>Article</span>
            </div>
        </div>
    </div>
            <div className = "right-icons"
            style={{
                display : "flex",
                alignItems : "center",
            }} 
            ></div>
            <div style = {{
                borderTop : "1px solid lightgrey",width:"100%"
            }}></div>

        <div className='feedpost'
        style={{marginTop:"20px"}} 
        >
            
            {
                feedList.length>0 ? 
                feedList.map((feed, index)=>(
                <div key = {index}
                    style = {{marginBottom:"20px",borderRadius:"10px",backgroundColor:"white",padding:"20px"}}
                >
                    {index+1} : {feed.title}
                    <div style = {{
                            borderTop : "1px solid lightgrey",width:"100%",margin : "20px 0"
                        }}></div>
                    <img width={"90%"} src="https://images.unsplash.com/photo-1521575107034-e0fa0b594529?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cG9zdHxlbnwwfHwwfHw%3D&w=1000&q=80"></img>
                </div>
                ))
                :(
                    <div style={{
                        display : "flex",
                        alignItems : "center",
                        justifyContent : "center",
                        height : "60vh"
                    }}
                    >
                        <Sync
                           style = {{fontSize:"100px"}}
                        />
                    </div>
                )
            }
{/* 
            {feedList.map((feed, index)=>
                index <= currentPage*feedsPerPage && index > (currentPage-1)*feedsPerPage ? (

                <div style = {{marginBottom:"20px",borderRadius:"10px",backgroundColor:"white",padding:"20px"}}
                >
                    <b style={{padding:"20px 0px"}}>{index} : {feed.title}</b>
                    <br/>
                    // {feed.body}
                    // {feed.body}
                    // {feed.body}
                    // {feed.body}
                    // {feed.body}
                </div>
            ) : ''
            )}  */}
        </div>
        <div style={{width:"100%",textAlign:"center"}}>
            {/* <button onClick={(e)=>{updateCurrentPage(e.target.innerText)}}>1</button>
            <button onClick={(e)=>{updateCurrentPage(e.target.innerText)}}>2</button>
            <button onClick={e=>onClickNext()}>Next</button> */}
            <button onClick={()=>setCurrentPage(currentPage+1)}>load more</button>
        </div>
        </div>
    )
}

export default Feed
