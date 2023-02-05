import React from 'react'
import Cars from '../../components/Cars/Cars'

export default function Catalog() {
  return (
    <div style={{ width: '100%' }}>
      <div className='catalog-page' style={{ display: 'flex' }}>
        <div className='catalog-cars'>
          <h3
            style={{
              fontSize: '28px',
              fontFamily: 'Roboto',
              fontWeight: '500',
              textAlign: 'center',
            }}
          >
            Car Catalog of Orlando
          </h3>
          <Cars />
        </div>
        <div className='catalog-filter'>
          <h3
            style={{
              fontSize: '28px',
              fontFamily: 'Roboto',
              fontWeight: '500',
              textAlign: 'center',
            }}
          >
            Filter
          </h3>
        </div>
      </div>
    </div>
  )
}
