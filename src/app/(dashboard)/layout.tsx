import React from 'react'

const layout = ({children} : {children: React.ReactNode}) => {
  return (
    <div>
        <h1 className='text-red-500 text-2xl font-medium tracking-wide'>Dashboard Navbar</h1>
        {children}
    </div>
  )
}

export default layout