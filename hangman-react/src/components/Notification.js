import React from 'react'

const Notification = ({showNotification}) => {
    return (
        <div className={`notification-container ${showNotification ? 'show' : ''}`}>
        <p>此字母已经输入过，请重新输入</p>
      </div>
    )
}

export default Notification
