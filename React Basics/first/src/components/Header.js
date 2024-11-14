import React from 'react'

function Header(props) {
    console.log(props)
  return (
    <div className='bg-green-400 font-bold text-2xl flex justify-center py-6 '>
      {props.name} domain is  a {props.domain}
    </div>
  )
}

export default Header
