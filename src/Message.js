import React from 'react'
import './Message.css'
import { Avatar } from '@material-ui/core'


function Message({timeStamp,user,message}) {
    

    return (
        <div className='message'>
            {console.log('data',user,message,timeStamp)}
            <Avatar src={user.photo}/>
            <div className="message__info">
                <h4>{user.displayName}
                    <span className='message__timestamp'>                        
                        {(timeStamp?(new Date(timeStamp.seconds)).toString():'')}
                    </span>
                </h4>
                <p>{message}</p>
            </div>
        </div>
    )
}

export default Message
