'use client'
import Image from 'next/image'
import React from 'react'
import img from '../../public/my icon.png'


 
const ImagesUse = () => {
  const imageLoader = ({ src, width, quality }) => {
  return `https://example.com/${src}?w=${width}&q=${quality || 75}`
}
  return (
    <div>
        <Image src={img} 
         width={200}
         alt='myicon'
        //  blurDataURL='ok'
        //  placeholder='blur'
        //  loader={imageLoader}
          />
    </div>
  )
}

export default ImagesUse