import React from 'react'

export default function News() {
  return (
    <div style={{ width: '100%', textAlign: 'center' }}>
    <h1 style={{ marginTop: '20px' }}>News</h1>
    <p style={{ marginTop: '20px' }}><strong>‼️Ценообразование‼️</strong></p>
    <p style={{ marginTop: '20px' }}><strong>ManheimMarketReport (MMR)</strong>, – обзор состояния рынка. Это статистика цен на автомобили, 
    вычисленная по результатам миллионов фактических продаж. 
    MMR является самым точным механизмом изучения цен на авто, позволяя нам свободно в них ориентироваться.
    Простым языком MMR- средняя цена на данный конкретный автомобиль.
    </p>
    <p style={{ marginTop: '20px' }}><strong>‼️Экстра платежи, которые вы платите помимо ставки‼️</strong></p>
    <ul className='newsList' style={{listStyle: 'none' , display: 'flex', flexDirection: 'column', alignItems: 'start'}}>
      <li>1️⃣ 350$ auction fee (примерно, зависит от суммы ставки)</li>
      <li>2️⃣ 399$ failing processing fee (обработка документов)</li>
      <li>3️⃣ 450$ dealer fee (наша комиссия)</li>
      <li>4️⃣ 99$ temporary plate (временный номер и регистрация)</li>
      <li>5️⃣ 468$ registration and license plate (регистрация с постоянным номером)</li>
      <li>6️⃣ 7% Florida tax (налог штата Флорида от стоимости автомобиля)</li>
    </ul>

<strong>‼️Внимание‼️</strong>
Если вы покупаете автомобиль и проживаете не в штате Флорида, то последние 2 пункта (регистрацию и налог) вы оплачиваете в DMV своего штата, после того, как мы пришлем вам Title по почте. 

‼️Также при просмотре автомобилей на маркетплейсах учитываете, что в объявлениях указана цена только за автомобиль, без учета комиссий, налога и регистрации‼️
  </div>
  )
}
