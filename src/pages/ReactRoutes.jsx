import React from 'react'

const ReactRoutes = () => {
  return (
    <div className='mt-3 flex flex-col gap-2.5 justify-evenly pl-2.5'>
        <h1 className='text-2xl font-black '>Custom Framework</h1>

        <span className='text-sm text-gray-600'>Instead of using @react-router/dev, you can integrate React Router's framework features (like loaders, actions, fetchers, etc.) into your own bundler and server abstractions.</span>
        
        <ul className='list-decimal list-inside'>
            <li>Create Router</li>
            <li>Render the Route</li>
            <li>Lazy Loading</li>
            <li>Server Rendering</li>
        </ul>
        
        <span className='text-red-700 mt-3.5 text-2xl'>*Note</span>

        <p>Search in the URL - <u>/user/:id</u> you will get user Id </p>
        <p className='text-2xl text-fuchsia-700'>Example for the above statement is <span className='text-blue-600'>"http://localhost:5173/user/:49933"</span> you will get User Id as <span className='text-blue-950'> <u>49933</u></span> </p>
    </div>
  )
}

export default ReactRoutes
