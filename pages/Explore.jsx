import React from 'react'
import NFTCard from '../components/Card/NFTCard'

const Explore = () => {
  return (
    <div className='pt-[72px] px-6 md:px-8'>
      <h2 className='mt-4 font-semibold text-3xl mb-8'>Explore</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 grid-auto-flow lg:grid-cols-5 gap-2 md:gap-4 flex-wrap py-4">
        <NFTCard img={`https://images.unsplash.com/photo-1682686581551-867e0b208bd1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80`}
        width={'w-full'}
        name={'Buy'}
        />
      </div>
    </div>
  )
}

export default Explore
