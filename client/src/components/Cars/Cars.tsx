import { Button, Card } from '@mui/material'
import React from 'react'
import dataCars from '../../data_2.json'
import SpeedTwoToneIcon from '@mui/icons-material/SpeedTwoTone'
import LocalGasStationTwoToneIcon from '@mui/icons-material/LocalGasStationTwoTone'
import TitleTwoToneIcon from '@mui/icons-material/TitleTwoTone'
import EmojiObjectsTwoToneIcon from '@mui/icons-material/EmojiObjectsTwoTone'

export default function Cars() {
  const buttonGreen = {
    background: 'green',
    color: 'white',
  }
  const buttonYellow = {
    background: 'yellow',
    color: 'white',
  }
  const buttonRed = {
    background: 'red',
    color: 'white',
  }
  const buttonBlue = {
    background: 'blue',
    color: 'white',
  }
  const buttonWhite = {
    background: '#ccc',
    color: 'white',
  }
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around' }}>
      {dataCars.media.medias.map((img) => {
        const objCar = dataCars.assets.assets as any
        const mmr = objCar[img.entityId as keyof typeof objCar].searchable.estimates[1]
        let price
        if (mmr) {
          price = mmr.average
        }
        const {
          model,
          year,
          make,
          mileage,
          fuelType,
          transmission,
          greenLight,
          redLight,
          whiteLight,
          yellowLight,
          blueLight,
        } = objCar[img.entityId as keyof typeof objCar].fields
        const trans = transmission ? transmission.split(' ')[0] : transmission
        return (
          <Card
            key={img.id}
            style={{
              display: 'flex',
              margin: '5px',
              width: '320px',
              height: '400px',
              flexDirection: 'column',
            }}
          >
            <div>
              <img src={img.urls.small} style={{ width: '320px', height: '100%' }} alt={model} />
            </div>

            <div style={{ width: '100%', marginLeft: '5px' }}>
              <h3 className='card-title'>
                {make} {model} {year}
              </h3>
              <div className='card-mmr'>
                <p style={{ fontSize: '14px' }}>
                  MMR: <strong>${price || 'N/A'}</strong>
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
                  <span className='card-light' style={greenLight ? buttonGreen : undefined}>
                    G
                  </span>
                  <span className='card-light' style={yellowLight ? buttonYellow : undefined}>
                    Y
                  </span>
                  <span className='card-light' style={redLight ? buttonRed : undefined}>
                    R
                  </span>
                  <span className='card-light' style={blueLight ? buttonBlue : undefined}>
                    B
                  </span>
                  <span className='card-light' style={whiteLight ? buttonWhite : undefined}>
                    W
                  </span>
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
