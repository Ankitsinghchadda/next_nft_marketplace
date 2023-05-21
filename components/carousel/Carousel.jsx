import React from 'react'
import data from './data'
import NFTCard from '../Card/NFTCard'

const Carousel = () => {
  return (
    <div className='px-4 md:px-8 mb-10 h-full'>
      <div className='flex mb-2 font-semibold text-lg md:text-xl'>
        <h2>Top Collector Buys Today</h2>
      </div>

      <div className='flex gap-2 md:gap-4 -mx-5 px-5 overflow-y-hidden py-4 container-snap'>
        {data.map((item) => {
            const {id, img} = item
            return (
                <NFTCard key={id} img={img}/>
            )
        })}
      </div>
    </div>
  )
}

export default Carousel
