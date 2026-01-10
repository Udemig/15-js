import React from 'react'
import "./componentStil.css"

/* {} ler kullanmazsam gelen parametre bir objedir ve props uzerinden icine erisirim
ama eger {} icinde isimlendirme yaparsam direk degiskene erisebilirim */
function Kisi({gelenKisi}) {

    const listeStil = {
        fontSize: "20px",
        color: "white",
        margin: "10px",
        padding: "10px",
        backgroundColor: "red"
    }

  return (
    <div>
        <h2 style={listeStil}> ben {gelenKisi.ad}. <h3 className='sinif2'>yasim {gelenKisi.yas} </h3>ve boyum {gelenKisi.boy}</h2>
    </div>
  )
}

export default Kisi