import React from 'react'
import './ChatHeader.css'
import { CgProfile } from 'react-icons/cg';
import { CiSearch } from 'react-icons/ci';
import {RxAvatar} from 'react-icons/rx' 
import {SlHome} from 'react-icons/sl' 
import {BsHeart} from 'react-icons/bs'

export default function ChatHeader() {
  return (
    <div>
      <div className='header'>
        <div className='icons'><SlHome size={44}/></div>
        <div className='icons' ><BsHeart size={44} /></div>
        <div className='icons'><CiSearch size={55}/></div>
        <div className='icons'><RxAvatar size={50}/></div>
      </div>
    </div>
  )
}
