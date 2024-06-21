import React from 'react'
import { Button } from '../ui/button'

const AppTopbar = () => {
  return (
    <div>
        <Button
        className='bg-white stroke-black'
        variant={'ghost'}
        >
        <svg xmlns="http://www.w3.org/2000/svg" 
        width="24" 
        height="24" 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        stroke-width="2" 
        stroke-linecap="round" 
        strokeLinejoin="round" 
        className="lucide lucide-command"><path d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3"/></svg>
        </Button>
    </div>
  )
}

export default AppTopbar