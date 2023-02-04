import { Button, Card } from '@mui/material'
import React from 'react'
import dataCars from '../../data_1.json'
import SpeedTwoToneIcon from '@mui/icons-material/SpeedTwoTone'
import LocalGasStationTwoToneIcon from '@mui/icons-material/LocalGasStationTwoTone'
import TitleTwoToneIcon from '@mui/icons-material/TitleTwoTone'
import EmojiObjectsTwoToneIcon from '@mui/icons-material/EmojiObjectsTwoTone'

export default function Cars() {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around' }}>
      {dataCars.adminEvents.media.medias.map((img) => {
        const objCar = dataCars.adminEvents.assets.assets as any
        const { model, year, make, mileage, fuelType, estimates, transmission } =
          objCar[img.entityId as keyof typeof objCar].searchable
        const trans = transmission ? transmission.split(' ')[0] : transmission
        return (
          <Card
            key={img.id}
            style={{
              display: 'flex',
              margin: '5px',
              width: '250px',
              height: '380px',
              flexDirection: 'column',
            }}
          >
            <div>
              <img src={img.urls.medium} style={{ width: '250px' }} />
            </div>

            <div style={{ width: '100%', marginLeft: '5px' }}>
              <h3 className='card-title'>
                {make} {model} {year}
              </h3>
              <div className='card-mmr'>
                <p style={{ fontSize: '14px' }}>
                  MMR: <strong>${estimates[1].average || 'N/A'}</strong>
                </p>
              </div>
              <div className='card-line'></div>
              <div style={{ display: 'flex' }}>
                <p style={{ display: 'flex', alignItems: 'center', fontSize: '16px' }}>
                  {<SpeedTwoToneIcon style={{ fontSize: '18px' }} />} {mileage} mi
                </p>
                <p style={{ display: 'flex', alignItems: 'center', fontSize: '16px' }}>
                  {<TitleTwoToneIcon style={{ fontSize: '18px', marginLeft: '30px' }} />}
                </p>
                <p>{trans || 'N/A'}</p>
              </div>
              <div style={{ display: 'flex' }}>
                <p style={{ display: 'flex', alignItems: 'center', fontSize: '16px' }}>
                  {<LocalGasStationTwoToneIcon style={{ fontSize: '18px' }} />} {fuelType}
                </p>
                <p style={{ display: 'flex', alignItems: 'center', fontSize: '12px' }}>
                  {<EmojiObjectsTwoToneIcon style={{ fontSize: '18px', marginLeft: '60px' }} />}
                  <span className='card-light'>G</span>
                  <span className='card-light'>Y</span>
                  <span className='card-light'>R</span>
                  <span className='card-light'>B</span>
                  <span className='card-light'>W</span>
                </p>
              </div>
              <div className='card-button'>
                <Button variant='contained' color='success'>
                  Order
                </Button>
              </div>
            </div>
          </Card>
        )
      })}
    </div>
  )
}
