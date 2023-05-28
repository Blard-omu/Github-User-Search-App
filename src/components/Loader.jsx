import React from 'react'

const Loader = () => {
  return (
    <div className=''>
        <div class="spinner-border text-light" role="status">
            <span class="visually-hidden">Loading...</span>
        </div>
        <p className='text-light'>Loading...</p>
    </div>
  )
}

export default Loader