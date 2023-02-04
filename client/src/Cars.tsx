import React from 'react'
import dataCars from './data_1.json'

export default function Cars() {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around' }}>
      {dataCars.adminEvents.media.medias.map((img) => {
        const objCar = dataCars.adminEvents.assets.assets
        const {vin, model, year, make, mileage, exteriorColor, fuelType} = objCar[img.entityId as unknown as keyof typeof objCar].searchable
        return (
          <div key={img.id} style={{ display: 'flex', margin: '5px' }}>
            <img src={img.urls.medium} style={{ width: '250px' }} />
            <div style={{ width: '150px', marginLeft: '10px' }}>
            <h3>{make} {model} {year}</h3>
            <h5>mile: {mileage}</h5>
            <h5>vin: {vin}</h5>
            <h5>exteriorColor: {exteriorColor}</h5>
            <h5>fuelType: {fuelType}</h5>
            </div>
          </div>
        )
      })}
    </div>
  )
}
