'use client'
import { useRouter } from 'next/navigation'
import React from 'react'
const UseRouter = () => {
  const router = useRouter();
  return (
    <div className='p-3'>
      <p >Use Router</p>
      <button onClick={() => router.push('/contact')} className='px-2 py-3 bg-green-300' >Go to contact page by useRouter</button>
    </div>
  )
}

export default UseRouter
