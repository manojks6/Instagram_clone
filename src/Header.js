import React from 'react'
export default function Header() {
  return (
    <div>
        <div className="app_header">
            <img className='insta' 
                src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZCh3K9tyzUaJXwyRMFzgBJs3tVH5lN8FUu5ewtAj6Oh1yBVqbdNX73mSKpsEhKfnz0g&usqp=CAU' 
                alt=''
            />
            <div className='app_headerButtons'>
                <button className='app_headerButton' onClick={""}> Login</button>     
                <button className='app_headerButton' onClick={""}> SignUp</button>      
            </div> 
        </div>
    </div>
  )
}
