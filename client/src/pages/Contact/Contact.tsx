import React from 'react'
import orlando from '../../components/assets/orlando.jpg'

export default function Contact() {
  return (
    <div style={{ width: '100%', textAlign: 'center' }}>
      <h1 style={{ marginTop: '20px' }}>Contact</h1>
      <p style={{ marginTop: '20px' }}>✍️ Личном Сообщении @AndrewRudovich</p>
      <p>📞 Звоните +1(407)8001554</p>
      <img src={orlando} alt="orlando" style={{borderRadius: '65px', width: '100%', padding: '50px'}} />
    </div>
  )
}
