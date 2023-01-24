import React from 'react'
import './Chats.css'
import { Avatar } from '@mui/material'
export default function chats(props) {
  return (
    <div className='chats'>
        <div className='chats_header'>         {/*header-avatar+username*/}
            <Avatar
            className='chats_avatar'           
            alt='{userName}'
            src={props.imageUrl}
            />
            <h5>{props.username}</h5>
        </div>
    </div>
  )
}
