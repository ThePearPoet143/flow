import React from 'react'
import { Button } from '../ui/button'

const BibleHeaderbar = () => {
    return (
      <header className='w-full fixed top-16 z-10 bg-white flex flex-row-reverse gap-2 items-center'>
        <Button 
          variant={'secondary'}
          className='rounded-2xl flex items-center gap-2 mr-4'
        >
          <ScanDataIcon className="w-4 h-4" />
          KJV
        </Button>
        <SearchIcon className="w-4 h-4 " />
        
      </header>
    )
  }

const ScanDataIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" 
    width="16" 
    height="16" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    stroke-width="2" 
    stroke-linecap="round" 
    strokeLinejoin="round" 
    className="lucide lucide-globe"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>
)

const SearchIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" strokeLinejoin="round" className="lucide lucide-search"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
)


export default BibleHeaderbar