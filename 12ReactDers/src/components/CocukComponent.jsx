import React from 'react'

function CocukComponent(props) {
  return (
    <div>
        <button onClick={()=>props.selamiYakala("cocukk")}>Selamla Aileni</button>
    </div>
  )
}

export default CocukComponent
