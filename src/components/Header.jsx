import React from 'react'

const Header = (props) => {
const { title = "Welcome to Techstudio", desc = "You can become a tech pro in just one week"} = props
  return (
    <div>
        <div className="container bg-light m-4 p-3 col-md-8 offset-md-2 shadow-lg text-center">
            <h1 className='bg-primary text-light p-3'>{title}</h1>
            <p className='bg-info text-dark p-2 mx-4'>{desc}</p>

        </div>
    </div>
  )
}

export default Header
