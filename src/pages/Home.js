import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { v4 as uuidv4 } from 'uuid'
import {useNavigate} from 'react-router-dom'
const Home = () => {
    const [roomId, setRoomId] = useState('');
    const [username, setUsername] = useState('');
    const navigate =  useNavigate();

    const createNewRoom = (e) => {
        e.preventDefault();
        const id = uuidv4();
        setRoomId(id);
        // console.log(id);
        toast.success('Room Created');
    }

    const joinRoom=()=>{
        if(!roomId) 
        {
            toast.error("Room Id is required");
            return;
        }
        if(!username) 
        {
            toast.error("Username is required");
            return;
        }

        toast.success("Welcome");
        navigate(`/editor/${roomId}`,{
            state:{
                username
            }
        })
    }

    const handleInputEnter=(e)=>{
        if(e.code==="Enter"){
            joinRoom();
        }
    }
    return (
        <div className="homePageWrapper">
            <div className="formWrapper">
                <h3 className='mainLabel'>Enter your ROOM ID</h3>
                <div className="inputGroup">
                    <input
                        type="text"
                        className="inputBox"
                        placeholder="ROOM ID"
                        onChange={(e)=> setRoomId(e.target.value)}
                        value = {roomId} 
                        onKeyUp={handleInputEnter}/>
                    <input
                        type="text"
                        className="inputBox"
                        placeholder="USERNAME"
                        onChange={(e)=> setUsername(e.target.value)}
                        value = {username} 
                        onKeyUp={handleInputEnter}/>
                    <button onClick={joinRoom} className='btn joinBtn'>JOIN</button>
                    <span className='createInfo'>
                        If you don't have an invite then create a &nbsp;
                        <a onClick={createNewRoom} href='/' className='createNewBtn'>
                            New Room
                        </a>
                    </span>
                </div>
            </div>
            <footer>
                <h3>
                    Get the Github code at &nbsp; {' '}
                    <a href='https://github.com/sharique-111' target="_blank" rel="noopener noreferrer">RealTime Editor</a>
                </h3>
            </footer>
        </div>
    )
}

export default Home