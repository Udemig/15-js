import React from 'react'
import Kisi from './Kisi'

const IsimListele = () => {

    const isimler = ["Esra","memo","mert","ersan","omer","busra"]
    const isimListesi = isimler.map((isim, index)=> <h3 key={index}>{isim}, sira {index}</h3>)
    const mahalle = [
        {
            id: 1,
            ad: "Esra",
            yas: 30,
            boy: 160
        },
         {
            id: 2,
            ad: "Esra",
            yas: 35,
            boy: 170
        },
         {
            id: 3,
            ad: "Emre",
            yas: 32,
            boy: 190
        }
    ]

    // const mahalleListesi = mahalle.map(kisi => <h2>ben {kisi.ad}. yasim {kisi.yas} ve boyum {kisi.boy}</h2>)
    /* 
    key bir props olamaz, kod icinde kullanilan bir anahtardir, degerler baska sekilde yinede aktarilabilininir.
    Props uzeriden. Her bir listeleme yaparken key degeri atanmalali benzersiz olarak, id degerleri veya index
    ile 
    */
    const mahalleListesi = mahalle.map(kisi => <Kisi key={kisi.id} gelenKisi={kisi} />)

  return (
    <div>
       <div> { isimListesi }</div>
       <div>{mahalleListesi}</div>

    </div>
  )
}

export default IsimListele
