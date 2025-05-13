import UseRouter from '@/component/UseRouter'
import Link from 'next/link'
import React from 'react'

export default function page() {
  return (
    <div>
      <h1>Hwllo</h1>
      <p className='font' >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor dolores molestias fugit illo quibusdam ipsam, sit in ab minima voluptatem veniam totam ut asperiores dolore eos reiciendis eligendi praesentium dicta.</p>

      <div className=' my-10 p-10 flex items-center gap-4 ' >

      <Link href={'/products'} className='px-2 py-3 bg-green-500'  >Product Pages</Link> 
      <Link href={'/java'} className='px-2 py-3 bg-green-400'>java Pages</Link> 
      <Link href={'/contact'} className='px-2 py-3 bg-green-300' >contact Pages</Link> 
      </div>
      <UseRouter/>




    </div>
  )
}
