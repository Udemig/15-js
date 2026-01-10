import React from 'react'

const Header = (props) => {
    console.log(props.isim)
    console.log(props.yas)

   
    function tiklandi() {
        console.log("memo tiklandi")
    }

  return (
    <div >
        <div className='header1' > 
            <div>
                <b>Udemig</b>
            </div>
            <div>
                <ul className='header-menu'>
                    <li>
                        <button onClick={tiklandi}>{props.isim}</button>
                    </li>
                    <li>
                        <a href="">{props.yas}</a>
                    </li>
                    <li>
                        <a href="">Bize Ulas</a>
                    </li>
                    <li>
                        <a href="">Projelerimi</a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Header