import React from 'react'
import {AiFillHeart} from 'react-icons/ai' 
import {BsMessenger} from 'react-icons/bs' 
import { FaShare } from 'react-icons/fa';
import './Post.css'
import { Avatar } from '@mui/material'
function Post(props) {
  return (
    <div className='post'>
        <div className='post_header'>         {/*header-avatar+username*/}
            <Avatar
            className='post_avatar'
            src={props.dp}
            alt='{userName}'
            />
            <h3>{props.userName}</h3>
        </div>
      
        <img className='post_img' src={props.imageUrl} alt='im' /> {/*img*/}
        <div className='like_sheare_comment' style={{color: 'red'}}><AiFillHeart size={30} /></div>
        <div className='like_sheare_comment' style={{color: 'black'}}><BsMessenger size={26} /></div>
        <div className='like_sheare_comment' style={{color: 'black'}}><FaShare size={26} /></div>


        <h4 className='post_text'><strong>{props.userName} </strong><p style={{fontFamily: "Monaco"}}>{props.caption}</p></h4>   {/*username + caption*/}
        
    </div>
  )
}

export default Post
