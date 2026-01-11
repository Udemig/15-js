import React from 'react'

const MemoComp = ({isim}) => {
    console.log("MemoComp render ediliyor")
  return (
    <div>MemoComp {isim}</div>
  )
}

export default React.memo(MemoComp)