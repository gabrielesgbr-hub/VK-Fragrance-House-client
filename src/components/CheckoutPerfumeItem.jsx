import React from 'react'

const CheckoutPerfumeItem = ({perfume}) => {
  return (
    <div className="row my-3">
        <div className="col-3">
            <img src={perfume.img} alt={perfume.nombre} className='checkout-img' style={{objectFit:'cover', height:'100%'}} />
        </div>
        <div className="col-6">
            {perfume.nombre}
            <br />
            {perfume.cantidad} ✕ ${perfume.precio.toLocaleString('es-MX', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
        </div>
        <div className="col-3">
            ${(perfume.precio*perfume.cantidad).toLocaleString('es-MX', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
        </div>
    </div>
  )
}

export default CheckoutPerfumeItem