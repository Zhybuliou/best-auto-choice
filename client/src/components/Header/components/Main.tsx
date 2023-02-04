import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../../assets/logo.jpg'
import CottageTwoToneIcon from '@mui/icons-material/CottageTwoTone'
import TimeToLeaveTwoToneIcon from '@mui/icons-material/TimeToLeaveTwoTone'
import ArticleTwoToneIcon from '@mui/icons-material/ArticleTwoTone'
import ContactPhoneTwoToneIcon from '@mui/icons-material/ContactPhoneTwoTone'

export default function Main() {
  const activeStyle = {
    background: '#282828',
    color: 'white',
  }
  return (
    <div>
      <div
        className='Logo'
        style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}
      >
        <img
          src={logo}
          alt='Logo'
          style={{
            width: '120px',
            height: '120px',
            marginTop: '14px',
            borderRadius: '25px',
            boxShadow: '5px 5px 5px 0px rgba(0,0,0,0.3)',
          }}
        />
        <div style={{ marginTop: '63px' }}>
          <ul className='navMenu' style={{ listStyle: 'none' }}>
            <li>
              <NavLink to='/' style={({ isActive }) => (isActive ? activeStyle : undefined)}>
                {<CottageTwoToneIcon style={{ margin: '5px' }} />} Home
              </NavLink>
            </li>
            <li>
              {' '}
              <NavLink to='/catalog' style={({ isActive }) => (isActive ? activeStyle : undefined)}>
                {<TimeToLeaveTwoToneIcon style={{ margin: '5px' }} />}Car Catalog
              </NavLink>
            </li>
            <li>
              {' '}
              <NavLink to='/news' style={({ isActive }) => (isActive ? activeStyle : undefined)}>
                {<ArticleTwoToneIcon style={{ margin: '5px' }} />}News
              </NavLink>
            </li>
            <li>
              {' '}
              <NavLink to='/contact' style={({ isActive }) => (isActive ? activeStyle : undefined)}>
                {<ContactPhoneTwoToneIcon style={{ margin: '5px' }} />}Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
