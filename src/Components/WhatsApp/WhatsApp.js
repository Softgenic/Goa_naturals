import React from 'react'
import FloatingWhatsApp from 'react-floating-whatsapp'
import GoaNaturalsAvatar from "../Assets/Goa-natural/goafav.jpg"
const WhatsApp = () => {
  return (
    <div>
        <FloatingWhatsApp
        avatar={GoaNaturalsAvatar}
        allowClickAway
        accountName='Goa Naturals'
        notification
        />
    </div>
  )
}

export default WhatsApp